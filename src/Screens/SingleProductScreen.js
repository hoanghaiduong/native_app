import React, { useState } from 'react'
import { Box, Button, Heading, HStack, Image, KeyboardAvoidingView, ScrollView, Spacer, Text, View } from 'native-base'
import colors from '../colors'
import Rating from '../Components/Rating'
import { MaterialIcons } from '@expo/vector-icons';
import Buttons from '../Components/Buttons';
import NumericInput from 'react-native-numeric-input';
import Reviews from '../Components/Reviews';
function SingleProductScreen() {
  const [quantity, setQuantity] = useState(0);
  
  return (
    
    
    <Box safeArea flex={1} bg={colors.white}>
       <KeyboardAvoidingView behavior={"position"} flex={1}>
      <ScrollView px={5} showsVerticalScrollIndicator={false}>
    
        <Image source={{ uri: "https://st2.depositphotos.com/2920039/10826/i/950/depositphotos_108265984-stock-photo-blue-sport-shoes-on-a.jpg" }} w={"full"} h={300} alt={"IMAGE"} resizeMode={"contain"} />
        <Heading bold fontSize={15} mb={2} lineHeight={22}>
          New Adias complete source SingleProductScreen
        </Heading>
        <Rating value={4} />
        <HStack space={2} alignItems="center" my={5}>
        <NumericInput
          value={quantity}
          totalWidth={140}
          totalHeigh={30}
          iconSize={25}
          step={1}
          maxValue={15}
          
          minValue={0}
          borderColor={colors.deepGray}
          rounded
          textColor={colors.black}
          iconStyle={{color: colors.white}}
          rightButtonBackgroundColor={colors.main}
          leftButtonBackgroundColor={colors.main}
        />
          <Spacer />
          <Heading bold color={colors.black} fontSize={18}>
            $400
          </Heading>
     
        </HStack>
        <Text lineHeight={24} fontSize={14}>
            Add colorModeManager Optional
            If you want to do something with the color modes in your app, you can use colorModeManager Prop of NativeBaseProvider to achieve it.
            In the below example we will show how to store the active ColorMode in an async storage, so it can be consistent all around your app.
            Add colorModeManager Optional
            If you want to do something with the color modes in your app, you can use colorModeManager Prop of NativeBaseProvider to achieve it.
            In the below example we will show how to store the active ColorMode in an async storage, so it can be consistent all around your app.

          </Text>
          <Buttons bg={colors.main} color={colors.white} mt={10}>ADD TO CART</Buttons>
          <Reviews />
         
      </ScrollView>
      </KeyboardAvoidingView>
    </Box>
   
  )
}

export default SingleProductScreen