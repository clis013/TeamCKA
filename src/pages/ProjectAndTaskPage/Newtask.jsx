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
import { supabase } from "../../client";

   
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

      async function createTask(){
        await supabase
        .from('tasks')
        .insert({name: task.name, des: task.des, assgdate: task.assgdate, duedate: task.duedate, priority: task.priority, status: task.status})
      }

    return (
        <>
        <form onSubmit={createTask}>
            <FormControl isRequired>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent bg={"white"} boxShadow={"xl"} border={"1px solid gray"} mx={3}>
                    <ModalHeader />
                    <ModalCloseButton bg={"red.400"} color={"white"} _hover={{ bg: "red.500" }} />
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
                                <Input onChange={handleChange} name='des' variant={"flushed"} placeholder={"description"} fonsize={14} />
                                <InputRightElement>
                                
                                </InputRightElement>
                                </InputGroup>
                            </Center> 
                            <Center>
                                <Button
                                variant={"flushed"}
                                fonsize={14}
                                w="full">assign date:</Button>
                               <Input onChange={handleChange} name='assgdate' placeholder='Select Date and Time' size='md' type='datetime-local' />
                               </Center>
                              
                               
                               <Center>
                                <Button
                                variant={"flushed"}
                                fonsize={14}
                                w="full">due date:</Button>
                               <Input onChange={handleChange} name='duedate' placeholder='Select Date and Time' size='md' type='datetime-local' />
                               </Center>
                               <Center>
                               <Select onChange={handleChange} name='priority' variant={"filled"}placeholder='select priority' >
                                <option value='High'>High</option>
                                <option value='Moderate'>Moderate</option>
                                <option value='Low'>Low</option>
                                </Select>
                               </Center>
                               <Center>
                               
                                <Select onChange={handleChange} name='status' variant={"filled"}placeholder='select status' >
                                <option value='Done'>Done</option>
                                <option value='Processing'>Processing</option>
                                <option value='Paused'>Paused</option>
                                </Select>
                                
                               </Center>
                                <Stack spacing={6} direction={["column", "row"]}>
                                    
                                    <Button
                                        bg={"blue.400"}
                                        color={"white"}
                                        size='sm'
                                        w='full'
                                        _hover={{ bg: "blue.500" }}
                                        onClick={() => createTask()}
                                        type='submit'
                                    >
                                        Create
                                    </Button>
                                </Stack>
                            </Stack>
                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>
            </FormControl>
            </form>
            
        </>
    );
};
   
export default Newtask;