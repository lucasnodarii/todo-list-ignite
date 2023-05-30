import { Task } from './Task'
import { TaskInterface } from '../App'
import styles from './Tasks.module.css'

interface TasksProps {
  tasks: TaskInterface[];
  onDelete: (taskId: string) => void;
  onDone: (taskId: string) => void;
}

export function Tasks({tasks, onDelete, onDone}: TasksProps) {
  const tasksLength = tasks.length;
  const completedTasks = tasks.filter(task => task.isDone).length;

  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p>Tarefas criadas</p>
          <span>{tasksLength}</span>          
        </div>
        <div>
          <p className={styles.purple}>Concluídas</p>
          <span>{completedTasks} de {tasksLength}</span>          
        </div>
      </header>    
      <div className={styles.taskList}>
        {tasks.map(task => <Task key={task.id} task={task} onDelete={onDelete} onDone={onDone}/>)}
      </div>  
    </section>
  )
}


