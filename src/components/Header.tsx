import { PlusCircle } from '@phosphor-icons/react'
import toDoLogo from '../assets/logo-todo.svg'
import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={toDoLogo} alt="" />
      <form className={styles.newTaskForm}>
        <input type="text" placeholder='Adicione uma nova tarefa' />
        <button>
          Criar
          <PlusCircle size={20} />
        </button>
      </form>
    </header>
  )
}
