import Footer from "../components/Footer";
import Header from "../components/Header";
import Routers from "../Routers/Routers";

const Layout = () => {
  return (
    <div>
      <>
        <Header />
        <main>
          <Routers />
        </main>
        <Footer />
      </>
    </div>
  );
};

export default Layout;
