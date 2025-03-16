import {useState} from 'react'

function ToDoList() {
  const [list, setList] = useState<string[]>([]);
  const [task, setTask] = useState<string>('');

  const handleListAdd = () => {
    if(task !== '')
      setList(l => [...l, task]);
    task = setTask("");
  }

  const handleTaskAdd = (event: React.ChangeEvent<HTMLInputElement>) => setTask(t => event.target.value);

  const deleteTask = (index: number) => setList(l => l.filter((_, i: number) => i !== index));

  const moveTaskUp = (index: number) => {
    if(index > 0){
      const newList = [...list];
      [newList[index], newList[index - 1]] = [newList[index - 1], newList[index]];
      setList(newList);
    }
  };

  const moveTaskDown = (index: number) => {
    if(index < list.length - 1){
      const newList = [...list];
      [newList[index], newList[index + 1]] = [newList[index + 1], newList[index]];
      setList(newList);
    }
  }


  return(<div className="list-container">
    <h1>My To Do List:</h1>
    <div>
      <input type="text" value={task} onChange={handleTaskAdd} placeholder="Add a new task!" />
      <button onClick={handleListAdd} className="add-button">Add</button>
    </div>
    <ol>
      {list.map((elem, index) => <li className="list-item" key={index}>
        <span className="text">{elem}</span>
        <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
        <button className="move-button" onClick={() => moveTaskUp(index)}>⬆️</button>
        <button className="move-button" onClick={() => moveTaskDown(index)}>⬇️</button>
      </li>)}
    </ol>

  </div>)
  
}

export default ToDoList
