import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Flex } from '@chakra-ui/react';
import { Box, Button, useDisclosure } from '@chakra-ui/react';
import Newtask from './Newtask';
import { supabase } from '../../client';
import { useState, useEffect } from 'react';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [editTask, setEditTask] = useState(null); // State to hold the task being edited

  useEffect(() => {
    fetchTasks();
  }, []);

  async function fetchTasks() {
    const { data, error } = await supabase.from('tasks').select('*');
    if (error) {
      console.error('Error fetching tasks:', error);
    } else {
      setTasks(data);
    }
  }

  async function deleteTask(taskId) {
    const { error } = await supabase.from('tasks').delete().eq('id', taskId);
    if (error) {
      console.error('Error deleting task:', error);
    } else {
      fetchTasks(); // Refresh tasks after deletion
    }
  }

  const { isOpen, onOpen, onClose } = useDisclosure();

  // Handle opening the edit modal and setting the task to edit
  const handleEdit = (task) => {
    setEditTask(task);
    onOpen();
  };

  

  return (
    <>
      <Box border="1px solid black" borderRadius="20" m="0 10px" p="5px 20px">      
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>#</Th>
                <Th>Task</Th>
                <Th>Description</Th>
                <Th>Assign Date</Th>
                <Th>Due Date</Th>
                <Th>Priority</Th>
                <Th>Status</Th>
                <Th>
                  <Button
                    fontSize={14}
                    color="blue.400"
                    fontWeight={600}
                    cursor="pointer"
                    _hover={{ color: 'blue.500' }}
                    bg="transparent"
                    onClick={onOpen}
                  >
                    New Task
                  </Button>
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {tasks.map((task) => (
                <Tr key={task.id}>
                  <Td>{task.id}</Td>
                  <Td>{task.name}</Td>
                  <Td>{task.des}</Td>
                  <Td>{task.assgdate}</Td>
                  <Td>{task.duedate}</Td>
                  <Td>{task.priority}</Td>
                  <Td>{task.status}</Td>
                  <Td>
                    <Button
                      fontWeight={600}
                      cursor="pointer"
                      color="white" 
                      bg="red.500" 
                      _hover={{ bg: 'red.600' }}
                      w="fit"
                      size={"sm"} 
                      onClick={() => deleteTask(task.id)}
                    >
                      Delete
                    </Button>
                    <Button
                      ml={2}
                      color="white"
                      fontWeight={600}
                      cursor="pointer"
                      _hover={{ bg: 'blue.600' }}
                      bg="blue.500"
                      w="fit"
                      size={"sm"} 
                      onClick={() => handleEdit(task)}
                    >
                      Edit
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
        {isOpen && (
          <Newtask
            isOpen={isOpen}
            onClose={onClose}
            taskToEdit={editTask} // Pass the task to edit to the Newtask component
            refreshTasks={fetchTasks} // Refresh the task list after editing
          />
        )}
      </Box>
    </>
  );
};

export default TaskList;
