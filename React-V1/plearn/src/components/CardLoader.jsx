import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import Cards from "./MarketPlace/Cards";

export default React.memo(function CardLoader(props) {
  const data = props.data;
  const category = props.cat;
  console.log(category);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [num, setNum] = useState(3);

  useEffect(() => {
    function handleResize() {
      setViewportWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    if (viewportWidth > 1100) {
      setNum(3);
    }
    if (viewportWidth < 1100) {
      setNum(2);
    }
    if (viewportWidth <= 700) {
      setNum(1);
    }
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [viewportWidth]);
  return (
    <div>
      <Swiper
        slidesPerView={num}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {data.map((card) => (
          <SwiperSlide key={card._id}>
            <Cards data={card} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
});
