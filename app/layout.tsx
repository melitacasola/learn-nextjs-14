import '@/app/ui/global.css'
import { inter } from '@/app/ui/fonts'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}> {children}
        <footer className="bg-blue-500 text-white">hecho con amoL por la people de Vercel</footer>
      </body>
    </html>
  );
}
