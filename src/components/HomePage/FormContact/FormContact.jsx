'use client'
import styles from './FormContact.module.css'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const FormContact = () => {
  const form = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      form.current,
      { opacity: 0, scale: 0.1 },
      { opacity: 1, scale: 1, duration: 1, ease: 'power3' }
    )
  }, [])
  return (
    <form className={styles.form} ref={form}>
      <h2>Tus comentario aquí</h2>
      <div className={styles.container_inputs}>
        <input
          type='text'
          name='nombre'
          id='nombre'
          placeholder='Nombre completo'
          required
        />
        <input
          type='email'
          name='email'
          id='email'
          placeholder='Correo electrónico'
          required
        />
        <input
          type='number'
          name='telefono'
          id='telefono'
          placeholder='Teléfono'
          required
        />
        <label>
          <span>Fecha de reserva</span>
          <input
            type='date'
            name='fecha'
            id='fecha'
            required
            placeholder='Fecha de reserva'
          />
        </label>
        <textarea
          required
          name='mensaje'
          id='mensaje'
          placeholder='Tu reseña aquí...'
        ></textarea>
        <button type='submit'>Enviar</button>
      </div>
    </form>
  )
}

export default FormContact
