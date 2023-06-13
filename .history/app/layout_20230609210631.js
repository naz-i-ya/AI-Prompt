import '../styles/globals.css'

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
        </div>

        <main className='app'>
          {children}
        </main>
      </body>
    </html>
  )
}
