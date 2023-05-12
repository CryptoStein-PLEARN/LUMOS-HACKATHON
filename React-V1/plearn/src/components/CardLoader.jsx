import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import Cards from "./MarketPlace/Cards";

export default React.memo(function CardLoader(props) {
  const data = props.data;
  console.log(data);

  return (
    <div>
      <Swiper
        slidesPerView={3}
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
