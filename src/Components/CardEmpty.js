
import React from 'react'
import { Box, Center, Text } from 'native-base'
import colors from '../colors'
import { FontAwesome } from '@expo/vector-icons';
import Buttons from './Buttons';
const CardEmpty = () => {
  return (
    <Box flex={1} p={6}>
      <Center h={"90%"}>
        <Center w={200} h={200} bg={colors.white} rounded="full">
          <FontAwesome name="shopping-basket" size={64} color={colors.main} />

        </Center>
        <Text color={colors.main} bold mt={5}>CART IS EMPTY</Text>
      </Center>
      <Buttons  bg={colors.black} color={colors.white}>
        START SHOPPING
      </Buttons>


    </Box>
  )
}

export default CardEmpty