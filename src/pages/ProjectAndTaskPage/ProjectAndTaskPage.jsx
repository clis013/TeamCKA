import { Box, Button, Container, Flex, Input, useDisclosure,Table,Thead,Tbody,Tr,Th,Td,TableContainer,
         Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader,ModalOverlay,
         Stack,Select,Textarea,HStack} from "@chakra-ui/react";
import { useState, useEffect } from 'react'
import { supabase } from "../../client"
import { Link } from 'react-router-dom'
import { Link as RouterLink } from "react-router-dom";

function ProjectAndTaskPage () {

  const [ editing, setEditing ] = useState()

  const [ projects, setProjects ] = useState([])

  const [ project, setProject ] = useState({
    name:'',description:'',status:''
  })

  const [ project2, setProject2 ] = useState({
    id:'',name:'',description:'',status:''
  })


  console.log(project2)


  useEffect(() => {
    getProjects()

  }, [])

  async function getProjects(){
    const {data} = await supabase
      .from('projects')
      .select('*')
      setProjects(data)
  }

  function handleChange(event){
    
    setProject(prevFormData=>{
      return{
        ...prevFormData,
        [event.target.name]:event.target.value
      }
    })
  }

  function handleChange2(event){
    
    setProject2(prevFormData=>{
      return{
        ...prevFormData,
        [event.target.name]:event.target.value
      }
    })
  }

  async function createProject(){
    const { data, error } = await supabase
      .from('projects')
      .insert({
        name:project.name,
        description:project.description,
        status:project.status,
        priority:project.priority,
        duedate:project.duedate

      })
    
      getProjects()
      window.location.reload()
 
  }
  
  async function deleteProject(projectId){
    const { data, error } = await supabase
      .from('projects')
      .delete()
      .eq('id', projectId)

    getProjects()

    if (error){
      console.log(error)
    }

    if (data){
      console.log(data)
    }
      
  }

  function displayProject(projectId){
    projects.map((project)=>{
      if(project.id==projectId){
        setProject2({
          id:project.id,
          name:project.name,
          description:project.description,
          status:project.status
        })
      }
    })
  }

  async function updateProject(projectId){
    const { data, error } = await supabase
      .from('projects')
      .update({
        id:project2.id,
        name:project2.name,
        description:project2.description,
        status:project2.status
      })
      .eq('id', projectId)

    getProjects()

    if (error){
      console.log(error)
    }
    window.location.reload()

    if (data){
      console.log(data)
    }
      
  }

  const {isOpen, onOpen, onClose}=useDisclosure()
   
  return (
    <>
    <Flex flexDir={"column"} m={"0 15px"}>
      <Flex m={"40px 50px 0"} fontSize={"35"} fontWeight={"bold"}>
      Project & Task
    </Flex>

    {/* Create Project Modal */}
    <Flex justifyContent={"flex-end"} m={"0 50px"} >
        <Button onClick={onOpen} >New Project</Button>
        <form onSubmit={createProject}>
        <Modal isOpen={isOpen} onClose={onClose} size={"2xl"}>
            <ModalOverlay />
            <ModalContent bg={"white"} boxShadow={"xl"} border={"1px solid gray"} mx={3}>
                <ModalHeader/>
                <ModalCloseButton />
                <ModalBody>
                    {/* Container Flex */}
                    <Flex bg={"white"}>
                        <Stack spacing={7} w={"full"}  bg={"white"} p={6} my={0}>
                            <Input 
                                name='name'
                                placeholder={"add name"}
                                variant={"unstyled"}
                                defaultValue={"New Project"}
                                fontWeight={"bold"}
                                fontSize={{ base: "2xl", sm: "3xl" }}
                                onChange={handleChange}
                            />                                              

                            <Flex alignItems={"center"}>
                                <Flex fontWeight={"bold"} w={"150px"} >
                                    Status :
                                </Flex>
                                <Select
                                    variant={"filled"}
                                    placeholder='Select status'
                                    name='status'
                                    onChange={handleChange}
                                >
                                    <option value='Done'>Done</option>
                                    <option value='Processing'>Processing</option>
                                    <option value='Paused'>Paused</option>
                                </Select>
                            </Flex>

                            <Flex alignItems={"center"}>
                                <Flex fontWeight={"bold"} w={"150px"} >
                                    Priority :
                                </Flex>
                                <Select 
                                    variant={"filled"} 
                                    placeholder='select priority'
                                    name='priority'
                                    onChange={handleChange}
                                >
                                    <option value='High'>High</option>
                                    <option value='Moderate'>Moderate</option>
                                    <option value='Low'>Low</option>
                                </Select> 
                            </Flex>

                            <Flex alignItems={"center"}>
                                <Flex fontWeight={"bold"} w={"150px"} >
                                    Due date :
                                </Flex>
                                    <Input
                                        name='duedate'
                                        placeholder='Select Date and Time'
                                        size='md'
                                        type='datetime-local'
                                        variant={"flushed"}
                                        onChange={handleChange}
                                    />  
                            </Flex>  

                            <Flex alignItems={"baseline"}>
                                <Flex fontWeight={"bold"} w={"150px"} >
                                    Description :
                                </Flex>   
                               
                                <Textarea 
                                    name='description'
                                    variant={"flushed"}
                                    placeholder={"add description"}
                                    fonsize={14}
                                    onChange={handleChange}
                                />
                            </Flex>

                            <HStack gap={10} m={"20px 0"} w={"full"} p={"0 50px"}>
                              
                                <Button
                                    bg={"gray"}
                                    color={"white"}
                                    w='md'
                                    size='sm'
                                    _hover={{ bg: "red.500" }}
                                >        
                                    Cancel
                                </Button>
                                <Button
                                    bg={"gray"}
                                    color={"white"}
                                    size='sm'
                                    w='md'
                                    _hover={{ bg: "blue.500" }}
                                    onClick={() => createProject()}
                                >
                                    Submit
                                </Button>        
                             
                            </HStack>
                            
                        </Stack>
                    </Flex>
                </ModalBody>
            </ModalContent>
        </Modal>
        </form>
    </Flex>

    <Flex m={10} flexDir={"column"}>
     
      {/*display project list */}
      <Flex m={"0 0 50px"} flexDir={"column"} gap={10} w={"full"} >   
        <Box border={"1px solid black"} borderRadius={"20"} m={"0"} p={"5px 10px"}>
          <TableContainer>
            <Table variant='simple'>
              <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Project</Th>
                <Th>Description</Th>
                <Th>Status</Th>
                <Th>Assignee</Th>
                <Th>Due Date</Th>
                <Th>Priority</Th>
                <Th>Progress</Th>
              </Tr>
              </Thead>
              <Tbody>
                {projects.map((project)=>
                  <Tr key={project.id}>
                    <Td>{project.id}</Td>
                    <Td>{project.name}</Td>
                    <Td>{project.description}</Td>
                    <Td>{project.status}</Td>
                    <Td >{project.assignee}</Td>
                    <Td>{project.duedate}</Td>
                    <Td>{project.priority}</Td>
                    <Td>{project.progress}</Td>
                    <Td>
                    <Link to={"/tasklist"} as={RouterLink}><Button m={"0 10px 0 0"} size={"sm"} onClick={()=>{displayProject(project.id)}} >
                        View
                      </Button></Link>
                      <Button m={"0 10px 0 0"} size={"sm"} onClick={()=>{displayProject(project.id)}} >
                        Edit
                      </Button>
                      <Button size={"sm"} onClick={()=>{deleteProject(project.id)}} >
                        Delete
                      </Button>
                    </Td>
              
                  </Tr>
                )}
                
                
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
    
  

      </Flex> 

      {/* EDIT FORM */}
      <form onSubmit={()=>updateProject(project2.id)} >
        <Flex flexDir={"column"} gap={10}>
          <Flex flexDir={"column"} gap={3} >
            Project Name
            <Input
              name='name'
              defaultValue={project2.name}
              onChange={handleChange2}              
            />
          </Flex>

          <Flex flexDir={"column"} gap={3}>
            Project Description
            <Input
              name='description'
              defaultValue={project2.description}
              onChange={handleChange2}              
            />
          </Flex>
      
          <Flex flexDir={"column"} gap={3}>
            Project Status
            <Input
              name='status'
              defaultValue={project2.status}
              onChange={handleChange2}              
            />
          </Flex>
          <Button onClick={()=>updateProject(project2.id)}>Save Changes</Button>
          

        </Flex> 
      </form>

    </Flex>
    </Flex>
    
    
    </>
  )
}

export default ProjectAndTaskPage