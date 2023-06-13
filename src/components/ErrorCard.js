import styles from "./ErrorCard.module.css";
import styles2 from "./AddGoal.module.css"
const ErrorCard = (props) => {
    // validation card for showing erros
  return (
    <div className={styles.errorCard}>
      <div className={styles.errorMassage}>{props.title}</div>
      <div className={styles.suggetion}>
        <div className={styles.whatYouShould}>{props.massage}</div>
      </div>
      <button onClick={props.onConfirm} type="submit" className={styles2.addGoalButton}>
          <div className={styles2.addGoal}>Ok!</div>
        </button>
    </div>
  );
};

export default ErrorCard;
