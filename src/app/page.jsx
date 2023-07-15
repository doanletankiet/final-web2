import Image from "next/image";
import "./style.scss";
import Navbar from "@/components/Navbar/Navbar";
import FooterHome from "@/components/Footer/Footer";
import CarouselList from "@/components/Corusel/Carusel";
import ProductPort from "@/components/ProductPortfolio/ProductPortfolio";

export default function Home() {
  return (
    <main className="main__container">
      <Navbar />
      <div className="content__home">
        <CarouselList />
        <div className="product__home">
          <ProductPort />
        </div>
      </div>
      <FooterHome />
    </main>
  );
}
