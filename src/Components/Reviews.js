
import React, { useState } from 'react'
import { Box, CheckIcon, FormControl, Heading, KeyboardAvoidingView, Select, Text, TextArea, VStack } from 'native-base'
import colors from '../colors'
import Rating from './Rating'
import Message from './Notifications/Message'
import Buttons from './Buttons'

export default function Reviews() {
    const [rating, setRating] = useState('')
    return (

        <Box my={9}>
            <Heading bold fontSize={15} mb={2}>REVIEW</Heading>
            {/* <Message color={colors.main} bg={colors.deepGray} childrent={"NO REVIEW"} bold /> */}
            <Box p={3} bg={colors.deepGray} mt={5} rounded={5}>
                <Heading fontSize={15} color={colors.black}>User Doe</Heading>
                <Rating value={4.5} />
                <Text fontSize={11} my={2}>{new Date().toDateString()}</Text>
                <Message color={colors.black} bg={colors.white} size={10} childrent={"If you want to do something with the color modes in your app, you can use colorModeManager Prop of NativeBaseProvider to achieve it."} />
            </Box>
            {/* write review */}


            {/* <Box mt={6}>
                <Heading fontSize={15} bold color={colors.black} mb={4}>REVIEW THIS PRODUCT</Heading>
                <VStack space={6}>
                    <FormControl>
                        <FormControl.Label _text={{
                            fontSize: "12px",
                            fontWeight: "bold",

                        }}>Rating</FormControl.Label>
                        <Select
                            bg={colors.subGreen}
                            borderWidth={0}
                            rounded={5}
                            py={3}
                            value={rating}
                            onValueChange={(e) => setRating(e)}
                            placeholder="Chosse rating"
                            _selectedItem={{
                                bg: colors.subGreen,
                                endIcon: <CheckIcon size={3} />,

                            }}

                            selectedValue={rating}

                        >
                            <Select.Item label="1 - Poor" value='1' />
                            <Select.Item label="2 - Fair" value='2' />
                            <Select.Item label="3 - Good" value='3' />

                        </Select>
                    </FormControl>

                    <FormControl>
                        <FormControl.Label _text={{
                            fontSize: "12px",
                            fontWeight: "bold",

                        }}>Comment</FormControl.Label>
                        <TextArea
                            h={20} w="full"
                            placeholder="This product is good ..."
                            borderWidth={0}
                            py={4}
                            bg={colors.subGreen}
                            _focus={{
                                bg:colors.subGreen,
                            }}
                        />

                    </FormControl>
                   
                    <Buttons bg={colors.main} color={colors.white}>Bình luận</Buttons>
                   
                    {/* <Message color={colors.white} bg={colors.black} childrent={"Please 'Login' to write a review"} /> 
                </VStack>
            </Box> */}

        </Box>

    )
}