import styles from "./Button.module.scss";

const Button = ({ label, type, onClick }) => {
  return (
    <button className={`${styles.component} ${styles[type]}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
