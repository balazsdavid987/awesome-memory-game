import styles from "./Select.module.scss";

const Select = ({ options, selected, onChange }) => {
  return (
    <select
      onChange={(e) => onChange(e.target.value)}
      className={styles.component}
      defaultValue={selected}
    >
      {options.map((o) => (
        <option key={o}>{o}</option>
      ))}
    </select>
  );
};

export default Select;
