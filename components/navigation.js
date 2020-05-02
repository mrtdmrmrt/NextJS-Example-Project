import Link from 'next/link'
import style from '../style/nav.module.css'
function Navigation() {
  return (
    <nav>
      <Link href="/">
        <a className={style.link}>Ana Sayfa</a>
      </Link>
      <Link href="/about">
        <a>Hakkimda</a>
      </Link>
      <Link href="/contact" >
        <a style={{color:'pink'}}>Iletisim</a>
      </Link>
    </nav>
  )
}

export default Navigation
