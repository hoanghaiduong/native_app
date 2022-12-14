import { Button } from 'native-base'
import React from 'react'

function Buttons({mt,bg,color,children,onPress}) {
  return (
    <Button w="full" h={55} rounded="full" bg={bg} mt={mt} _text={{
        color:color,fontWeight:"bold"
    }}
    _pressed={{bg:bg,opacity:.1}}
    onPress={onPress} 
    >{children}</Button>
  )
}

export default Buttons