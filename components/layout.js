import NavBar from "./navbar";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
      <NavBar />
      <main className="mt-24">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
