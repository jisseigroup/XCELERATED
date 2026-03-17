import './globals.css';
import Script from 'next/script';
import Header from '../components/Header';
import Footer from '../components/Footer';



export const metadata = {
  title: {
    default: 'XCELERATED',
    template: '%s | XCELERATED',
  },
  description: 'XCELERATED performance training website.',
  icons: {
    icon: '/favicon-new.svg',
    shortcut: '/favicon-new.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Script id="scroll-to-top-on-load" strategy="beforeInteractive">
          {`(function () {
            try {
              if ('scrollRestoration' in window.history) {
                window.history.scrollRestoration = 'manual';
              }
              // Force top on hard load/refresh
              window.addEventListener('load', function () {
                window.scrollTo(0, 0);
              });
            } catch (e) {}
          })();`}
        </Script>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
