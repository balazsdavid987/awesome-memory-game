import styles from "./Card.module.scss";

const Card = ({ image, id, flipped, disabled, clickHandler }) => {
  return (
    <div
      className={`${styles.component} ${flipped ? styles.flipped : ""} ${
        disabled ? styles.disabled : ""
      }`}
      onClick={() => clickHandler(id)}
    >
      <img src={`images/cards/${image}.jpg`} alt={image} draggable="false" />
    </div>
  );
};

export default Card;
