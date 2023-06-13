import { useState } from "react";
import styles from "./AddGoal.module.css";
import ErrorCard from "./ErrorCard";



const AddGoal = (props) => {

  const [usersWish,setusersWish]= useState('')
  const [error,setError]=useState('')

  function handleChangeWish(event){
    setusersWish(event.target.value)
   
  }
  function errorHandler(){
    setError(null)
    
  }

  function handleSubmit(event){
    event.preventDefault()

    if(usersWish.trim().length==0){
      return(
      setError({
        title:"Invalid Input",
        massage:"Wish Can Not Be Empty"
      })
      )
    }
      const newWish={
        wish:usersWish
      }
      console.log(newWish);
     props.wishFromUser(newWish)
     setusersWish('')
    
  }


  return (
    <div>
      {error && <ErrorCard title={error.title} massage={error.massage} onConfirm={errorHandler}/>}
    <form onSubmit={handleSubmit} className={styles.grandmotherAddGoal}>
      <div className={styles.motherAddGoal}>
        <label className={styles.courseGoal}>Course Goal</label>
        <input value={usersWish} onChange={handleChangeWish} className={styles.motherAddGoalChild} type="text" />
        <button type="submit" className={styles.addGoalButton}>
          <div className={styles.addGoal}>Add Goal</div>
        </button>
      </div>
    </form>
    </div>
  );
};

export default AddGoal;
