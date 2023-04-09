import style from './header.module.scss'
export const Header = () => {
  return (
    <header className={style.header_outer}>
      <div className={style.header_inner}>
        <h1 className={style.title}>Leaflet map</h1>
      </div>
    </header>
  )
}
