import React, { useState } from "react";

// Hook

// useState 배열을 반환

export default function Counter() {
  // 함수 컴포넌트는 함수일 뿐이다.

  // const [count, setCount] = useState(0);

  // const [show, setShow] = useState(true);

  // +, - , * random

  const operators = ["+", "-", "*"];

  //const [operator, setOperator] = useState(operators[0]);

  const [info, setInfo] = useState({
    count: 0,
    show: true,
    operator: operators[0],
  });

  return (
    <div>
      <button
        onClick={() => {
          let result;
          if (info.operator === "+") result = info.count + 1;
          if (info.operator === "-") result = info.count - 1;
          if (info.operator === "*") result = info.count * 1;
          setInfo({ ...info, count: result });
          // setCount(result);
        }}
      >
        {info.operator}1
      </button>
      <button
        onClick={() => {
          //   info.show = !info.show;
          //   const newInfo = info;
          setInfo({ ...info, show: !info.show });
        }}
      >
        Show and Hide
      </button>
      <button
        onClick={() => {
          const idx = Math.floor(Math.random() * operators.length);
          // setOperator(operators[idx]);
          setInfo({ ...info, operator: operators[idx] });
        }}
      >
        change operator
      </button>
      <br />
      {info.show && `Counter ${info.count}`}
    </div>
  );
}
