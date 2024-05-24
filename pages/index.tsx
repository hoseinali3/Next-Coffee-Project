
import Carousel from "@/components/templates/carousel/carousel";
import About from "@/components/templates/about/about";
import Service from "@/components/templates/service/service";
import Offer from "@/components/templates/offer/offer";
import Menu from "@/components/templates/menu/menu";
import Reservation from "@/components/templates/reservation/reservation";
import Testimonial from "@/components/templates/testimonial/testimonial";

export default function Home() {
  return (
    <div>
   <Carousel/>
   <About/>
   <Service/>
   <Offer/>
   <Menu/>
   <Reservation/>
   <Testimonial/>
    </div>
  );
}
