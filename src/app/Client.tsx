"use client";

import { useEffect, useState } from "react";
import { observer } from "mobx-react";
import { CounterStore } from "./store";

const Counter = observer(() => {
  const [counter] = useState(() => new CounterStore());

  return (
    <div>
      Counter: {counter.counter}
      <br />
      Counter more than 3: {counter.counterMoreThan3 ? "Yes" : "No"}
      <br />
      <button onClick={() => counter.incrementCounter()}>Increment</button>
    </div>
  );
});

export default function Client() {
  const [ssr, setSsr] = useState(true);

  useEffect(() => {
    setSsr(false);
  }, []);

  return ssr ? null : <Counter />;
}
