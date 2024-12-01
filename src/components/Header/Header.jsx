import { Flex } from "@chakra-ui/react"
import { TbBell } from "react-icons/tb";
import AccountMenuButton from "./AccountMenuButton";



const Header = () => {
  return (
    <Flex direction={"row"} justifyContent={"flex-end"} alignItems={"center"} h={"56px"} w={{base:"calc(100%-70px)",md:"calc(100%-240px)"}} padding={"35px 35px"} gap={"10px"}>
        <Flex>
            <TbBell size={"30px"}/>
        </Flex>
        {/*Right Side */}
        <AccountMenuButton/>
        
    </Flex>
  )
}

export default Header
