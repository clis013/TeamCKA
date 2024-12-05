import { Button, Input, InputGroup, InputRightElement, VStack, Text} from "@chakra-ui/react";
import { useState } from "react";
import { supabase } from "../../client"; 
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Route, Routes } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';  // Correct import
import { BrowserRouter } from 'react-router-dom';

const Login = () => {
  const [inputs, setInputs] = useState({
    email: '',
    password: ''
  });

  const [showPassword, setShowPassword] = useState(true);
  const [error, setError] = useState(''); 
  const navigate = useNavigate();  // Initialize useNavigate

  console.log(supabase)
  console.log(inputs)

  
  
  function handleChange(event) {
    setInputs((prevInputs) => ({
      ...prevInputs,
      [event.target.name]: event.target.value
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError(''); 
    try {
      const { data, error: loginError } = await supabase.auth.signInWithPassword({
        email: inputs.email,
        password: inputs.password
      });

      console.log(data)
  
      if (loginError) {
        // Handle errors based on the response
        setError(loginError.message); // Set error message
      } else {
        alert('Login successful!');
        navigate('/dashboard');  // Redirect to Dashboard
      }
    } catch (error) {
      setError('An unexpected error occurred'); // General error
    }
  }

  

  return (
    <>
      
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} justifyContent={"center"} alignItems={"center"}>
          <Input
            placeholder="Email" 
            name="email"
            value={inputs.email}
            onChange={handleChange}
          />
          {error && error.includes("email") && (
            <Text color="red.500" fontSize="sm">
              {error}
            </Text>
          )}

          <InputGroup>
            <Input
              placeholder="Password"
              name="password"
              type={showPassword ? "password" : "text"}
              value={inputs.password}
              onChange={handleChange}
            />
            <InputRightElement>
              <Button
                variant={"ghost"}
                size={"sm"}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <ViewOffIcon /> : <ViewIcon />}
              </Button>
            </InputRightElement>
          </InputGroup>
          {error && error.includes("password") && (
            <Text color="red.500" fontSize="sm">
              {error}
            </Text>
          )}

          {error && !error.includes("email") && !error.includes("password") && (
            <Text color="red.500" fontSize="sm">
              {error}
            </Text>
          )}

          <Button w={"full"} type="submit">
            Log In
          </Button>
        </VStack>
      </form>
        
    </>
  );
};

export default Login;

