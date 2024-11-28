import React from 'react'
import AuthForm from '../../components/AuthForm/AuthForm'
import { Flex, VStack } from '@chakra-ui/react'

const AuthPage = () => {
  return (
    <>
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
      <VStack spacing={4} align={"stretch"}>
        <AuthForm/>
      </VStack>
    </Flex>
    
    </>
  )
}

export default AuthPage