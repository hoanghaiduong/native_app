import React from 'react'
import { Center, Heading, Image, Text, View } from 'native-base'
import colors from '../colors'
import Tabs from '../Components/Profile/Tabs'
function ProfileScreen() {
  return (
    <>
      <Center  bg={colors.main} pt={10} pb={6}>
        {/* IMAGE */}
       <Image source={{uri:"https://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png"}} w={24} h={24} alt="profile" resizeMode='cover'  />
       {/* HEADING */}
       <Heading bold fontSize={15} isTruncated my={2} color={colors.white}>
          User Doe
       </Heading>
       {/* SUB HEADING */}
       <Text italic fontSize={10} color={colors.white}>
        Joined Dec 12 2022
       </Text>
      </Center>
      {/* TABS */}
      <Tabs />
    </>
  )
}

export default ProfileScreen