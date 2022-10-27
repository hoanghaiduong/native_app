import React from 'react'
import { Box, Center, HStack, ScrollView, Text, View ,Button} from 'native-base'
import colors from '../colors'
import CardEmpty from '../Components/CardEmpty'
import CartItems from '../Components/CartItems'
import Buttons from '../Components/Buttons'
import { useNavigation } from '@react-navigation/native'
function CartScreen() {
  const navigation= useNavigation()
  return (
    <Box flex={1} safeAreaTop bg={colors.subGreen}>
      <Center py={5} w="full">
        <Text color={colors.black} fontSize={20} bold >
          Cart
        </Text>
       
      </Center>
      {/* IF CART IS EMPTY */}
      {/* <CardEmpty /> */}
      {/* CART ITEMS */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <CartItems />
        {/*Buttons*/}
        <Center mt={5}>
          <HStack rounded={50} justifyContent="space-between" bg={colors.white} w="90%" pl={5} h={45} alignItems="center">
            <Text>
              Total
            </Text>
            <Button px={10} h={45} rounded={50} bg={colors.main}
            _text={{
              color:colors.white,
              fontWeight:"semibold"
            }}
            _pressed={{
              bgColor:colors.main,
              opacity:0.5
            }}
            >$336</Button>
          </HStack>
        </Center>
        <Center px={5}>
            <Buttons  onPress={() => navigation.navigate(
              "Shipping"
          )} bg={colors.black} color={colors.white} mt={10}>CHECK OUT</Buttons>
        </Center>
      </ScrollView>
    </Box>
  )
}

export default CartScreen