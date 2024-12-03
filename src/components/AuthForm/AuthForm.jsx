import { Box, VStack, Button, Text, HStack } from "@chakra-ui/react";
import React, { useState } from "react";
import Signup from "./Signup";
import Login from "./Login";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Box border="1px solid gray" borderRadius={8} padding={6} width="350px" boxShadow="md">
      <VStack spacing={4}>
        <Text fontSize="2xl" fontWeight="bold">
          {isLogin ? "Log In" : "Sign Up"}
        </Text>

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