export default function Todo({ 
  id,
  name,
  completed,
  updateTask,
  deleteTask
 }) {

  return (
    <li role="todo">
      <label>
        <input 
          type="checkbox" 
          name="" 
          id="" 
          checked={completed}
          onChange={() => updateTask(id)}
        />
        {name} {" "}
      </label>
      <button onClick={() => deleteTask(id)}>
        delete
      </button>
    </li>
  )
}