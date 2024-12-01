import {
    Avatar,
    Button,
    Center,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    Stack,
    Select,
    InputGroup ,
    InputRightElement
} from "@chakra-ui/react";
import { useState, useEffect } from 'react'

   
const Newtask = ({ isOpen, onClose }) => {
    function handleChange(event){
        setTask(prevFormData=>{
          return{
              ...prevFormData,
              [event.target.name]:event.target.value
          }
        })
      }
    const[task,setTask]=useState({
        name:'',des:'',assgdate:'',duedate:'',priority:'',status:''
      })
      console.log(task)
    return (
        <>
        <form>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent bg={"white"} boxShadow={"xl"} border={"1px solid gray"} mx={3}>
                    <ModalHeader />
                    <ModalCloseButton />
                    <ModalBody>
                        {/* Container Flex */}
                        <Flex bg={"white"}>
                            <Stack spacing={4} w={"full"} maxW={"md"} bg={"white"} p={6} my={0}>
                           <Center>
                                <Heading  lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
                                    New Task
                                </Heading>
                           </Center>
                                <Center>
                                
                                <InputGroup>
                                <Input onChange={handleChange} name='name' variant={"flushed"} placeholder={"add name"} fonsize={14} />
                                <InputRightElement>
                                
                                </InputRightElement>
                                </InputGroup>
                               </Center>
                               <Center>
                                
                                <InputGroup>
                                <Input name='des' variant={"flushed"} placeholder={"description"} fonsize={14} />
                                <InputRightElement>
                                
                                </InputRightElement>
                                </InputGroup>
                               </Center>
                               <Center>
                                <Button
                                variant={"flushed"}
                                fonsize={14}
                                w="full">assign date:</Button>
                               <Input name='assgdate' placeholder='Select Date and Time' size='md' type='datetime-local' />
                               </Center>
                              
                               
                               <Center>
                                <Button
                                variant={"flushed"}
                                fonsize={14}
                                w="full">due date:</Button>
                               <Input name='duedate' placeholder='Select Date and Time' size='md' type='datetime-local' />
                               </Center>
                               <Center>
                               <Select variant={"filled"}placeholder='select priority' >
                                <option value='option1'>High</option>
                                <option value='option2'>Moderate</option>
                                <option value='option3'>Low</option>
                                </Select>
                               </Center>
                               <Center>
                               
                                <Select name='status' variant={"filled"}placeholder='select status' >
                                <option value='option1'>Done</option>
                                <option value='option2'>Processing</option>
                                <option value='option3'>Paused</option>
                                </Select>
                                
                               </Center>
                                <Stack spacing={6} direction={["column", "row"]}>
                                    <Button
                                        bg={"gray"}
                                        color={"white"}
                                        w='full'
                                        size='sm'
                                        _hover={{ bg: "red.500" }}
                                    >
                                        Cancel
                                    </Button>
                                    <Button
                                        bg={"gray"}
                                        color={"white"}
                                        size='sm'
                                        w='full'
                                        _hover={{ bg: "blue.500" }}
                                    >
                                        Submit
                                    </Button>
                                </Stack>
                            </Stack>
                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>
            </form>
        </>
    );
};
   
export default Newtask;