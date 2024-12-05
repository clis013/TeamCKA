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
        <Heading>Choose the project you want to view in Dashboard.</Heading>
      </Flex>
    );
  }

  return (
    <Flex flexDir="column" m="20px" gap="30px">
      {/* Project Details */}
      <Box  p="20px">
        <Heading as="h2" size="lg" mb="10px">
          {project.name}
        </Heading>
        <Flex>Description: {project.description}</Flex>
        <Flex>Status: {project.status}</Flex>
        <Flex>Priority: {project.priority}</Flex>
        <Flex>Due Date: {project.duedate}</Flex>
      </Box>

      {/* Task Table */}
      <TaskList/>
      
    </Flex>
  );
}

export default ProjectAndTaskPage;




