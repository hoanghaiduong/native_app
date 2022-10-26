import { Box, Flex, Heading, Image, Pressable, ScrollView, Text } from 'native-base'
import React from 'react'
import { productsData } from '../data/Products'
import Rating from './Rating'

function HomeProducts() {
  return (
    <ScrollView flex={1} showsVerticalScrollIndicator={false}>
        <Flex flexWrap={"wrap"} direction="row" justifyContent={"space-between"} px={6}>
          {productsData.map((product,index)=>(
            <Pressable
              key={index}
              w="47%"
              bg={"white"}
              rounded="md"
              shadow={2}
              pt={'0.3'}
              my={3}
              pb={2}
              overflow="hidden"
            >
              <Image source={{uri:product.image}} alt={product.name}
              h={24}
              resizeMode={"contain"}
              />
              <Box px={4} pt={1}>
                <Heading
                bold
                size={"sm"}
                >
                  ${product.price}
                </Heading>
                <Text
                mt={1}
                isTruncated
                w={"full"}
                >
                  {product.name}
                </Text>
                {/* rating */}
                <Rating value={product.rating}/>
              </Box>
            </Pressable>
          ))}
        </Flex>
    </ScrollView>
  )
}

export default HomeProducts