import { Box, VStack, Button, Text, HStack, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import Signup from "./Signup";
import Login from "./Login";
import { CKALogo } from "../../assets/constants";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  
  return (
    <Box border="1px solid gray" borderRadius={8} padding={50} w={"350px"}  boxShadow="md" >
       <VStack spacing={4}>
        
      <Flex justifyContent={"center"} m={"10px"} >
        <CKALogo/>
      </Flex>

        {isLogin ? <Login /> : <Signup />}

        <HStack spacing={1}>
          <Text>
            {isLogin ? "Don't have an account?" :"Already have an account?"}
          </Text>
          <Button
            variant="link"
            colorScheme="blue"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Sign Up" : "Log In"}
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default AuthForm;