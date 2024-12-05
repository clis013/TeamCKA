import {Table,Thead,Tbody,Tfoot,Tr,Th,Td,TableCaption,TableContainer} from '@chakra-ui/react'
import { Box, Button, useDisclosure, Select} from '@chakra-ui/react'
import Newtask from './Newtask'
import { supabase } from '../../client'
import { useState, useEffect } from 'react'


const TaskList = () => {

  const[tasks, settasks]=useState([])

  console.log(tasks)

  useEffect(()=>{
    fetchtask()
  },[])

  async function fetchtask(){
    const {data} = await supabase
      .from('tasks')
      .select('*')
      settasks(data)
      
  }
  
  async function deleteTask(taskid){
    const {data,error} = await supabase
      .from('tasks')
      .delete()
      .eq('id',taskid)
    
      fetchtask()

      if (error){
        console.log(error)
      }
      if (data){
        console.log(data)
      }
  }

  const {isOpen, onOpen, onClose}=useDisclosure()

  return (
    <>
    <Box border={"1px solid black"} borderRadius={"20"} m={"0 45px"} p={"5px 20px"} >
    <TableContainer>
        <Table variant='simple'>
          <Thead>
          <Tr>
            <Th>Task</Th>    
            <Th>Description</Th>           
            <Th>Assign Date</Th>
            <Th>Due Date</Th>
            <Th>Priority</Th>
            <Th>Status</Th>
            
            <Th>
              <Button fontSize={14}
                color={"blue.400"}
                fontWeight={600}
                cursor={"pointer"}
                _hover={{color:"blue.500"}}
                bg={"transparent"}
                onClick={onOpen}>
                New Task
              </Button>
            </Th>
          </Tr>
          </Thead>
          <Tbody>
            {tasks.map((task)=>
              <Tr>
                <Td>{task.name}</Td>
                <Td>{task.des}</Td>
                <Td >{task.assgdate}</Td>
                <Td>{task.duedate}</Td>
                <Td>{task.priority}</Td>
                <Td>{task.status}</Td>
                <Td>
                <Button color={"white"}
                        fontWeight={600}
                        cursor={"pointer"}
                        _hover={{bg:"red.500"}}
                        bg={"red.400"} 
                        w="fit"
                        onClick={()=>{deleteTask(task.id)}}
                         >
                          Delete
                </Button>
                </Td>            
          </Tr>
        )}
          </Tbody>
        </Table>
      </TableContainer>
      {isOpen && <Newtask isOpen={isOpen} onClose={onClose}/>}
    </Box>
    
    </>
  )
}

export default TaskList
