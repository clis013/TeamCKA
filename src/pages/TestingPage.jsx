import { Box, Button, Container, Flex, Input } from '@chakra-ui/react'
import {Table,Thead,Tbody,Tfoot,Tr,Th,Td,TableCaption,TableContainer} from '@chakra-ui/react'
import React from 'react'
import { useState, useEffect } from 'react'
import { supabase } from '../client';

function TestingPage(){

  const [ name, setName ] = useState("");
  const [ status, setStatus ] = useState("");

  const [ projects, setProjects ] = useState([])

  const [ project, setProject ] = useState({
    name:'',status:''
  })

  const [ project2, setProject2 ] = useState({
    id:'',name:'',status:''
  })


  console.log(name)
  console.log(status)
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

  async function createProjects(){
    const { data, error } = await supabase
      .from('projects')
      .insert({
        name:name,
        status:status 
      })
    
      getProjects()
 
  }

  function displayProject(projectId){

    projects.map((project)=>{
      if(project.id==projectId){
        setProject2({
          id:project.id,
          name:project.name,
          status:project.status
        })
      }
    })

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
   
  return (
    <>
    <Container>
      {/*create project FORM 1*/}
      <form onSubmit={createProjects}  >
       <Flex flexDir={"column"} gap={10} m={"0 0 60px"}>
        <Flex flexDir={"column"} gap={3} >
          Project Name
          <Input
            name='projectName'
            placeholder={"add name"}
            onChange={(e) => setName(e.target.value)}
            
          />
        </Flex>
    
        <Flex flexDir={"column"} gap={3}>
          Project Status
          <Input
            name='projectStatus'
            placeholder={"add status"}
            onChange={(e) => setStatus(e.target.value)}
            
          />
        </Flex>
        
        <Button onClick={() => createProjects()}>Create Project</Button>

      </Flex> 
      </form>

      {/*create project FORM 2*/}
      <form onSubmit={updateProject(project2.id)} >
       <Flex flexDir={"column"} gap={10}>
        <Flex flexDir={"column"} gap={3} >
          Project Name
          <Input
            name='projectName'
            defaultValue={project2.name}
            onChange={(e) => setName(e.target.value)}
            
          />
        </Flex>
    
        <Flex flexDir={"column"} gap={3}>
          Project Status
          <Input
            name='projectStatus'
            defaultValue={project2.status}
            onChange={(e) => setStatus(e.target.value)}
            
          />
        </Flex>
        
        <Button onClick={() => createProjects()}>Save Changes</Button>

      </Flex> 
      </form>


      {/*display project list */}
      <Flex m={"50px 0 0"} flexDir={"column"} gap={10}>
        <Box>
          Current Database Items
        </Box>
        
        <Box border={"1px solid black"} borderRadius={"20"} m={"0"} p={"5px 10px"}>
          <TableContainer>
            <Table variant='simple'>
              <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Project</Th>
                <Th>Status</Th>
                <Th>Assignee</Th>
                <Th>Due Date</Th>
                <Th>Priority</Th>
                <Th>Progress</Th>
              </Tr>
              </Thead>
              <Tbody>
                {projects.map((project)=>
                  <Tr>
                    <Td>{project.id}</Td>
                    <Td>{project.name}</Td>
                    <Td>{project.status}</Td>
                    <Td >{project.assignee}</Td>
                    <Td>{project.dueDate}</Td>
                    <Td>{project.priority}</Td>
                    <Td>{project.progress}</Td>
                    <Td><Button onClick={()=>{updateProject(project.id)}} >Edit</Button></Td>
                    <Td><Button onClick={()=>{displayProject(project.id)}} >Delete</Button></Td>
                  </Tr>
                )}
                
                
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
    
  

      </Flex>      
    </Container>
    
    </>
  )
}

export default TestingPage