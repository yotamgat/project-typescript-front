import  {useEffect, useState} from "react";
import PostsList from "./PostsList";
import axios from "axios";

interface Post{
    title:string,
    content:string,
    owner:string,
    _id:string, 
}

function App(){
    const [items, setItems] = useState<string[]>([]);

    useEffect(() => {
        console.log("Effect")
        const fetchData= async () => {
            try{
                const res= await axios.get<Post[]>("http://localhost:3000/posts")
                setItems(res.data.map((item) => item.title))
            }catch(error){
                console.error(error)
            }
        }
        fetchData();
    },[])

    return (
        <div>
            <PostsList title="Posts" items={items} onItemSelected={(index)=>{console.log("Selected item: " + index)}}/>
            <button className="btn btn-primary m-3" onClick={() => {setItems([...items])}}>Refresh</button>
        </div>
    )
}

export default App