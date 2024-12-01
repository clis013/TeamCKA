import { Flex, Box } from '@chakra-ui/react'
import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import { useLocation } from 'react-router-dom'
import Header from '../../components/Header/Header'

const PageLayout = ({children}) => {

    const {pathname} = useLocation()
    const canRenderSideBar = pathname !=='/auth'
    
  return (
    <Flex>

        {/*sidebar on the left */}
        {canRenderSideBar ? (
          <>
            <Box w={{base:"70px",md:"240px"}}>
              <Sidebar/>            
           </Box>
          </>
        ) : null}

        {/*header on top */}
        {canRenderSideBar ? (
          <>
          <Flex flexDir={"column"} w={{base:"full",md:"calc(100%-240px)"}}>
            <Header/>
            <Box flex={1} >
              {children}
            </Box> 
  
          </Flex>          
          </>
        ) : null}

        {/*authpage without sidebar and header */}
        {pathname =='/auth' ?(
          <>
          <Box flex={1} w={{base:"calc(100%-70px)",md:"calc(100%-240px)"}}>
            {children}
          </Box>
          </>
        ):null}

    </Flex>
  )
}

export default PageLayout