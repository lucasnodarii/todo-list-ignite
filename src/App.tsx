import { useState } from 'react'
import { Header } from './components/Header'
import { Tasks } from './components/Tasks'
import {v4 as uuid} from 'uuid'

export interface TaskInterface {
  id: string;
  content: string;
  isDone: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<TaskInterface[]>([
    {
      id: uuid(),
      content: "Teste teste",
      isDone: true
    },
    {
      id: uuid(),
      content: "Teste teste 2",
      isDone: false
    }
  ])

  function addTask (taskContent: string){
    const newTasks = [...tasks, {
      id: uuid(),
      content: taskContent,
      isDone: false
    }]

    setTasks(newTasks);
  }

  function deleteTask(taskId: string){
    const newTasks = tasks.filter(task => task.id !== taskId)
    setTasks(newTasks)

  }

  return (
    <>
      <Header onAddTask={addTask} /> 
      <Tasks
      tasks={tasks} onDelete={deleteTask}/>
    </>
  )
}

