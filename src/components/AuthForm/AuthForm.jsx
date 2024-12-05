import { Box, VStack, Button, Text, HStack, Select } from "@chakra-ui/react";
import React, { useState } from "react";
import Signup from "./Signup";
import Login from "./Login";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  const[role,setrole]=useState({
    role:''
  })
  console.log(role)

  function handleChange(event){
    setrole(prevFormData=>{
      return{
          ...prevFormData,
          [event.target.name]:event.target.value
      }
    })

    async function createRole(){
      await supabase
      .from('tasks')
      .insert({role: role.role})
    }
  } 

  

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

          <Select onChange={()=>handleChange} name='role' variant={"filled"}placeholder='select status' >
                                <option value='Done'>Done</option>
                                <option value='Processing'>Processing</option>
                                <option value='Paused'>Paused</option>
          </Select>
        </HStack>
      </VStack>
    </Box>
  );
};

export default AuthForm;