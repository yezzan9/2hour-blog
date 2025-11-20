import Header from "./_components/Layout/Header";
import Footer from "./_components/Layout/Footer";
import "./styles/main.scss";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
