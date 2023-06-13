import { useState } from "react";
import AddGoal from "../components/AddGoal";
import ListContainer from "../components/ListContainer";
import styles from "./ToDoList.module.css";
const ToDoList = () => {
  // initials wishes
  const INITIAL_Wishes=[{
    wish:'Start your day with a coffy!',
  }
  ]
  const [allWish,setallWish]=useState(INITIAL_Wishes)
    // getting wishes from AddGoal component
    function wishFromUser(wish){
      // new wishes comming
      const newWish={...wish}
      // penetrating new wishes to the allWish
      setallWish((prevWish)=>{
        return [newWish,...prevWish]
      })
    }
  return (
    <div className={styles.toDoList}>
      <AddGoal wishFromUser={wishFromUser}/>
      {/* Executing all wish components */}
      {allWish.map(wish => <ListContainer key={Math.random()} Wishes={wish} />)}
    </div>
  );
};

export default ToDoList;
