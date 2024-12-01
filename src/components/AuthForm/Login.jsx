import { Button, Input, InputGroup, InputRightElement, VStack, Text} from "@chakra-ui/react";
import { useState } from "react";
import { supabase } from "../../client"; 
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const Login = () => {
  const [inputs, setInputs] = useState({
    email: '',
    password: ''
  });

  const [showPassword, setShowPassword] = useState(true);
  const [error, setError] = useState(''); 

  console.log(supabase)
  console.log(inputs)

  if (loginError) {
    console.error(loginError);  
    setError(loginError.message);
  }
  
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
        // Optionally, redirect to the main page or another page after login
        // window.location.href = '/dashboard';  // Example of redirect
      }
    } catch (err) {
      setError('An unexpected error occurred'); // General error
    }
  }

  return (
    <>
      <div>CKA App</div>
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

