import {Button,InputGroup ,Select, Input ,InputRightElement,Container,Flex,Box,useDisclosure, Center, VStack, SimpleGrid} from '@chakra-ui/react'
import TaskList from './TaskList'

const NewProject = () => {

  return (
    <>
    
    <Flex m={"50px 50px"} gap={20} justifyContent={"center"} >

      <Flex flexDir={"column"} gap={8} w={"full"} >
        
        {/*Project Name */}
        <VStack alignItems={"left"} >
          <Flex fontWeight={"bold"} >
            Project Name
          </Flex >
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
        </VStack>
          
        {/*Project Description */}
        <VStack alignItems={"left"} >
          <Flex>
            Description
          </Flex>
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
        </VStack>
      </Flex>
        
      <Flex flexDir={"column"} gap={8} w={"full"} >

      {/*Due Date */}
      <VStack alignItems={"left"} >
        <Flex m={"0 0 5px"}>
          Due Date
        </Flex>
        <Input placeholder='Select Date and Time' size='md' type='datetime-local' />
      </VStack>

      {/*Project Status */}
      <VStack alignItems={"left"} >
        <Flex>
          Project Status
        </Flex>
        <Select variant={"filled"}placeholder='select status' >
          <option value='option1'>Done</option>
          <option value='option2'>Processing</option>
          <option value='option3'>Paused</option>
        </Select>
      </VStack>
      </Flex>
    
    </Flex>
     
    <TaskList/>
    
    
</>
  )
}

export default NewProject