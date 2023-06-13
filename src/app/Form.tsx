"use client";

import { useState, useTransition } from "react";
import { doStuff } from "./actions";

export function Form() {
  const [isLoading, startTransition] = useTransition();
  const [x, setX] = useState("");
  return (
    <button
      onClick={() => {
        startTransition(async () => {
          await doStuff();
          // setX("gg");
        });
      }}
    >
      submit {isLoading && "Loading..."}
    </button>
  );
}
