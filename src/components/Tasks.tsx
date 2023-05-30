import { Task } from './Task'
import styles from './Tasks.module.css'

export function Tasks() {
  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p>Tarefas criadas</p>
          <span>0</span>          
        </div>
        <div>
          <p className={styles.purple}>Concluídas</p>
          <span>2 de 5</span>          
        </div>
      </header>    
      <div className={styles.taskList}>
        <Task />
        <Task />
      </div>  
    </section>
  )
}


