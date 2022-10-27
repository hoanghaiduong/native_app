import React from 'react'
import { Box, Center, FormControl, HStack, Image, Input, ScrollView, Spacer, Text, View, VStack } from 'native-base'
import colors from '../colors'
import Buttons from '../Components/Buttons'
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const PaymentMethodes = [
  {
    image: "https://assets.stickpng.com/images/580b57fcd9996e24bc43c530.png",
    alt: "paypal",
    icon: "Feather",
    isSelect: true
  },
  {
    image: "https://cdn.iconscout.com/icon/free/png-256/discover-credit-debit-card-bank-transaction-32285.png",
    alt: "discover",
    icon: "Feather",
    isSelect: false
  },
  {
    image: "https://png.oyepandeyji.com/wp-content/uploads/2021/08/gpay-logo-png-removebg-preview.png",
    alt: "googlepay",
    icon: "Feather",
    isSelect: false
  },
]
function PaymentScreen() {
  const navigation= useNavigation()
  return (
    <Box flex={1} safeAreaTop bg={colors.main} py={5}>
      <Center pb={15} >
        <Text color={colors.white} fontSize={14} bold>
          PAYMENT METHOD
        </Text>
      </Center>
      {/* SELECTION */}
      <Box h="full" bg={colors.subGreen} px={5}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={6} mt={5} >
            {PaymentMethodes.map((i, index) => (
              <HStack key={index} alignItems={"center"} bg={colors.white}
                px={3}
                py={1}
                rounded={10}
                justifyContent={"space-between"}
              >
                <Box>
                  <Image source={{ uri: i.image }} alt={i.alt} resizeMode="contain" w={60} h={50} />
                </Box>
                {i.isSelect? <Feather
                  name="check-circle" size={24} color={colors.main} /> : <Feather name="circle" size={24} color={colors.main} />}
               

              </HStack>
            ))}

            <Buttons onPress={() => navigation.navigate(
                        "Placeorder"
                    )} bg={colors.main} color={colors.white} mt={5}>CONTINUE</Buttons>
            <Text italic textAlign={"center"}>Payment method is 
            <Text bold> Paypal </Text> by default
            </Text>
          </VStack>

        </ScrollView>
      </Box>
    </Box>
  )
}

export default PaymentScreen