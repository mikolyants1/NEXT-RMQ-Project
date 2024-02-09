"use client"

import clearFilm from '@/components/helpers/mutation/film/clearFilm'
import { useStore } from '@/components/store/store'
import { IClearQuery } from '@/components/types/type'
import { Button, Flex } from '@chakra-ui/react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import {memo} from 'react'

function ClearJournalButton():JSX.Element {
  const {token,id} = useStore();
  const {invalidateQueries} = useQueryClient();
  const {mutate} = useMutation({
    mutationFn:(args:IClearQuery)=>clearFilm(args),
    onSuccess:()=>invalidateQueries({queryKey:['users']})
  });

 const clear = ():void => {
   mutate({id,token});
 };

  return (
    <Flex w='95%'
     justifyContent='center'
     alignItems='center'
     m='20px auto 20px auto'>
       <Button w={200}
        color='white'
        colorScheme="red"
        onClick={clear}>
          clear journal
       </Button>
    </Flex>
  )
}

export default memo(ClearJournalButton)