import { useSelector, useDispatch } from "react-redux";
import { setDeckSize } from "../../../actions";

import styles from "./DeckSizeSelector.module.scss";

const DeckSizeSelector = () => {
  const dispatch = useDispatch();
  const deckSize = useSelector((state) => state.deckSize);
  const deckSizeOptions = [3, 4, 5, 6, 7, 8, 9, 10];

  const deckSizeChanged = (e) => {
    const size = e.target.value;
    dispatch(setDeckSize(size));
  };

  return (
    <>
      <select
        className={styles.component}
        onChange={deckSizeChanged}
        defaultValue={deckSize}
      >
        {deckSizeOptions.map((o) => (
          <option key={o} value={o}>
            {2 * o} cards
          </option>
        ))}
      </select>
    </>
  );
};

export default DeckSizeSelector;
