import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton, Button, useDisclosure
} from '@chakra-ui/react'
import { CKALogo } from '../../assets/constants'

const AccountMenuButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
        <Button onClick={onOpen} variant={"none"} cursor={"pointer"}><CKALogo/></Button>
        <Drawer placement='right' onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay/>
            <DrawerContent>
              <DrawerCloseButton />
                <DrawerHeader>Basic Drawer</DrawerHeader>
                <DrawerBody>
                    <p>hi</p>
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