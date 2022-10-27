import React from 'react'
import { Box, Button, Heading, Image, Input, Pressable, Text, View, VStack } from 'native-base'
import colors from '../colors'
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

function RegisterScreen({navigation}) {
    return (
        <Box flex={1}>
            <Image
                flex={1}
                alt="logo"
                resizeMode="cover"
                size="lg"
                w="full"
            //source={require("../../assets/icon.png")}

            />
            <Box w="full" bg={"green.900"} h="full" px="6" justifyContent="center"
            >
                <Box bg={"white"} rounded={"md"} p={5}>
                    <Heading color={"emerald.400"} >Đăng ký</Heading>
                    <VStack space={8} pt={6}>
                        <Input
                            InputLeftElement={<FontAwesome name="user" size={20} color={colors.main} />}
                            variant={"underlined"}
                            placeholder="Enter user name"
                            w="70%"
                            pl={2}
                            color={"emerald.400"}
                            borderBottomColor={colors.underline}
                        />
                        <Input
                            InputLeftElement={<MaterialIcons name="email" size={20} color={colors.main} />}
                            variant={"underlined"}
                            placeholder="Enter your email address "
                            w="70%"
                            pl={2}
                            color={"emerald.400"}
                            borderBottomColor={colors.underline}
                        />
                        <Input
                            InputLeftElement={<MaterialCommunityIcons name="form-textbox-password" size={20} color={colors.main} />}
                            variant={"underlined"}
                            placeholder="*******"
                            w="70%"
                            type="password"
                            pl={2}
                            color={"emerald.400"}
                            borderBottomColor={colors.underline}
                        />
                    </VStack>
                    <Button
                        _pressed={{
                            bg: colors.main,
                            opacity: 0.5

                        }}

                        my={30} w="40%" mx="0" rounded={"md"} bg={"emerald.400"}
                        onPress={() => navigation.navigate(
                            "Bottom"
                        )}
                        >Register</Button>
                    <Pressable mt={4} >
                        <Text color={colors.deepestGray}  onPress={() => navigation.navigate(
                        "Login"
                    )}>LOGIN</Text>
                    </Pressable>
                </Box>

            </Box>
        </Box>

    )
}

export default RegisterScreen