import { Trash } from '@phosphor-icons/react'
import styles from './Task.module.css'
import { TaskInterface } from '../App'

interface TaskProps {
  task: TaskInterface;
}

export function Task({task}: TaskProps) {
  return (
    <div className={styles.task}>
      <button className={styles.checkContainer}>
        <div/>
      </button>
      <p>{task.content}</p>
      <button className={styles.deleteTask}><Trash size={20}/></button>
    </div>
  )
}
