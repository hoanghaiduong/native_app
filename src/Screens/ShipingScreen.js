import React from 'react'
import { Box, Center, FormControl, Input, ScrollView, Text, View, VStack } from 'native-base'
import colors from '../colors'
import Buttons from '../Components/Buttons'
import { useNavigation } from '@react-navigation/native'


const ShipingInputs = [
  {
    label: "ENTER CITY",
    type: "text",
  },
  {
    label: "ENTER COUNTRY",
    type: "text",
  },
  {
    label: "ENTER POSTAL CODE",
    type: "text",
  },
  {
    label: "ENTER ADDRESS",
    type: "text",
  },
]

function ShipingScreen() {
  const navigation=useNavigation()
  return (
    <Box flex={1} safeAreaTop bg={colors.main} py={5}>
      <Center pb={15} >
        <Text color={colors.white} fontSize={14} bold>
          DELIVERY ADDRESS
        </Text>
      </Center>
      {/* Inputs */}
      <Box h="full" bg={colors.white} px={5}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={6} mt={5} >
            {ShipingInputs.map((i, idx) => (
              <FormControl key={idx}>
                <FormControl.Label
                  _text={{
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                >
                  {i.label}
                </FormControl.Label>
                <Input
                  borderWidth={.2} borderColor={colors.main}
                  bg={colors.subGreen}
                  py={4}
                  type={i.type}
                  color={colors.main}
                  _focus={{
                    bg: colors.subGreen,
                    borderWidth: 1,
                    borderColor: colors.main,
                    color: colors.black
                  }}
                />
              </FormControl>
            ))}
            <Buttons onPress={() => navigation.navigate(
                        "Checkout"
                    )} bg={colors.main} color={colors.white} mt={5}>CONTINUE</Buttons>
          </VStack>

        </ScrollView>
      </Box>
    </Box>
  )
}

export default ShipingScreen