import { Box, Flex, Link, Tooltip } from "@chakra-ui/react"
import { Link as RouterLink } from 'react-router-dom'
import { CKALogo } from "../../assets/constants"
import SidebarItems from "./SidebarItems"

const Sidebar = () => {
  return (
    <Box
    height={"100vh"}
			borderRight={"2px solid"}
			borderColor={"gray.500"}
			py={8}
			position={"sticky"}
			top={0}
			left={0}
			px={{ base: 3, md: 4 }}
      >
        <Flex direction={"column"} gap={10} w="full" height={"full"} >
        <Tooltip
			hasArrow
			label={"meow"}
			placement='right'
			ml={1}
			openDelay={500}
			display={{ base: "block", md: "none" }}
		>
        <Link to={"/dashboard"} as={RouterLink} pl={2} display={{ base: "none", md: "block" }} cursor='pointer'>
            <CKALogo/>
        </Link>
		<Link to={"/dashboard"} as={RouterLink} display={{ base: "block", md: "none" }} cursor='pointer'>
            <CKALogo/>
        </Link>   
        </Tooltip>
        
        <Flex direction={"column"} gap={5} cursor={"pointer"} >
			<SidebarItems/>
		</Flex>
        </Flex>
    </Box>
    
  )
}

export default Sidebar