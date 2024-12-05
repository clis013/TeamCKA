import { Box, Link, Tooltip } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { TbLayoutSidebar } from "react-icons/tb";

const Home = () => {
  return (
    <Tooltip
      hasArrow
      label={"Project & Task"}
      placement='right'
      ml={1}
      openDelay={500}
      display={{ base: "block", md: "none" }}
    >
      <Link
        display={"flex"}
        to={"/project-and-task/:id"}
        as={RouterLink}
        alignItems={"center"}
        gap={4}
        _hover={{ bg: "blackAlpha.200" }}
        borderRadius={6}
        p={2}
        w={{ base: 10, md: "full" }}
        justifyContent={{ base: "center", md: "flex-start" }}
      >
        <TbLayoutSidebar size={25} />
        <Box display={{ base: "none", md: "block" }}>Project & Task</Box>
      </Link>
    </Tooltip>
  );
};

export default Home;
