import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "../../client";
import {
  Box,
  Button,
  Flex,
  Table,
  TableContainer,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Heading,
  Spinner,
  VStack,
} from "@chakra-ui/react";
import TaskList from "./TaskList";

function ProjectAndTaskPage() {
  const { id } = useParams(); // Get the project ID from the URL
  const [project, setProject] = useState(null); // Store project details
  const [tasks, setTasks] = useState([]); // Store related tasks
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    async function fetchProjectAndTasks() {
      try {
        setLoading(true);

        // Fetch project details based on the ID from URL
        const { data: projectData, error: projectError } = await supabase
          .from("projects")
          .select("*")
          .eq("id", id)
          .single();

        if (projectError) throw projectError;

        console.log("Fetched project:", projectData); // Debugging log
        setProject(projectData);

        // Fetch tasks related to the project
        const { data: taskData, error: taskError } = await supabase
          .from("tasks") // Ensure this table exists
          .select("*")
          .eq("project_id", id);

        if (taskError) throw taskError;

        console.log("Fetched tasks:", taskData); // Debugging log
        setTasks(taskData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProjectAndTasks();
  }, [id]);

  if (loading) {
    return (
      <Flex justifyContent="center" alignItems="center" height="100vh">
        <Spinner size="xl" />
      </Flex>
    );
  }

  if (!project) {
    return (
      <Flex justifyContent="center" alignItems="center" height="100vh">
        <Heading fontSize={25}>Choose the project you want to view in Dashboard.</Heading>
      </Flex>
    );
  }

  return (
    <Flex flexDir="column" m="20px 65px" gap="30px">
      {/* Project Details */}
      <Box  p="20px">
        <Heading as="h2" size="lg" mb="20px">
          {project.name}
        </Heading>
        <VStack alignItems={"left"} gap={2}>
          <Flex><Flex fontWeight={"bold"} m={"0 10px 0 0"}>Description:</Flex> {project.description}</Flex>
          <Flex><Flex fontWeight={"bold"} m={"0 10px 0 0"}>Status:</Flex> {project.status}</Flex>
          <Flex><Flex fontWeight={"bold"} m={"0 10px 0 0"}>Priority:</Flex> {project.priority}</Flex>
          <Flex><Flex fontWeight={"bold"} m={"0 10px 0 0"}>Due Date:</Flex> {project.duedate}</Flex>
        </VStack>
        
      </Box>

      {/* Task Table */}
      <TaskList/>
      
    </Flex>
  );
}

export default ProjectAndTaskPage;




