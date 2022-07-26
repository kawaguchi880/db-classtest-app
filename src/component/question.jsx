import { useState } from "react";
// import { shuffle } from "./index"

const INITIAL_COUNT = 1;
const rowQuestions = [
  { id: 1, description: "問題文1" },
  { id: 2, description: "問題文2" },
  { id: 3, description: "問題文3" },
  { id: 4, description: "問題文4" },
  { id: 5, description: "問題文5" },
  { id: 6, description: "問題文6" }
];

// let shuffledQuestions = shuffle(rowQuestions);


const Count = () => {

  const [count, setCount] = useState(INITIAL_COUNT);

  const handleClick = () => {
    setCount(prevstate => prevstate + 1);
  }

  const resetAll = () => {
    // shuffledQuestions = shuffle(rowQuestions);
    setCount(INITIAL_COUNT);
  }

  return (
    <div>
      <div>{count}問目</div>
      <div>{rowQuestions[count - 1]['description']}</div>

      <button onClick={handleClick}>
        次の問題へ</button>
      <button onClick={resetAll}>問題をリセットして初めからやる</button>
    </div>
  )

}

export default Count; 