import Carousel from "@/components/templates/Home/slider";
import About from "@/components/templates/Home/about";
import Service from "@/components/templates/Home/service";
import Offer from "@/components/templates/Home/offer";
import Menu from "@/components/templates/Home/menu";
import Reservation from "@/components/templates/Home/reservation";
import Testimonial from "@/components/templates/Home/testimonial";

export default function Home() {
  return (
    <div>
      <Carousel />
      <About />
      <Service />
      <Offer />
      <Menu />
      <Reservation />
      <Testimonial />
    </div>
  );
}
