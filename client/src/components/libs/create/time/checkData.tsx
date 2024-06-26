import {type IComment } from "@/components/libs/types/type";

function checkData(i:IComment[],idx:number):boolean{
  if (idx == 0) return true;
  const date1:Date = new Date(i[idx].time);
  const date2:Date = new Date(i[idx-1].time);
  return date1.getDate() !== date2.getDate();
}

export default checkData