import "./globals.css";
import Header from "../components/header.js";
import Footer from "../components/footer.js";
import style from "../components/layout.module.css";

export const metadata = {
  title: 'Tropa dos Porco',
  icons : {
    icon: '/images/icon.jpg',
  }
}


export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={style.body}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
