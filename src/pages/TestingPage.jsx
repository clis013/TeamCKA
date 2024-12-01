import { Box, Button, Container, Flex, Input } from '@chakra-ui/react'
import React from 'react'
import { useState, useEffect } from 'react'
import ProjectListTable from '../components/ProjectListTable/ProjectListTable';
import { supabase } from '../client';

function TestingPage(){

  

  const [ name, setName ] = useState("");
  const [ description, setDescription ] = useState("");
  const [ projects, setProjects ] = useState([])

  console.log(name)
  console.log(description)

  useEffect(() => {
    getProjects()

  }, [])

  async function getProjects(){
    try {
      const { data, error } = await supabase
      .from("project")
      .select("*")
      .limit(10)
    if (error) throw error;
    if (data != null){
      setProjects(data)
    }
      
    } catch (error) {
      alert(error.message)
    }
  }

  console.log(projects)
   
  return (
    <>
    <Container>
      <form >
       <Flex flexDir={"column"} gap={10}>
        <Flex flexDir={"column"} gap={3} >
          Project Name
          <Input
            name='projectName'
            placeholder={"add name"}
            onChange={(e) => setName(e.target.value)}
            
          />
        </Flex>
    
        <Flex flexDir={"column"} gap={3}>
          Project Description
          <Input
            name='projectDescription'
            placeholder={"add description"}
            onChange={(e) => setDescription(e.target.value)}
            
          />
        </Flex>
        
        <Button>Create Project</Button>

      </Flex> 
      </form>
      
      <Flex m={"50px 0 0"} flexDir={"column"} gap={10}>
        <Box>
          Current Database Items
        </Box>
        {projects.map((project) => {
          <Box>
          <ProjectListTable projects={project} />
          </Box>
        })}
      </Flex>      
    </Container>
    
    </>
  )
}

export default TestingPage