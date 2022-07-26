import { useState } from "react";
// import { shuffle } from "./index"

const INITIAL_COUNT = 1;
const selections = [
  { id: 1, questionnumber: 1, item: "HTML" },
  { id: 2, questionnumber: 1, item: "CSS" },
  { id: 3, questionnumber: 1, item: "JavaScript" },
  { id: 4, questionnumber: 1, item: "react" }
];
const rowQuestions = [
  { id: 1, description: "次の選択肢のうちライブラリに相当するものはどれ？？", answer: "react" },
  { id: 2, description: "問題文2", answer: "あ" },
  { id: 3, description: "問題文3", answer: "あ" },
  { id: 4, description: "問題文4", answer: "あ" },
  { id: 5, description: "問題文5", answer: "あ" },
  { id: 6, description: "問題文6", answer: "あ" }
];

// let shuffledQuestions = shuffle(rowQuestions);


const Count = () => {
  // 問題番号のuseState
  const [count, setCount] = useState(INITIAL_COUNT);

  const handleClick = () => {
    setCount(prevstate => prevstate + 1);
  }

  const resetAll = () => {
    // shuffledQuestions = shuffle(rowQuestions);
    setCount(INITIAL_COUNT);
  }

  // 選択肢をSelectItemsからoptionへ
  const SelectItems = selections.map((value) => {
    return (
      <option value={value.item} key={value.id}>{value.item}</option>
    );
  });
  // 正誤表示の為のuseState
  const [answer, setAnswer] = useState(null);

  // 現在の選択肢を表示する為のuseState
  const [selectedValue, setSelectedValue] = useState(selections[0]['item']);
  // 現在の選択肢を表示する関数
  const handleChange = (e) => {
    setSelectedValue(e.target.value);
    if (e.target.value === rowQuestions[count - 1]['answer']) {
      setAnswer(true);
    } else {
      setAnswer(false);
    }
  }



  return (
    <div>
      <div>{count}問目</div>
      <div>{rowQuestions[count - 1]['description']}</div>
      <p>
        <select value={selectedValue} onChange={handleChange}>{SelectItems}</select>
      </p>
      <div>現在選択されている値：<b>
        {selectedValue}
      </b></div>
      <div>正誤確認{answer ? "〇" : "✖"}</div>
      <button onClick={handleClick}>
        次の問題へ</button>
      <button onClick={resetAll}>問題をリセットして初めからやる</button>
    </div>
  )

}

export default Count; 