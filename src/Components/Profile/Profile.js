import {  Box, FormControl, Input, KeyboardAvoidingView, ScrollView, Text, VStack } from 'native-base'
import React from 'react'
import colors from '../../colors'
import Buttons from '../Buttons'
const Inputs=[
  {
    label:"USERNAME",
    type:"text"
  },
  {
    label:"EMAIL",
    type:"text"
  },
  {
    label:"PASSWORD",
    type:"password"
  },
  {
    label:"CONFIRM PASSWORD",
    type:"password"
  },
  
]
const Profile = () => {
  return (
  
    <Box  h="full" bg={colors.white} px={5}>
        
        <ScrollView showsVerticalScrollIndicator={false}>
     
          <VStack space={10} mt={5} pb={10}>
     
            {Inputs.map((i,idx)=>
            (
              <FormControl key={idx}>
              <FormControl.Label
              _text={{
                fontSize:"12px",
                fontWeight:"bold"
              }}
              >
                {i.label}
              </FormControl.Label>
              <Input 
              type={i.type}
              borderWidth={0.5} 
              bg={colors.subGreen} 
              py={3} color={colors.main} 
              fontSize={12} 
              _focus={{
                bg:colors.subGreen,
                borderColor:colors.main,
                borderWidth:1
              }} />
            </FormControl>
            ))}
          <Buttons bg={colors.main} color={colors.white}>UPDATE PROFILE</Buttons>
          </VStack>
         
        </ScrollView>  
      </Box>
  
  )
}

export default Profile