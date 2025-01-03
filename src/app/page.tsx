
import Hero from "./components/Hero";
import NewArrival from "./components/NewArrival";
import TopSelling from "./components/TopSelling";
import DressStyle from "./components/DressStyle";
import Reviews from "./components/Reviews";

export default function Home() {
  return (
    <div>
      <Hero />
      <NewArrival />
      <TopSelling />
      <DressStyle />
      <Reviews />
    </div>
  );
}
