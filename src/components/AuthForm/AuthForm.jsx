import { Box, VStack } from '@chakra-ui/react'
import React from 'react'
import Signup from './Signup'

const AuthForm = () => {
  return (
    <Box border={"1px solid gray"} borderRadius={4} padding={5}>
      <VStack spacing={4}>
        <Signup/>
      </VStack>
        
    </Box>  
    )
}

export default AuthForm