import {Table,Thead,Tbody,Tfoot,Tr,Th,Td,TableCaption,TableContainer} from '@chakra-ui/react'
import { Progress } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'

const ProjectList = () => {
  return (
    <>
    <Box border={"1px solid black"} borderRadius={"20"} m={"0 45px"} p={"5px 20px"}>
      <TableContainer>
        <Table variant='simple'>
          <Thead>
          <Tr>
          <Th>Project</Th>
            <Th>Status</Th>
            <Th>Assignee</Th>
            <Th>Due Date</Th>
            <Th>Priority</Th>
            <Th>Progress</Th>
          </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>project 1</Td>
              <Td>millimetres (mm)</Td>
              <Td isNumeric>25.4</Td>
              <Td>millimetres (mm)</Td>
              <Td>millimetres (mm)</Td>
              <Td><Progress value={80} /></Td>
            </Tr>
            <Tr>
              <Td></Td>
              <Td></Td>
              <Td></Td>
              <Td></Td>
              <Td></Td>
              <Td></Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
    
    </>
  )
}

export default ProjectList