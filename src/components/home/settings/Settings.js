import styles from "./Settings.module.scss";

import DeckSizeSelector from "../../deck-size-selector/DeckSizeSelector";

const Settings = () => {
  return (
    <section>
      <h2>Settings</h2>
      <div>Image set: ...</div>
      <DeckSizeSelector />
      <div>
        Language:{" "}
        <label>
          <input type="radio" name="lang" value="en" />
          English
        </label>
        <label>
          <input type="radio" name="lang" value="hu" />
          Magyar
        </label>
      </div>
      <div>Theme: ...</div>
    </section>
  );
};

export default Settings;
