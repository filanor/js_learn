import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
  const initialCounters = [
    { id: 1, value: 1, name: "Кнопки" },
    { id: 2, value: 0, name: "Скрепки" },
    { id: 3, value: 10, name: "Клёпки" },
    { id: 4, value: 0, name: "Дырки" },
    { id: 5, value: 5, name: "Булки" },
    { id: 6, value: 0, name: "Вилки" },
  ];

  const [counters, setCounters] = useState(initialCounters);

  const handleDelete = (id) => {
    const newCounters = counters.filter((c) => c.id !== id);
    setCounters(newCounters);
  };

  const handleReset = () => {
    setCounters(initialCounters);
  };

  const handleIncriment = (id) => {
    setCounters(
      counters.map((c) => {
        if (c.id === id) {
          return { ...c, value: c.value + 1 };
        } else {
          return { ...c };
        }
      })
    );
  };
  const handleDicriment = (id) => {
    setCounters(
      counters.map((c) => {
        if (c.id === id) {
          return { ...c, value: c.value - 1 };
        } else {
          return { ...c };
        }
      })
    );
  };

  return (
    <>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          // id={counter.id}
          // value={counter.value}
          // name={counter.name}
          {...counter}
          onIncriment={handleIncriment}
          onDicriment={handleDicriment}
          onDelete={handleDelete}
        />
      ))}
    </>
  );
};

export default CountersList;
