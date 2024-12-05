import { Box, Flex, Link, Tooltip } from "@chakra-ui/react"
import { Link as RouterLink } from 'react-router-dom'
import { CKALogo } from "../../assets/constants"
import SidebarItems from "./SidebarItems"
import { useNavigate } from 'react-router-dom'
import { BiLogOut } from 'react-icons/bi';
import { supabase } from "../../client"; 

const Sidebar = () => {


	async function signOut() {
		const { error } = await supabase.auth.signOut()
	  }
	  
	  
	const navigate = useNavigate()
	function handleLogout(){

		supabase.auth.signOut(); // If using Supabase
		
		navigate('/auth') // Redirect to login
		alert('Logout successful!');
	}
	

  return (
    <Box
    height={"100vh"}
			borderRight={"2px solid"}
			borderColor={"gray.200"}
			py={8}
			position={"sticky"}
			top={0}
			left={0}
			px={{ base: 3, md: 4 }}
			boxShadow="md"
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

		
		<Tooltip
		
		hasArrow
		label={"Logout"}
		placement='right'
		ml={1}
		openDelay={500}
		display={{ base: "block", md: "none" }}
		>
			<Flex
			onClick={handleLogout}
			alignItems={"center"}
			gap={4}
			_hover={{bg: "blackAlpha.200"}}
			borderRadius={6}
			p={2}
			w={{ base: 10, md:"full"}}
			mt={"auto"}
			justifyContent={{ base: "center", md: "flex-start"}}
			>
				<BiLogOut size={25}/>
				
				<Box display={{ base: "none", md: "block"}}>
					 Log Out
					 
				</Box>
		
		</Flex>
	</Tooltip>

		
        </Flex>
    </Box>
    
  )
}

export default Sidebar;