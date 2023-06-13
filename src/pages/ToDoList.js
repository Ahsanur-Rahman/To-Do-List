import AddGoal from "../components/AddGoal";
import ListContainer from "../components/ListContainer";
import styles from "./ToDoList.module.css";
const ToDoList = () => {
  return (
    <div className={styles.toDoList}>
      <AddGoal />
      <ListContainer />
    </div>
  );
};

export default ToDoList;
