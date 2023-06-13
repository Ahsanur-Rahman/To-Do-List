import { useState } from "react";
import AddGoal from "../components/AddGoal";
import ListContainer from "../components/ListContainer";
import styles from "./ToDoList.module.css";
const ToDoList = () => {
  const INITIAL_Wishes=[{
    wish:'Start your day with a coffy!',
  }
  ]
  const [allWish,setallWish]=useState(INITIAL_Wishes)
    function wishFromUser(wish){
      const newWish={...wish}
      
      setallWish((prevWish)=>{
        return [newWish,...prevWish]
      })
    }
  return (
    <div className={styles.toDoList}>
      <AddGoal wishFromUser={wishFromUser}/>
      {allWish.map(wish => <ListContainer Wishes={wish} />)}
    </div>
  );
};

export default ToDoList;
