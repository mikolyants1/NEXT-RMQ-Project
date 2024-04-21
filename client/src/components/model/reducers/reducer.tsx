import {type Action,type IState } from "@/components/libs/types/type";

export const initial:IState = {
    error:false,
    show:false,
    title:""
}

export function reducer(prv:IState,nxt:Action):IState{
  return {
     ...prv, ...nxt
   };
};