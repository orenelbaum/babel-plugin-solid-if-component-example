import { createSignal } from 'solid-js';
import { If, Else } from 'babel-plugin-solid-if-component';

const App = () => {
  const [count, setCount] = createSignal(0);

  return (
    <button
      onClick={() => {
        setCount(count() + 1);
      }}
    >
      <If cond={count() > 2}>{count()} (Bigger than 2)</If>
      <Else>{count()} (Smaller than 2)</Else>
    </button>
  );
};

export default App;
