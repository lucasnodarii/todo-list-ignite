import styles from './Task.module.css'

export function Task() {
  return (
    <div className={styles.task}>
      <button className={styles.checkContainer}>
        <div/>
      </button>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis tempore nam, asperiores sapiente dolor vitae.</p>
      <button>Apagar</button>
    </div>
  )
}
