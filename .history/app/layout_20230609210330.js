import '../styles/globals.css'

export const metadata = {
  title: 'AI Prompt',
  description: 'Discover & Share AI Prompt',
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
