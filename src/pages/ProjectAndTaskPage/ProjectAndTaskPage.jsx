import { Button, Flex } from "@chakra-ui/react"
import Header from "../../components/Header/Header"
import Table from "./ProjectList"


const ProjectAndTaskPage = () => {
  return (
    <>
    <Header/>
    <Flex m={"30px 50px 0"} fontSize={"35"} fontWeight={"bold"}>
      Project & Task
    </Flex>
    <Flex justifyContent={"flex-end"} m={"0 50px 10px"} >
        <Button>New Project</Button>
    </Flex>
    <Table/>
    </>
  )
}

export default ProjectAndTaskPage