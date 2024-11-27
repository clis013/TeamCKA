import { Button, Input } from "@chakra-ui/react"
import { useState } from "react"
import { supabase } from "../../client"

const Signup = () => {

  const [inputs, setInputs] = useState({
    fullName:'',
    email:'',
    password:''
  })

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
    <div>
      <form onSubmit={handleSubmit}>
        <Input 
          placeholder="Fullname"
          name="fullName"
          onChange={handleChange}
        />
        <Input 
          placeholder="Email"
          name="email"
          onChange={handleChange}
        />
        <Input 
          placeholder="Password"
          name="password"
          type="password"
          onChange={handleChange}
        />       

        <Button type="submit">
          Submit
        </Button>

      </form>
    </div>
    </>
    
  )
}

export default Signup