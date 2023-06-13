import '@styles/globals.css'
import Nav from '@components/Nav'
import Provider from '@components/Provider'

export const metadata = {
  title: 'AI Prompt',
  description: 'Discover & Share AI Prompt',
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
        <div className='main'>
          <div className='gradient'/>
        

        <main className='app'>
          <Nav />
          {children}
        </main>
        </div>
      </body>
    </html>
  )
}
