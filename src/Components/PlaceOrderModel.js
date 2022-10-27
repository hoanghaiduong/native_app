import { useNavigation } from '@react-navigation/native'
import { View, Text, Center, Modal, VStack, HStack, Button } from 'native-base'
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
const PlaceOrderModel = () => {
    const navigation = useNavigation();
    const [showModel, setShowModel] = useState(false)
    return (
        <Center>
            <Buttons onPress={() => setShowModel(true)} bg={colors.black} color={colors.white}
                mt={5}
            >
                SHOW TOTAL
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
                        <Button flex={1} bg={colors.main} h={45}
                            _text={{
                                color: "white",

                            }}
                            _pressed={{
                                bg: colors.main,
                                opacity: .2
                            }}
                            onPress={() => {
                                navigation.navigate(
                                    "order"
                                )
                                setShowModel(false)
                            }
                            }
                        >
                            PLACE AN ORDER
                        </Button>
                    </Modal.Footer>
                </Modal.Content>
            </Modal>
        </Center>
    )
}

export default PlaceOrderModel