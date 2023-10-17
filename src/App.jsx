import { useState } from 'react'
import './App.css'
import dataTasks from '../src/data/data-tasks.json'
/* import dataCategories from '../src/data/data-categories.json'
import dataMembers from '../src/data/data-members.json' */
import { Footer, TaskForm, TaskList } from './components'
//import '../src/excercises/class2'

function App() {


  const [tasks, setTasks] = useState(dataTasks);
/*   const [categories] = useState(dataCategories);
  const [members] = useState(dataMembers); */

  
  const addTask = (title, category, member) => {
    if(!title || !category || !member) {
      alert ("Todos os campos são obrigatórios");
      return;
    }

    const newTask = [
      ...tasks,
      {
        id: Math.floor(Math.random() * 10000),
        title,
        category,
        member,
        status: "todo"
      }
    ]

    setTasks(newTask);
  }

  const deleteTask = (id) => {
    const newTasks = [...tasks];
    const filteredTasks = newTasks.filter(task => task.id !== id ? task : null)
    setTasks(filteredTasks);
  }

  const startTask = (id) => {
    const newTasks = [...tasks];
    newTasks.map((task) => 
      task.id === id ? (task.status = 'todo') : task
    );
    setTasks(newTasks);
  }

  const closeTask = (id) => {
    const newTasks = [...tasks];
    newTasks.map((task) => 
      task.id === id ? (task.status = 'done') : task
    );
    setTasks(newTasks);
  }

  return (
    <div>
      <TaskForm addTask={addTask} />
      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        startTask={startTask}
        closeTask={closeTask}
      />
      <Footer />
      
    </div>
  )
}

export default App