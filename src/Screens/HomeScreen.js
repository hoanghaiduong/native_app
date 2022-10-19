import { Box, Text, View } from 'native-base'
import React from 'react'
import colors from '../colors'
import HomeProducts from '../Components/HomeProducts'
import HomeSearch from '../Components/HomeSearch'

function HomeScreen() {
    return (
       <>
        <Box flex={1} bg={colors.subGreen}>
            <HomeSearch />
            <HomeProducts/>
        </Box>
       </>
    )
}

export default HomeScreen