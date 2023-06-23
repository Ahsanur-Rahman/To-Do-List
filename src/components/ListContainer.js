import { Component } from "react";
import styles from "./ListContainer.module.css";
const ListContainer = (props) => {
  // wish holder Component
  return (
    <div className={styles.listContainer}>
      <div className={styles.allExercises}>{props.Wishes.wish}</div>
    </div>
  );
};

export default ListContainer;
