'use client'

import {type ICommBody} from "@/components/libs/types/type"
import { Box, Flex } from "@chakra-ui/react"
import CommUserCard from "./cards/CommUserCard"

interface props {
    data:ICommBody[]
};

function CommUserMapCard({data}:props):JSX.Element {
  return (
    <>
      <Box w='100%'
       textAlign='center'
       m='10px auto 10px auto'
       fontSize={30}
       color='white'>
         Your Comments
       </Box>
      <Flex w='100%'
        flexWrap='wrap'
        justifyContent='center'
        alignItems='center'
        gap={10}>
        {data.map((i:ICommBody):JSX.Element=>(
          <CommUserCard key={i.userId} {...i}/>
        ))}
      </Flex>
    </>
  )
}

export default CommUserMapCard