import React from 'react'
import { Box, Center, Heading, Text, View, VStack } from 'native-base'
import Buttons from '../Components/Buttons'
import colors from '../colors'
function NotVerifyScreen() {
  return (
    <Box flex={1} justifyContent={"center"} bg={"green.500"} p={5}>
      <Center w="full" rounded={"lg"} h={250} bg={"white"} px={2}>
        <Heading>FORRBIDEN !</Heading>

      </Center>
      <VStack >
        <Box>
          <Buttons bg={colors.black}
            color={colors.white}
            mt={4}
            
          >REGISTER</Buttons>
          <Buttons bg={colors.white}
            color={colors.black}
            mt={4}
          >LOGIN</Buttons>
        </Box>
      </VStack>
    </Box>
  )
}

export default NotVerifyScreen