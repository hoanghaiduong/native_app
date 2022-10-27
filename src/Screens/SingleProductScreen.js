import React, { useState } from 'react'
import { Box, Button, Heading, HStack, Image, KeyboardAvoidingView, ScrollView, Spacer, Text, View } from 'native-base'
import colors from '../colors'
import Rating from '../Components/Rating'
import { MaterialIcons } from '@expo/vector-icons';
import Buttons from '../Components/Buttons';
import NumericInput from 'react-native-numeric-input';
import Reviews from '../Components/Reviews';
import { useNavigation } from '@react-navigation/native';
function SingleProductScreen({ route }) {
  const [quantity, setQuantity] = useState(0);
  const navigation = useNavigation()
  const product = route.params
  return (


    <Box safeArea flex={1} bg={colors.white}>
      <KeyboardAvoidingView behavior={"position"} flex={1}>
        <ScrollView px={5} showsVerticalScrollIndicator={false}>

          <Image source={{ uri: product.image }} w={"full"} h={300} alt={"IMAGE"} resizeMode={"contain"} />
          <Heading bold fontSize={15} mb={2} lineHeight={22}>
            {product.name}
          </Heading>
          <Rating value={product.rating} text={`${product.numReviews} reviews`} />
          <HStack space={2} alignItems="center" my={5}>
            {product.countInStock > 0 ? <>
              <NumericInput
                value={quantity}
                totalWidth={140}
                totalHeigh={30}
                iconSize={25}
                step={1}
                maxValue={product.countInStock}

                minValue={0}
                borderColor={colors.deepGray}
                rounded
                textColor={colors.black}
                iconStyle={{ color: colors.white }}
                rightButtonBackgroundColor={colors.main}
                leftButtonBackgroundColor={colors.main}
              />

            </> : <Heading bold color={colors.red} italic fontSize={12}>
              Out Of Stock
            </Heading>}

            <Spacer />
            <Heading bold color={colors.black} fontSize={19}>
              ${product.price}
            </Heading>

          </HStack>
          <Text lineHeight={24} fontSize={14}>
           {product.description}

          </Text>
          <Buttons  onPress={() => navigation.navigate(
                        "Cart"
                    )} bg={colors.main} color={colors.white} mt={10}>ADD TO CART</Buttons>
          <Reviews />

        </ScrollView>
      </KeyboardAvoidingView>
    </Box>

  )
}

export default SingleProductScreen