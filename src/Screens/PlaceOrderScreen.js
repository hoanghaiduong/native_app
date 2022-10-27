import React from 'react'
import { Box, Heading, ScrollView, Text, View } from 'native-base'
import colors from '../colors'
import OrderInfo from '../Components/OrderInfo'
import { Feather, FontAwesome5, Ionicons } from '@expo/vector-icons';
import OrderIterm from '../Components/OrderIterm';
import PlaceOrderModel from '../Components/PlaceOrderModel';
function PlaceOrderScreen() {
  return (
    <Box safeArea flex={1} pt={6} bg={colors.subGreen}>
      <Box>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <OrderInfo title="CUSTOMER" subTitle="Admin Doe" text="admin@example.com"
            icon={<Feather name="user" size={24} color={colors.white} />}
          />

          <OrderInfo title="SHIPPING INFO" subTitle="Shipping: Tanzania" text="Pay method: Paypal"
            icon={<FontAwesome5 name="shipping-fast" size={24} color={colors.white} />}
          />

          <OrderInfo title="DELIVER TO" subTitle="Address: Bien Hoa" text="93/34B KP5 Phuong Ho Nai"
            icon={<Ionicons name="ios-location-outline" size={24} color={colors.white} />}
          />
        </ScrollView>
      </Box>
      {/* Order Iterm */}
      <Box px={6} flex={1} pb={3}>
        <Heading isTruncated fontSize={15} bold my={4}>
          PRODUCTS
        </Heading>
        <OrderIterm />
        {/* total */}
        <PlaceOrderModel />
      </Box>
    </Box>
  )
}

export default PlaceOrderScreen