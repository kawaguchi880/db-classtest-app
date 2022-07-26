import { useState } from "react";


const INITIAL_COUNT = 1;
const rowQuestions = [
  { id: 1, description: "問題文1" },
  { id: 2, description: "問題文2" },
  { id: 3, description: "問題文3" },
  { id: 3, description: "問題文4" },
  { id: 3, description: "問題文5" },
  { id: 3, description: "問題文6" }
];



const Count = () => {

  const [count, setCount] = useState(INITIAL_COUNT);

  const handleClick = () => {
    setCount(prevstate => prevstate + 1);
  }

  return (
    <div>
      <div>{count}問目</div>
      <div>{rowQuestions[count - 1]['description']}</div>
      <button onClick={handleClick}>
        次の問題へ</button>
    </div>
  )

}

export default Count; 