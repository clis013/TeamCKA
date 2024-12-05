import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton, Button, useDisclosure, Select, Stack, Flex, Box
} from '@chakra-ui/react'
import { CKALogo } from '../../assets/constants'
import { Link } from 'react-router-dom'
import { Link as RouterLink } from "react-router-dom";
import { TbSettings } from "react-icons/tb";
import { TbBell } from "react-icons/tb";
import { TbListSearch } from "react-icons/tb";

const AccountMenuButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
        <Button onClick={onOpen} variant={"none"} cursor={"pointer"}><CKALogo/></Button>
        <Drawer placement='right' onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay/>
            <DrawerContent>
              <DrawerCloseButton />
                <DrawerHeader>Team CKA</DrawerHeader>
                <DrawerBody>
                <Flex bg={"white"}>
                <Stack spacing={4} w={"full"} maxW={"md"} bg={"white"} p={"15px 0"} my={0}>
                  <Button bg={"transparent"} width={"-webkit-fit-content"} _hover={{bg: "blackAlpha.200"}}>
                  <TbSettings size={25}/>
                  <Box m={"0 10px"} >Settings</Box>
                  </Button>
                  <Button bg={"transparent"} width={"-webkit-fit-content"} _hover={{bg: "blackAlpha.200"}}>
                  <TbBell size={25}/>
                  <Box m={"0 10px"} >Notification</Box>
                  </Button>
                  <Button bg={"transparent"} width={"-webkit-fit-content"} _hover={{bg: "blackAlpha.200"}}>
                  <TbListSearch size={25}/>
                  <Box m={"0 10px"} >Logs</Box>
                  </Button>
                   
                  </Stack>
                  </Flex>
                </DrawerBody>
                <DrawerFooter>
                    
                </DrawerFooter>                
            </DrawerContent>
        </Drawer>
    </>
  )
}

export default AccountMenuButton