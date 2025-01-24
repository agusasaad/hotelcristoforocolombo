'use client'
import Check from '@/assets/icons/Check'
import styles from './HomePage.module.css'
import FormContact from './FormContact/FormContact'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const HomePage = () => {
  const text = useRef(null)
  const tip = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      [text.current, tip.current],
      { opacity: 0, y: 200, visibility: 'hidden' },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3',
        stagger: 0.1,
        visibility: 'visible',
      }
    )
  }, [])

  return (
    <section className={styles.container} id='home'>
      <div className={styles.content}>
        <div className={styles.text}>
          <h1 ref={text}>Comparte tu experiencia en nuestro hotel</h1>
          <div className={styles.tips} ref={tip}>
            <p>
              <i>
                <Check />
              </i>
              Sé auténtico: Comparte tu experiencia real con nosotros.
            </p>
            <p>
              <i>
                <Check />
              </i>
              Destaca detalles: Habla de lo que más te gustó en el hotel.
            </p>
            <p>
              <i>
                <Check />
              </i>
              Inspira: Ayuda a otros con tu opinión.
            </p>
          </div>
        </div>
        <FormContact />
      </div>
    </section>
  )
}

export default HomePage
