import { Card, CardHeader, CardBody, CardFooter, Text, Box, Heading, Stack, StackDivider, Button } from '@chakra-ui/react'
import { useState } from 'react'
import { Flex, Input, Container } from '@chakra-ui/react'

function ProjectListTable(props) {

    const project = props.product

    const [ editing, setEditing ] = useState(false)
    const [ name, setName ] = useState("");
    const [ description, setDescription ] = useState("");

    
    return(
        <>
        <Card>
            { editing == false ?
                <>
                <CardHeader>
                    <Heading size='md'> {project.name} </Heading>
                </CardHeader>

                <CardBody>
                    <Stack divider={<StackDivider />} spacing='4'>
                    <Box>
                        <Heading size='xs'>
                            {project.description}
                        </Heading>
                        <Text pt='2' fontSize='sm'>
                        View a summary of all your clients over the last month.
                        </Text>
                    </Box>
                    </Stack>

                    <Box m={"20px 0 0"} >

                    <Button>Delete</Button>
                    <Button onClick={() => setEditing(true)}>Edit</Button>

                    </Box>
                    
                </CardBody>
                </>
                :
                <>
                <CardHeader>
                    <Heading size='md'>Editing Project</Heading>
                </CardHeader>
                <Box m={"10px"}>
                    <Button onClick={() => setEditing(false)}>Go back</Button>  
                </Box>
                
                <Box m={"10px"} >
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
                    </Box>
                
                </>
            }
        
        </Card>
        </>
    )
    
}

export default ProjectListTable