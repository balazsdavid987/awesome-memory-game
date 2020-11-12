import styles from "./Play.module.scss";

import Button from "../../components/button/Button";
import Select from "../../components/select/Select";
import Grid from "../../components/grid/Grid";
import Card from "../../components/card/Card";

import arrayShuffle from "array-shuffle";

const cards = [
  "angular",
  "d3",
  "jenkins",
  "postcss",
  "react",
  "redux",
  "sass",
  "splendex",
  "ts",
  "webpack",
];

const Play = () => {
  const deck = arrayShuffle(cards);

  return (
    <>
      <div className={styles.header}>
        <div className={styles.stats}>
          <div>
            Moves: <span>{10}</span>
          </div>
          <div>
            Best: <span>{100}</span>
          </div>
        </div>
        <div className={styles.controls}>
          Deck size:
          <Select options={[3, 4, 5, 6, 7, 8, 9, 10]} />
          <Button label="Start new game" type="primary" />
          <Button label="Restart" type="secondary" />
        </div>
      </div>

      <Grid>
        <Card image="angular" />
        <Card image="angular" disabled="true" />
        <Card image="angular" flipped="true" />
        {deck.map((c) => (
          <Card key={c} image={c} />
        ))}
      </Grid>
    </>
  );
};

export default Play;
