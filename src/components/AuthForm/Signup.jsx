import { Button, Input, InputGroup, InputRightElement, VStack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { supabase } from "../../client";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const Signup = () => {
  const [inputs, setInputs] = useState({
    fullName: '',
    email: '',
    password: ''
  });

  const [showPassword, setShowPassword] = useState(true);
  const [error, setError] = useState({
    fullName: '',
    email: '',
    password: ''
  });

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

    
    setError({
      fullName: '',
      email: '',
      password: ''
    });

    // Validation
    let isValid = true;
    const newError = {
      fullName: '',
      email: '',
      password: ''
    };

    if (!inputs.fullName) {
      newError.fullName = 'Full name is required';
      isValid = false;
    }

    if (!inputs.email) {
      newError.email = 'Email is required';
      isValid = false;
    } else {
      // Regex to check if email is valid
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      if (!emailRegex.test(inputs.email)) {
        newError.email = 'Please enter a valid email';
        isValid = false;
      }
    }

    if (!inputs.password) {
      newError.password = 'Password is required';
      isValid = false;
    } else if (inputs.password.length < 6) {
      newError.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    if (!isValid) {
      setError(newError);
      return; 
    }

    try {
      const { data, error } = await supabase.auth.signUp({
        
        email: inputs.email,
        password: inputs.password,
        options: {
          data: {
            full_name: inputs.fullName
            

            
          }
        }
      });

      if (error) {
        setError((prev) => ({ ...prev, email: error.message }));
      } else {
        alert("Check your email for verification link.");
      }
    } catch (error) {
      setError((prev) => ({ ...prev, email: 'An unexpected error occurred' }));
    }
  }

  return (
    <>
      
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} justifyContent={"center"} alignItems={"center"}>
          <Input
            placeholder="Full name"
            name="fullName"
            value={inputs.fullName}
            onChange={handleChange}
          />
          {error.fullName && (
            <Text color="red.500" fontSize="sm">{error.fullName}</Text>
          )}

          <Input
            placeholder="Email"
            name="email"
            value={inputs.email}
            onChange={handleChange}
          />
          {error.email && (
            <Text color="red.500" fontSize="sm">{error.email}</Text>
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
              <Button variant={"ghost"} size={"sm"} onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <ViewOffIcon /> : <ViewIcon />}
              </Button>
            </InputRightElement>
          </InputGroup>
          {error.password && (
            <Text color="red.500" fontSize="sm">{error.password}</Text>
          )}

          <Button w={"full"} type="submit">
            Sign Up
          </Button>
        </VStack>
      </form>
      
    </>
  );
};

export default Signup;