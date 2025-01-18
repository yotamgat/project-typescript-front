import  {FC} from "react";
import ItemsList from   "./ItemsList";
import usePosts from "../hooks/usePosts";

const PostsList: FC = () => {
    const {posts, error, isLoading} = usePosts(); // call the usePosts hook to get the posts, error, and isLoading states
    return (
        <div>
            {isLoading && <p>Loading...</p>}
            {error && <p>{error}</p>} 
            <ItemsList title="Posts" items={posts.map((post)=>post.title)} onItemSelected={(index)=>{console.log("Selected item: " + index)}}/>
        </div>
    )
}

export default PostsList