import {Table,Thead,Tbody,Tfoot,Tr,Th,Td,TableCaption,TableContainer} from '@chakra-ui/react'
import { Box, Button, useDisclosure} from '@chakra-ui/react'
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

    const {isOpen, onOpen, onClose}=useDisclosure()

  return (
    <>
    <Box border={"1px solid black"} borderRadius={"20"} m={"0 45px"} p={"5px 20px"} >
    <TableContainer>
        <Table variant='simple'>
          <Thead>
          <Tr>
            <Th>Id</Th>
            <Th>Task</Th>    
            <Th>Description</Th>           
            <Th>Assign Date</Th>
            <Th>Due Date</Th>
            <Th>Status</Th>
            
            <Th>
              <Button fontSize={14}
          color={"blue.500"}
          fontWeight={600}
          cursor={"pointer"}
          _hover={{color:"gray"}}
          bg={"transparent"}
          onClick={onOpen}
          >
                New Task
              </Button>
            </Th>
          </Tr>
          </Thead>
          <Tbody>
            {tasks.map((task)=>
            <Tr>
            <Td>{task.id}</Td>
            <Td>{task.name}</Td>
            <Td>{task.des}</Td>
            <Td >{task.assgdate}</Td>
            <Td>{task.duedate}</Td>
            <Td>{task.status}</Td>
            
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