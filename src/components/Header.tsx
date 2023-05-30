import { PlusCircle } from '@phosphor-icons/react'
import { ChangeEvent, FormEvent, useState } from 'react';
import toDoLogo from '../assets/logo-todo.svg'
import styles from './Header.module.css'

interface HeaderProps {
  onAddTask: (taskContent: string) => void;
}

export function Header({onAddTask}: HeaderProps) {
  const [content, setContent] = useState('');

  function handleNewTask(event: FormEvent){
    event.preventDefault();
    onAddTask(content);
    setContent('');
  }
  
  function onChangeContent(event: ChangeEvent<HTMLInputElement>){
    setContent(event.target.value)
  }

  return (
    <header className={styles.header}>
      <img src={toDoLogo} alt="" />
      <form className={styles.newTaskForm} onSubmit={handleNewTask}>
        <input type="text" placeholder='Adicione uma nova tarefa' onChange={onChangeContent} value={content} />
        <button>
          Criar
          <PlusCircle size={20} />
        </button>
      </form>
    </header>
  )
}
