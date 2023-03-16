import './globals.css'
import Top from './component/top'
import Cards from './component/Cards'
import Footer from './component/Footer'


export const metadata = {
  title: 'Resume-Taha',
  description: 'created by M.Taha',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        
        {children}
        <Top />
        <Cards />
        <Footer />
        </body>
    </html>
  )
}
