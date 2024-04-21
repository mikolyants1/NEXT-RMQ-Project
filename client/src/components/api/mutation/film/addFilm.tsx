import axios, {type AxiosResponse } from "axios";
import {type Axios,type IFilms,type IToken,type IUsers } from "@/components/libs/types/type";
import { apiClient } from "../../apiClient";

async function addFilm(args:IFilms&IToken):Promise<IUsers> {
 const {_id,token,role,...body}:IFilms&IToken = args;
 return apiClient.post<IUsers>(
  `films/${_id}?userId=${_id}`,body,{
    headers:{
      authorization:`Bearer ${token}`,
      role:`${role}`
    }
  }).then(({data}:Axios<IUsers>)=>data);
};

export default addFilm