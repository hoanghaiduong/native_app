import { View, Text, FlatList, Pressable, HStack, Center, Image, Box, VStack, Button } from 'native-base'
import React from 'react'
import colors from '../colors'
import { productsData } from '../data/Products'

const OrderIterm = () => {
    return (
        <FlatList showsVerticalScrollIndicator={false} data={productsData} keyExtractor={(item) => item._id}
            renderItem={({ item }) => (
                <Pressable>
                    <Box mb={3}>
                        <HStack alignItems={"center"} bg={colors.white} shadow={1} rounded={10} overflow="hidden" p={2}>
                            <Center w="25%" bg={colors.deepGray}>
                                <Image source={{ uri: item.image }} alt={item.name} w="full" h={24} />
                            </Center>
                            <VStack w="60%" px={2}>
                                <Text isTruncated color={colors.black} bold fontSize={12}>
                                    {item.name}
                                </Text>
                                <Text color={colors.lightBlack} fontSize={12} mt={2} bold>
                                    ${item.price}
                                </Text>
                            </VStack>
                            <Center>
                                <Button bg={colors.main} _pressed={{
                                    bg: colors.main
                                }}
                                    _text={{
                                        color: colors.white
                                    }}
                                >5</Button>
                            </Center>
                        </HStack>
                    </Box>
                </Pressable>
            )}
        >

        </FlatList>
    )
}

export default OrderIterm