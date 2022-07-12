import Footer from './Footer';
import Topnav from './Topnav';

export default function Layout({ children }) {
  return (
    <>
      <header>
        <Topnav />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
