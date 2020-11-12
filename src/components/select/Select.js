import styles from "./Select.module.scss";

const Select = ({ options }) => {
  return (
    <select className={styles.component}>
      {options.map((o) => (
        <option key={o}>{o}</option>
      ))}
    </select>
  );
};

export default Select;
