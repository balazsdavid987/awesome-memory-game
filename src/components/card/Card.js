import styles from "./Card.module.scss";

const Card = ({ image, flipped, disabled }) => {
  return (
    <div
      className={`${styles.component} ${flipped ? styles.flipped : ""} ${
        disabled ? styles.disabled : ""
      }`}
    >
      <img src={`images/cards/${image}.png`} alt={image} />
    </div>
  );
};

export default Card;
