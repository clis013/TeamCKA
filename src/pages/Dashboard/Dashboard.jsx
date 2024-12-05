import { Box, Button, Flex, Input, useDisclosure, Table, Thead, Tbody, Tr, Th, Td, TableContainer, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Stack, Select, Textarea, HStack } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { supabase } from "../../client";
import { Link } from 'react-router-dom';
import { Link as RouterLink } from "react-router-dom";

function Dashboard() {
  const [projects, setProjects] = useState([]);
  const [project, setProject] = useState({
    name: '', description: '', status: '', priority: '', duedate: ''
  });
  const [project2, setProject2] = useState({}); // State for selected project to edit
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    getProjects();
  }, []);

  async function getProjects() {
    const { data } = await supabase.from('projects').select('*');
    setProjects(data);
  }

  function handleChange2(event) {
    setProject2(prevFormData => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  }

  function handleChange(event) {
    setProject(prevFormData => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  }

  async function createProject() {
    const { error } = await supabase.from('projects').insert({
      name: project.name,
      description: project.description,
      status: project.status,
      priority: project.priority,
      duedate: project.duedate,
    });
    if (error) {
      console.error("Error creating project:", error);
    }
    getProjects();
    onClose();
  }

  async function updateProject(projectId) {
    const { error } = await supabase
      .from('projects')
      .update({
        name: project2.name,
        description: project2.description,
        status: project2.status,
        priority: project2.priority,
        duedate: project2.duedate,
      })
      .eq('id', projectId);
    if (error) {
      console.error("Error updating project:", error);
    }
    getProjects(); // Refresh the project list after updating
    onClose(); // Close the modal after saving
  }

  async function deleteProject(projectId) {
    const { error } = await supabase.from('projects').delete().eq('id', projectId);
    if (error) {
      console.error("Error deleting project:", error);
    }
    getProjects(); // Refresh the project list after deleting
  }

  // Handle clicking the "Edit" button
  function handleEdit(projectId) {
    const selectedProject = projects.find(p => p.id === projectId);
    setProject2(selectedProject); // Set the selected project for editing
    onOpen(); // Open the modal
  }

  return (
    <>
      <Flex flexDir={"column"} m={"0 15px"}>
        <Flex m={"40px 50px 0"} fontSize={"35"} fontWeight={"bold"}>
          Dashboard
        </Flex>

        {/* Create Project Modal */}
        <Flex justifyContent={"flex-end"} m={"0 50px"}>
          <Button onClick={onOpen}>New Project</Button>
        </Flex>

        {/* Edit Project Modal (Styled to match the previous design) */}
        <Modal isOpen={isOpen} onClose={onClose} size={"2xl"}>
          <ModalOverlay />
          <ModalContent bg={"white"} boxShadow={"xl"} border={"1px solid gray"} mx={3}>
            <ModalHeader />
            <ModalCloseButton />
            <ModalBody>
              <Flex bg={"white"}>
                <Stack spacing={7} w={"full"} bg={"white"} p={6} my={0}>
                  <form onSubmit={() => updateProject(project2.id)}>
                    <Flex flexDir={"column"} gap={10}>
                      {/* Project Name */}
                      <Flex flexDir={"column"} gap={3}>
                        <Input
                          name="name"
                          placeholder="Add name"
                          variant={"unstyled"}
                          fontWeight={"bold"}
                          fontSize={{ base: "2xl", sm: "3xl" }}
                          defaultValue={project2.name}
                          onChange={handleChange2}
                        />
                      </Flex>

                      {/* Project Status */}
                      <Flex alignItems={"center"}>
                        <Flex fontWeight={"bold"} w={"150px"}>Status:</Flex>
                        <Select
                          variant={"filled"}
                          placeholder="Select status"
                          name="status"
                          defaultValue={project2.status}
                          onChange={handleChange2}
                        >
                          <option value="Done">Done</option>
                          <option value="Processing">Processing</option>
                          <option value="Paused">Paused</option>
                        </Select>
                      </Flex>

                      {/* Project Priority */}
                      <Flex alignItems={"center"}>
                        <Flex fontWeight={"bold"} w={"150px"}>Priority:</Flex>
                        <Select
                          variant={"filled"}
                          placeholder="Select priority"
                          name="priority"
                          defaultValue={project2.priority}
                          onChange={handleChange2}
                        >
                          <option value="High">High</option>
                          <option value="Moderate">Moderate</option>
                          <option value="Low">Low</option>
                        </Select>
                      </Flex>

                      {/* Project Due Date */}
                      <Flex alignItems={"center"}>
                        <Flex fontWeight={"bold"} w={"150px"}>Due date:</Flex>
                        <Input
                          name="duedate"
                          type="datetime-local"
                          variant={"flushed"}
                          defaultValue={project2.duedate}
                          onChange={handleChange2}
                        />
                      </Flex>

                      {/* Project Description */}
                      <Flex alignItems={"baseline"}>
                        <Flex fontWeight={"bold"} w={"150px"}>Description:</Flex>
                        <Textarea
                          name="description"
                          variant={"flushed"}
                          placeholder="Add description"
                          fontSize={14}
                          defaultValue={project2.description}
                          onChange={handleChange2}
                        />
                      </Flex>

                      {/* Buttons */}
                      <HStack gap={10} m={"20px 0"} w={"full"} p={"0 50px"}>
                        <Button
                          bg={"gray"}
                          color={"white"}
                          w="md"
                          size="sm"
                          _hover={{ bg: "red.500" }}
                          onClick={onClose}
                        >
                          Cancel
                        </Button>
                        <Button
                          bg={"gray"}
                          color={"white"}
                          size="sm"
                          w="md"
                          _hover={{ bg: "blue.500" }}
                          onClick={() => updateProject(project2.id)}
                        >
                          Save Changes
                        </Button>
                      </HStack>
                    </Flex>
                  </form>
                </Stack>
              </Flex>
            </ModalBody>
          </ModalContent>
        </Modal>

        {/* Display Projects in Table */}
        <Flex m={10} flexDir={"column"}>
          <Flex flexDir={"column"} gap={10} w={"full"}>
            <Box border={"1px solid black"} borderRadius={"20"} m={"0"} p={"5px 10px"}>
              <TableContainer>
                <Table variant="simple">
                  <Thead>
                    <Tr>
                      <Th>Id</Th>
                      <Th>Project</Th>
                      <Th>Description</Th>
                      <Th>Status</Th>
                      <Th>Priority</Th>
                      <Th>Due Date</Th>
                      <Th>Actions</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {projects.map(project => (
                      <Tr key={project.id}>
                        <Td>{project.id}</Td>
                        <Td>{project.name}</Td>
                        <Td>{project.description}</Td>
                        <Td>{project.status}</Td>
                        <Td>{project.priority}</Td>
                        <Td>{project.duedate}</Td>
                        <Td>
                          <Link to={`/project-and-task/${project.id}`} as={RouterLink}>
                            <Button m={"0 10px 0 0"} size={"sm"}>View</Button>
                          </Link>
                          <Button m={"0 10px 0 0"} size={"sm"} onClick={() => handleEdit(project.id)}>Edit</Button>
                          <Button size={"sm"} onClick={() => deleteProject(project.id)}>Delete</Button>
                        </Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </TableContainer>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default Dashboard;

