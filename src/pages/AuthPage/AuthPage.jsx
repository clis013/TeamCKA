import { Button, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const AuthPage = () => {
  return (
    <Link display={"flex"}
    to={"/dashboard"}
    as={RouterLink}
    alignItems={"center"}
    gap={4}
    _hover={{ bg: "whiteAlpha.400" }}
    borderRadius={6}
    p={2}
    w={{ base: 10, md: "full" }}
    justifyContent={{ base: "center", md: "flex-start" }}>
      <Button>Log In</Button>
    </Link>
    
  )
}

export default AuthPage