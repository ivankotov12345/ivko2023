import { LeafleatMap } from '../leafleat-map'

import styles from './layout.main.module.scss'

export const LayoutMain = () => {
  return (
    <main>
      <div className={styles.main_inner}>
        <LeafleatMap />
      </div>
    </main>
  )
}
