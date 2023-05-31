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
  const [tasks, setTasks] = useState<TaskInterface[]>([])

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

  function toogleTaskDone (taskId: string){
    const newTasks = tasks.map(task => {
      if(task.id === taskId){
        return {
          ...task, 
          isDone: !task.isDone
        }
      }
      return task
    })
    setTasks(newTasks);
  }

  return (
    <>
      <Header onAddTask={addTask} /> 
      <Tasks
      tasks={tasks} 
      onDelete={deleteTask}
      onDone={toogleTaskDone}/>
    </>
  )
}

