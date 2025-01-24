import Image from 'next/image'
import styles from './NavBar.module.css'
import logo from '@/assets/images/Logo_Hotel-DeLJuAsD.png'

const NavBar = () => {
  return (
    <header className={styles.container}>
      <nav className={styles.nav}>
        <Image src={logo} alt='logo' width={200} height={200} />
      </nav>
    </header>
  )
}

export default NavBar
