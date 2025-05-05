import { useState } from "react";

export default function Form({ addTask }) {

  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    addTask(name);
    setName("");
  }

  return (
    <form role="form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button disabled={!name}>
        add
      </button>
    </form>
  )
}