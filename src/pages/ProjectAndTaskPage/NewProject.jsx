import {Button,InputGroup ,Select, Input ,InputRightElement,Container,Flex,Box,useDisclosure, Center} from '@chakra-ui/react'

const NewProject = () => {
  return (
    <Container maxW={"container.lg"}>
    <Flex gap={20}>
    <Box flex={2} py={30} fontWeight={"bold"}>
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
    
</Container>
  )
}

export default NewProject