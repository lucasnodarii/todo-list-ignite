import { Trash } from '@phosphor-icons/react'
import styles from './Task.module.css'
import { TaskInterface } from '../App'

interface TaskProps {
  task: TaskInterface;
  onDelete: (taskId:string) => void;
}

export function Task({task, onDelete}: TaskProps) {
  return (
    <div className={styles.task}>
      <button className={styles.checkContainer}>
        <div/>
      </button>
      <p>{task.content}</p>
      <button className={styles.deleteTask} onClick={() => onDelete(task.id)}><Trash size={20}/></button>
    </div>
  )
}
