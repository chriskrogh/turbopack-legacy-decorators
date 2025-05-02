"use client";

import { useRef } from "react";
import { CounterStore } from "./store";
export default function Client() {
    const store = useRef(new CounterStore());

    return (
        <div>
            Counter: {store.current.counter}
            <br />
            Counter more than 3: {store.current.counterMoreThan3 ? "Yes" : "No"}
            <br />
            <button onClick={() => store.current.incrementCounter()}>Increment</button>
        </div>
    )
}