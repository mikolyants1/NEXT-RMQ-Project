import { ICommDelBody, IComments } from "@/components/types/type";
import { AxiosResponse } from "axios";
import { baseUrl } from "../../baseUrl";

async function delComment({id,time,token,userId}:ICommDelBody):Promise<IComments> {
    return await baseUrl
    .delete(`comments/${id}?time=${time}&userId=${userId}`,{
        headers:{
            authorization:`Bearer ${token}`
        }
    })
    .then(({data}:AxiosResponse<IComments>)=>data);

}

export default delComment