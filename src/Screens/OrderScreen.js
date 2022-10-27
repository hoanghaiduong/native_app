import React from 'react'
import { Box, Heading, ScrollView } from 'native-base'
import colors from '../colors'
import OrderInfo from '../Components/OrderInfo'
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import OrderIterm from '../Components/OrderIterm';
import OrdersModel from '../Components/OrdersModel';
function OrderScreen() {
  return (
    <Box safeArea flex={1} pt={6} bg={colors.subGreen}>
      <Box>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <OrderInfo title="SHIPPING INFO"
            success={"Paypal On Jan 12 2021"}
            subTitle="Shipping: Tanzania" text="Pay method: Paypal"
            icon={<FontAwesome5 name="shipping-fast" size={24} color={colors.white} />}
          />

          <OrderInfo title="DELIVER TO"
            danger
            subTitle="Address: Bien Hoa" text="93/34B KP5 Phuong Ho Nai"
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
        <OrdersModel />
      </Box>
    </Box>
  )
}

export default OrderScreen