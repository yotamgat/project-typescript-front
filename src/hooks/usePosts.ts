//-----------------------------------------
//Custom hook that will diffine the logic to get the posts from the server
//-----------------------------------------

import  {useEffect, useState} from "react";
import postService,{CanceledError, Post} from "../services/post-service";

const usePosts = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [error,setError]=useState<string | null>(null);
    const [isLoading,setIsLoading]=useState<boolean>(false);

    useEffect(() => { // useEffect hook to fetch data from the server when the component is rendered
        console.log("Effect")
        setIsLoading(true);// set the isLoading state to true when the component is rendered 
        const {request,abort}=postService.getAllPosts() // call the getAllPosts function from the postService module

        request.then((res)=>{ // if the request is successful
            setPosts(res.data) // update the items state with the posts titles
            setIsLoading(false); // set the isLoading state to false
        })
        .catch((error)=>{ // if the request fails
            if(!(error instanceof CanceledError)){ // if the error is not an instance of the CanceledError class
                setError(error.message); // set the error state to the error message
                setIsLoading(false); // set the isLoading state to false
            } 
        })

        return abort; // return the abort function to cancel the fetch request when the component is unmounted
    },[])
    return {posts,setPosts,error,setError,isLoading,setIsLoading} // return the posts, error, and isLoading states

}
export default usePosts;