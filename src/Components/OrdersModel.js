import { useNavigation } from '@react-navigation/native'
import { View, Text, Center, Modal, VStack, HStack, Button, Pressable, Image } from 'native-base'
import React, { useState } from 'react'
import colors from '../colors'
import Buttons from './Buttons'
const OrdersInfo = [
    {
        title: "Products",
        price: 125.77,
        color: "black"
    },
    {
        title: "Shipping",
        price: 34.00,
        color: "black"
    },
    {
        title: "Tax",
        price: 23.34,
        color: "black"
    },
    {
        title: "Total Amount",
        price: 3458.00,
        color: "main"
    }
]
const OrdersModel = () => {
    const navigation=useNavigation()
    const [showModel, setShowModel] = useState(false)
    return (
        <Center>
            <Buttons onPress={() => setShowModel(true)} bg={colors.main} color={colors.white}
                mt={5}
            >
                SHOW PAYMENT & TOTAL
            </Buttons>
            <Modal isOpen={showModel} onClose={() => setShowModel(false)} size="lg">
                <Modal.Content maxWidth={350}>
                    <Modal.CloseButton />
                    <Modal.Header>Order</Modal.Header>
                    <Modal.Body>
                        <VStack space={7}>
                            {OrdersInfo.map((i, index) => (
                                <HStack key={index} alignItems="center" justifyContent={"space-between"}>
                                    <Text fontWeight={"medium"}>{i.title}</Text>
                                    <Text color={i.color === "main" ? colors.main : colors.black} bold >${i.price}</Text>
                                </HStack>
                            ))}

                        </VStack>
                    </Modal.Body>
                    <Modal.Footer>
                        <Pressable w="full" justifyContent={"center"} bg={colors.paypal} h={45}
                            onPress={() => setShowModel(false)}
                            rounded={3}
                            overflow="hidden"
                        >
                            <Image source={{ uri: "https://assets.stickpng.com/images/580b57fcd9996e24bc43c530.png" }} alt="paypal" resizeMode="contain" w="full" h={34} />
                        </Pressable>
                        <Button flex={1}
                        mt={4}
                        bg={colors.main} h={45}
                            _text={{
                                color: "white",

                            }}
                            onPress={() => {
                               navigation.navigate(
                                    "Home"
                                )
                                setShowModel(false)
                            }}
                            _pressed={{
                                bg: colors.black,
                                opacity: .2
                            }}>
                            PLACE LATER
                        </Button>
                    </Modal.Footer>
                </Modal.Content>
            </Modal>
        </Center>
    )
}

export default OrdersModel