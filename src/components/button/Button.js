import styles from "./Button.module.scss";

const Button = ({ label, type }) => {
  return (
    <button className={`${styles.component} ${styles[type]}`}>{label}</button>
  );
};

export default Button;
