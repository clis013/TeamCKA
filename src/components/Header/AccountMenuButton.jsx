import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton, Button, useDisclosure, Select, Stack, Flex
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
                <Stack spacing={4} w={"full"} maxW={"md"} bg={"white"} p={6} my={0}>
                  <Select name='status' w={"40"} variant={"filled"}placeholder='select role' >
                          <option value='Done'>Admin</option>
                          <option value='Processing'>User</option>
                  </Select>
                  <Button bg={"transparent"} width={"-webkit-fit-content"}>
                  <TbSettings size={25}/><>Setting</>
                  </Button>
                  <Button bg={"transparent"} width={"-webkit-fit-content"}>
                  <TbBell size={25}/><>Notification</>
                  </Button>
                  <Button bg={"transparent"} width={"-webkit-fit-content"}>
                  <TbListSearch size={25}/><>Logs</>
                  </Button>
                   <Link to={"/auth"} as={RouterLink}>
                      <Button>To auth page</Button>
                    </Link>
                    </Stack>
                    </Flex>
                </DrawerBody>
                <DrawerFooter>
                    <Button onClick={onClose}>close</Button>
                </DrawerFooter>                
            </DrawerContent>
        </Drawer>
    </>
  )
}

export default AccountMenuButton