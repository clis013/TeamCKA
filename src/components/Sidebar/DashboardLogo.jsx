import { Box, Link, Tooltip } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { TbLayoutDashboard } from "react-icons/tb";

const Home = () => {
	return (
		<Tooltip
			hasArrow
			label={"Dashboard"}
			placement='right'
			ml={1}
			openDelay={500}
			display={{ base: "block", md: "none" }}
		>
			<Link
				display={"flex"}
				to={"/dashboard"}
				as={RouterLink}
				alignItems={"center"}
				gap={4}
				_hover={{ bg: "blackAlpha.200" }}
				borderRadius={6}
				p={2}
				w={{ base: 10, md: "full" }}
				justifyContent={{ base: "center", md: "flex-start" }}
			>
                <TbLayoutDashboard size={25}/>
				<Box display={{ base: "none", md: "block" }}>Dashboard</Box>
			</Link>
		</Tooltip>
	);
};

export default Home;