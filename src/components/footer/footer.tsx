import styles from './foote.module.scss'

export const Footer = () => {
  return (
    <footer className={styles.footer_outer}>
      <div className={styles.footer_inner}>
        <p>© by Ivan Kotov, 2023</p>
      </div>
    </footer>
  )
}
