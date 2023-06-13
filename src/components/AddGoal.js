import { useState } from "react";
import styles from "./AddGoal.module.css";


const AddGoal = (props) => {

  const [usersWish,setusersWish]= useState('')

  function handleChangeWish(event){
    setusersWish(event.target.value)
   
  }

  function handleSubmit(event){
      const newWish={
        wish:usersWish
      }
     props.wishFromUser(newWish)
    event.preventDefault()
  }


  return (
    <form onSubmit={handleSubmit} className={styles.grandmotherAddGoal}>
      <div className={styles.motherAddGoal}>
        <label className={styles.courseGoal}>Course Goal</label>
        <input value={usersWish} onChange={handleChangeWish} className={styles.motherAddGoalChild} type="text" />
        <button type="submit" className={styles.addGoalButton}>
          <div className={styles.addGoal}>Add Goal</div>
        </button>
      </div>
    </form>
  );
};

export default AddGoal;
