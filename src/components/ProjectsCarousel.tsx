// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Project from "./Project";
import projectImages from "../projectImages";

export const ProjectsCarousel = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      scrollbar={{ draggable: true }}
      className="md:max-w-[40vw] max-w-[90vw]"
    >
      {projectImages.map((projectImage, idx) => (
        <SwiperSlide>
          <Project project={projectImage} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProjectsCarousel;
