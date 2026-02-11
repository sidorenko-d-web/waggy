import { Button } from "../button/Button";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
//@ts-ignore
import "swiper/css";
//@ts-ignore
import "swiper/css/navigation";
//@ts-ignore
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import styles from "./HeroSection.module.scss";

export function HeroSection() {
  return (
    <section className="hero">
      <div className="container">
        <Swiper
          modules={[Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{
            clickable: true,
            bulletActiveClass: styles.bullet,
          }}
        >
          <SwiperSlide>
            <div className="hero__inner">
              <div className="hero__image">
                <img src="img/Img.png" alt="Dog" />
              </div>

              <div className="hero__content">
                <span className="hero__label">SAVE 10 - 20% OFF</span>
                <h1 className="hero__title">
                  Best Destination <br />
                  For <span>Your Pets</span>
                </h1>
                <Button>SHOP NOW →</Button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hero__inner">
              <div className="hero__image">
                <img src="img/Img.png" alt="Dog" />
              </div>

              <div className="hero__content">
                <span className="hero__label">Второй слайд</span>
                <h1 className="">
                  Ты не поверишь,это реально <br />
                  <span>второй</span> слайд
                </h1>
                <Button>ну правда ведь второй</Button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
