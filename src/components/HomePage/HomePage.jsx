import Check from '@/assets/icons/Check'
import styles from './HomePage.module.css'
import FormContact from './FormContact/FormContact'

const HomePage = () => {
  return (
    <section className={styles.container} id='home'>
      <div className={styles.content}>
        <div className={styles.text}>
          <h1>Comparte tu experiencia en nuestro hotel</h1>
          <div className={styles.tips}>
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
