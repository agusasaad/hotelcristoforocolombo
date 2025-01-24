import NavBar from '@/components/NavBar/NavBar'
import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

export const metadata = {
  title: 'Hotel Cristoforo Colombo',
  description:
    'Bienvenidos a nuestro hotel, un lugar donde la comodidad y el servicio excepcional se encuentran. Disfruta de una experiencia única en un ambiente acogedor y moderno, diseñado para hacer que tu estadía sea inolvidable. Ya sea que estés aquí por negocios o descanso, nuestro equipo está comprometido a brindarte todo lo que necesitas para que te sientas como en casa. ¡Esperamos verte pronto!',
}

export default function RootLayout({ children }) {
  return (
    <html lang='es'>
      <body className={` ${poppins.className}`}>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
