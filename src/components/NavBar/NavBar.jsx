'use client'
import Image from 'next/image'
import styles from './NavBar.module.css'
import logo from '@/assets/images/Logo_Hotel-DeLJuAsD.png'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const NavBar = () => {
  const logo_animation = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      logo_animation.current,
      { opacity: 0, scale: 0.1 },
      { opacity: 1, scale: 1, duration: 1, ease: 'power3' }
    )
  })
  return (
    <header className={styles.container}>
      <nav className={styles.nav}>
        <Image
          src={logo}
          alt='logo'
          width={200}
          height={200}
          ref={logo_animation}
        />
      </nav>
    </header>
  )
}

export default NavBar
