import Footer from "../components/Footer";
import Header from "../components/Header";
import Routers from "../Routers/Routers";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routers />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
