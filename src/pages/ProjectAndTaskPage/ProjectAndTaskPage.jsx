import { Button, Flex,Link } from "@chakra-ui/react"
import Header from "../../components/Header/Header"
import Table from "./ProjectList"
import { Link as RouterLink } from 'react-router-dom'

const ProjectAndTaskPage = () => {
  return (
    <>
    <Header/>
    <Flex m={"30px 50px 0"} fontSize={"35"} fontWeight={"bold"}>
      Project & Task
    </Flex>
    <Flex justifyContent={"flex-end"} m={"0 50px 10px"} >
      <Link to={"/new-project"} as={RouterLink} cursor='pointer'>
      <Button>New Project</Button>
      </Link>
        
    </Flex>
    <Table/>
    </>
  )
}

export default ProjectAndTaskPage