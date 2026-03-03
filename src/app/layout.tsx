import './globals.css';
import AppNavbar from '@/components/Navbar';
// Importando o Bootstrap JS para o menu funcionar no mobile
import 'bootstrap/dist/css/bootstrap.min.css';

export const metadata = {
  title: 'Santo BPO - Gestão Financeira',
  description: 'Clareza e previsibilidade com organização e planejamento.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body>
        <AppNavbar />
        {children}
      </body>
    </html>
  );
}