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
    <body className={style.body}>
      <Header className={style.header}></Header>
      <main className={style.main}>{children}</main>
      <Footer className={style.footer}></Footer> 
    </body>
  );
}
