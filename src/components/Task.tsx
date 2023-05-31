import { CheckCircle, Circle, Trash } from '@phosphor-icons/react'
import { TaskInterface } from '../App'
import styles from './Task.module.css'

interface TaskProps {
  task: TaskInterface;
  onDelete: (taskId: string) => void;
  onDone: (taskId: string) => void;
}

export function Task({task, onDelete, onDone}: TaskProps) {

  return (
    <div className={styles.task}>
      <button className={task.isDone ? styles.checkedTask : styles.uncheckedTask} onClick={() => onDone(task.id)}>
        {task.isDone ? <CheckCircle size={20}  /> : <Circle size={20} />}
      </button>
      <p className={task.isDone ? styles.taskDone : ""}>{task.content}</p>
      <button className={styles.deleteTask} onClick={() => onDelete(task.id)}><Trash size={20}/></button>
    </div>
  )
}

