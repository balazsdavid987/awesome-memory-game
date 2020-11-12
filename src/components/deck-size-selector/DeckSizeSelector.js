import { useSelector, useDispatch } from "react-redux";
import { setDeckSize } from "../../actions";

//import styles from "./DeckSizeSelector.module.scss";

import Select from "../../components/ui/select/Select";

const DeckSizeSelector = () => {
  const dispatch = useDispatch();
  const deckSize = useSelector((state) => state.game.deckSize);
  const deckSizeOptions = [3, 4, 5, 6, 7, 8, 9, 10];

  const deckSizeChanged = (size) => {
    dispatch(setDeckSize(size));
  };

  return (
    <>
      Deck size:
      <Select
        onChange={deckSizeChanged}
        options={deckSizeOptions}
        selected={deckSize}
      />
    </>
  );
};

export default DeckSizeSelector;
