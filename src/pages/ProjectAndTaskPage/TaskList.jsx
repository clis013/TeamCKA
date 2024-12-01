import {Table,Thead,Tbody,Tfoot,Tr,Th,Td,TableCaption,TableContainer} from '@chakra-ui/react'
import { Box, Button, useDisclosure } from '@chakra-ui/react'
import Newtask from './Newtask'

const TaskList = () => {

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
            <Tr>
              <Td>task 1</Td>
              <Td>millimetres (mm)</Td>
              <Td isNumeric>25.4</Td>
              <Td>millimetres (mm)</Td>
              <Td>millimetres (mm)</Td>
              
            </Tr>
            <Tr>
              <Td></Td>
              <Td></Td>
              <Td></Td>
              <Td></Td>
              <Td></Td>
              <Td></Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
      {isOpen && <Newtask isOpen={isOpen} onClose={onClose}/>}
    </Box>
    
    </>
  )
}

export default TaskList