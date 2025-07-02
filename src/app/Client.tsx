"use client";

import { useEffect, useRef, useState } from "react";
import { CounterStore } from "./store";

const Counter = () => {
  const store = useRef(new CounterStore());

  return (
    <div>
      Counter: {store.current.counter}
      <br />
      Counter more than 3: {store.current.counterMoreThan3 ? "Yes" : "No"}
      <br />
      <button onClick={() => store.current.incrementCounter()}>
        Increment
      </button>
    </div>
  );
};

export default function Client() {
  const [ssr, setSsr] = useState(true);

  useEffect(() => {
    setSsr(false);
  }, []);

  return ssr ? null : <Counter />;
}
