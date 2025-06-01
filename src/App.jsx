import Banner from "./components/Banner/Banner";
import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-[calc(100vh-300px)]">
        <Banner />
      </div>
      <Footer />
    </div>
  );
};

export default App;
