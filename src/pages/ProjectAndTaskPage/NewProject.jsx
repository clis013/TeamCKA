import {Button,InputGroup ,Select, Input ,InputRightElement,Container,Flex,Box,useDisclosure, Center} from '@chakra-ui/react'
import {Table,Thead,Tbody,Tfoot,Tr,Th,Td,TableCaption,TableContainer} from '@chakra-ui/react'
import { Progress } from '@chakra-ui/react'
import Newtask from './Newtask'
const NewProject = () => {
  const {isOpen, onOpen, onClose}=useDisclosure()
  return (
    <Container maxW={"container.lg"}>
    <Flex gap={20} >
    <Box flex={10} py={30} fontWeight={"bold"} >
      <Box flex={2} py={30} fontWeight={"bold"}>
        Project Name 
        <Box>
        <InputGroup>
        <Input variant={"flushed"} placeholder={"add name"} fonsize={14} />
        <InputRightElement>
          <Button 
          fontSize={14}
          color={"blue.500"}
          fontWeight={600}
          cursor={"pointer"}
          _hover={{color:"gray"}}
          bg={"transparent"}
          >
            💩
          </Button>
        </InputRightElement>
        </InputGroup>
        </Box>
      </Box >
      <Box flex={2} py={30} fontWeight={"bold"}>
        Project Description  
        <Box>
        <InputGroup>
        <Input variant={"flushed"} placeholder={"add description"} fonsize={14} />
        <InputRightElement>
          <Button 
          fontSize={14}
          color={"blue.500"}
          fontWeight={600}
          cursor={"pointer"}
          _hover={{color:"gray"}}
          bg={"transparent"}
          >
            💩
          </Button>
        </InputRightElement>
        </InputGroup>
        </Box>
      </Box >
      
    </Box >

    <Box flex={2} py={30} fontWeight={"bold"}>
      <Box flex={2} py={30} fontWeight={"bold"}>
        Date
        <Center>
        <Box>
          
            <Input placeholder='Select Date and Time' size='md' type='datetime-local' />
          
          </Box>
          </Center>
      </Box >
      <Box flex={2} py={30} fontWeight={"bold"}>
        Project Status
        <Center>
        <Box>
        <Select variant={"filled"}placeholder='select status' >
        <option value='option1'>Done</option>
        <option value='option2'>Processing</option>
        <option value='option3'>Paused</option>
        </Select>
          </Box>
          </Center>
           
      </Box >
      
    </Box >
    
    </Flex>
    <Center >
    <Box border={"1px solid black"} borderRadius={"20"} m={"0 45px"} p={"5px 20px"}>
      <TableContainer>
        <Table variant='simple'>
          <Thead>
          <Tr>
          <Th>Task</Th>            
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
    
    </Center>
</Container>

  )
}

export default NewProject