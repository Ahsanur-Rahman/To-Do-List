import styles from "./AddGoal.module.css";
const AddGoal = () => {
  return (
    <div className={styles.grandmotherAddGoal}>
      <div className={styles.motherAddGoal}>
        <label className={styles.courseGoal}>Course Goal</label>
        <input className={styles.motherAddGoalChild} type="text" />
        <button className={styles.addGoalButton}>
          <div className={styles.addGoal}>Add Goal</div>
        </button>
      </div>
    </div>
  );
};

export default AddGoal;
