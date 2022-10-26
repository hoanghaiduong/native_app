
import React from 'react'
import { Center, Text } from 'native-base'

const Message = ({bg,color,childrent,size,bold}) => {
  return (
   <Center bg={bg} p={4} rounded={5}>  
        <Text color={color} fontSize={size} bold={bold}>{childrent}</Text>
   </Center>
  )
}

export default Message