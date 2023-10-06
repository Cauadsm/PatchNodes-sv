import Header from "../components/header.js";
import Footer from "../components/footer.js";
import "../app/globals.css";
import style from "../components/layout.module.css";
export default function Layout({ children }) {
  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/icon.jpg" />
      </head>
      <body className="h-screen">
        <Header className={style.header}></Header>
        <main className={style.main}>{children}</main>
        <Footer className={style.footer}></Footer>
      </body>
    </html>
  );
}
