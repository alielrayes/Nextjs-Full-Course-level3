import { Inter } from 'next/font/google'
import '../globals.css'
import AuthProvider from 'app/providers/AuthProvider'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';




const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Home page',
  description: 'description for Home page',
  icons: {
    icon: "./images/bag-shopping-solid.svg"
  }
}



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

      <AuthProvider>
      {children}
      </AuthProvider>
    

      <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />



      </body>
    </html>
  )
}
