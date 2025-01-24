'use client'
import styles from './FormContact.module.css'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import Swal from 'sweetalert2'
import Spinner from '@/components/Spinner/Spinner'

const FormContact = () => {
  const form = useRef(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    gsap.fromTo(
      form.current,
      { opacity: 0, scale: 0.1 },
      { opacity: 1, scale: 1, duration: 1, ease: 'power3' }
    )
  }, [])


  const handleSubmith = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Obtener los datos del formulario
    const formData = Object.fromEntries(new FormData(e.target))

    // Crear el mensaje para el correo
    const message = `
      Nombre: ${formData.nombre}
      Correo: ${formData.email}
      Teléfono: ${formData.telefono}
      Fecha: ${formData.fecha}
      Consulta: ${formData.mensaje}
    `

    // Cuerpo de la solicitud
    const body = {
      from: `"${formData.nombre}" <${formData.email}>`, // Correo del remitente
      to: 'agustinasaad@gmail.com', // Cambiar al correo del destinatario
      subject: 'Nueva consulta desde la web',
      message,
    }

    try {
      // Realizar la solicitud POST
      const response = await fetch('/api/mailer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })

      const result = await response.json()
      if (result.success) {
        Swal.fire({
          icon: 'success',
          title: '¡Comentario enviado!',
          text: 'Hemos recibido tu comentario correctamente.',
          confirmButtonText: 'Aceptar',
        }).then(() => {
          e.target.reset()
        })
      } else {
        console.error('Error al enviar el correo:', result.error)
        Swal.fire({
          icon: 'error',
          title: 'Error al enviar la comentario',
          text: 'Ocurrió un problema al enviar tu comentario. Por favor, intenta nuevamente.',
          confirmButtonText: 'Aceptar',
        }).then(() => {
          e.target.reset()
        })
      }
    } catch (error) {
      console.error('Error en la solicitud:', error)
      Swal.fire({
        icon: 'error',
        title: 'Error inesperado',
        text: 'Ocurrió un error en el sistema. Por favor, intenta más tarde.',
        confirmButtonText: 'Aceptar',
      }).then(() => {
        e.target.reset()
      })
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <form onSubmit={handleSubmith} className={styles.form} ref={form}>
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
        <button type='submit'>{isLoading ? <Spinner /> : 'Enviar'}</button>
        

      </div>
    </form>
  )
}

export default FormContact
