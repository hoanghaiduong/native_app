import {  Box, Button, HStack, Pressable, ScrollView, Text } from 'native-base'
import React from 'react'
import colors from '../../colors'

const Orders = () => {
  return (
    <>
     <Box h={"full"} bg={colors.white} pt={5}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Paid order */}
        <Pressable>
          <HStack  space={4} alignItems={"center"} justifyContent="space-between"  bg={colors.deepGray} py={4} px={2}>
            <Text
            fontSize={9}
            color={colors.blue}
            isTruncated//overflow={true}
            >
              6464646464646121
            </Text>
            <Text
            fontSize={12}
            bold
            color={colors.black}
            isTruncated//overflow={true}
            >
              PAID
            </Text>
            <Text
            fontSize={11}
            italic
            color={colors.black}
            isTruncated//overflow={true}
            >
              Dec 12 2022
            </Text>
            <Button px={7} py={1.5} rounded={50} bg={colors.main} 
            _text={{
              color: colors.white
            }}
            _pressed={{
              color: colors.main,
              opacity: 0.1
            }}
            >$356</Button>
          </HStack>
        </Pressable>
        {/* Not paid */}
        <Pressable>
          <HStack space={4} justifyContent="space-between" alignItems={"center"} py={5} px={2}>
            <Text
            fontSize={9}
            color={colors.blue}
            isTruncated//overflow={true}
            >
              6464646464646121
            </Text>
            <Text
            fontSize={12}
            bold
            color={colors.black}
            isTruncated//overflow={true}
            >
             NOT PAID
            </Text>
            <Text
            fontSize={11}
            italic
            color={colors.black}
            isTruncated//overflow={true}
            >
              Jan 12 2021
            </Text>
            <Button px={7} py={1.5} rounded={50} bg={colors.red} 
            _text={{
              color: colors.white
            }}
            _pressed={{
              color: colors.red,
              opacity: 0.1
            }}
            >$356</Button>
          </HStack>
          
        </Pressable>
      </ScrollView>
     </Box>
    </>
  )
}

export default Orders