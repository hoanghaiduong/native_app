import { Box, HStack, Input, Pressable } from 'native-base'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import colors from '../colors';
function HomeSearch() {
  const navigation = useNavigation()
  return (
    <HStack space={3} w="full" py={4} px={6} bg={colors.main} alignItems="center" safeAreaTop>
      <Input placeholder='Search text ...' w={"85%"} bg="white" type="search" h="12" borderWidth={0}
        variant="filled"
        _focus={{
          bg: "white"
        }}

      />
      <Pressable ml={3}  onPress={() => navigation.navigate(
                        "Cart"
                    )}>
        <FontAwesome5 name="shopping-basket" size={24} color="white" />
        <Box px={1} rounded={"full"} position="absolute" top={-13} left={2} bg={colors.red}
          _text={{
            color: "white", fontSize: "11px"
          }}
        >5</Box>
      </Pressable>
    </HStack>
  )
}

export default HomeSearch