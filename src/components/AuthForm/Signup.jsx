import { Button, Input, InputGroup, InputRightElement, VStack } from "@chakra-ui/react"
import { useState } from "react"
import { supabase } from "../../client"
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const Signup = () => {

  const [inputs, setInputs] = useState({
    fullName:'',
    email:'',
    password:''
  })

  const [showPassword, setShowPassword] = useState(true);

  console.log(inputs)

  function handleChange(event){
    setInputs((prevInputs)=>{
      return{
        ...prevInputs,
        [event.target.name]:event.target.value
      }

  })
  }

  async function handleSubmit(){
    try {
      const { data, error } = await supabase.auth.signUp(
        {
          email: inputs.email,
          password: inputs.password,
          options: {
            data: {
              full_name: inputs.fullName,
              age: 27,
            }
          }
        }
      )
      alert('Check your email for verification link')


    } catch (error) {
      alert(error)
    }
    
  }

  return (
    <>
      <div>CKA App</div>
      <form onSubmit={handleSubmit}>
      <VStack spacing={4} justifyContent={"center"} alignItems={"center"}>
        <Input 
          placeholder="Full name"
          name="fullName"
          onChange={handleChange}
        />

        <Input 
          placeholder="Email"
          name="email"
          onChange={handleChange}
        />

        <InputGroup>
          <Input 
            placeholder="Password"
            name="password"
            type={showPassword ? "password" : "text"}
            onChange={handleChange}
          />
          <InputRightElement>
            <Button variant={"ghost"} size={"sm"}onClick={() => setShowPassword(!showPassword)}>
						  {showPassword ? <ViewOffIcon /> : <ViewIcon />}
            </Button>
          </InputRightElement>    
        </InputGroup>
        

        <Button w={"full"} type="submit">
          Sign Up
        </Button>
        </VStack>
      </form>
      Already have an account? Log in
      
    </>
    
  )
}

export default Signup