//------------------------------------
// This file contains the functions to get all the posts from the server
//------------------------------------

import apiClient,{CanceledError} from "./api-client"; 

export {CanceledError} ;
export interface Post{
    title:string,
    content:string,
    owner:string,
    _id:string, 
}

const getAllPosts=  () => {
    const abortController= new AbortController(); // create an AbortController object to cancel the fetch request
    const request=  apiClient.get<Post[]>("/posts", {signal:abortController.signal}) // send a get request to the server to get the posts
    return {request,abort: ()=>abortController.abort()} // return the request and the abort function
}

export default { getAllPosts }