import  { useState,FC } from 'react';
import PostListStyle from './PostList.module.css';

interface PostsListProps {

  // Add props here
  title: string;
  items: string[];
  onItemSelected: (index: number) => void;
}

const PostsList:FC<PostsListProps>=({title,items,onItemSelected})=> { 

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [render,setRender] = useState(0);

  console.log("PostList render")

  // Handle the click event on the list
  const onClick = (index: number) => {
    console.log("Click " + index);
    setSelectedIndex(index);
  }
  // Add a new item to the list
  const addItem = () => {
    console.log("Add item");
    items.push("New item");
  
    setRender(render +1);
  }

  const onSelect = () => {
    onItemSelected(selectedIndex);
    
  }
  
  return (
    <div className={PostListStyle.container}>
      <h1>{title}</h1>
      { items.length === 0 ? <p>No items</p> : //if items is empty, display "No items", else display the list
        <ul className="list-group">
          {items.map((item,index) => {
              return <li
                  className={selectedIndex === index ? "list-group-item active" : "list-group-item"}
                  key={index} 
                  onClick={()=>{onClick(index)}}>
                  {index} {item}
              </li>
          })} 
        </ul>
      }
      <button className="btn btn-primary m-3" onClick={() => {addItem()}}>Add item</button>
      <button className="btn btn-primary" onClick={() => {onSelect()}}>Select</button>
    </div>
        
  )    
  
}

export default PostsList;
 