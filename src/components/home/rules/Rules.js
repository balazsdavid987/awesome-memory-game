import styles from "./Rules.module.scss";

const Rules = () => {
  return (
    <section>
      <h2>Rules</h2>
      <ol>
        <li>Given a bunch of cards facing down, you have to find the pairs.</li>
        <li>
          Click a card to flip it over and then try to find the matching one.
          <ul>
            <li>If you succeed, the cards remain flipped.</li>
            <li>If not, they are flipped back and you have to try again.</li>
          </ul>
        </li>
        <li>Repeat until all cards have been flipped over.</li>
        <li>Be aware that you only have a limited amount of moves.</li>
      </ol>
    </section>
  );
};

export default Rules;
