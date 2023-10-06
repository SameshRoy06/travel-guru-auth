import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import SajekImage from '../../assets/Sajek.png';
import SreemongolImage from '../../assets/Sreemongol.png';
import SundorbonImage from '../../assets/sundorbon.png';
import RectangleImage from '../../assets/Rectangle 28.png';
import { Link } from 'react-router-dom';

const RightSide = () => {
  return (
    <Swiper
    
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide>
       <Link to={'/sajek'}> <img className='hover:bg-blue-500 ' src={SajekImage} alt="Sajek" /></Link>
        </SwiperSlide>
      <SwiperSlide>
        <Link to={'/sreemongol'}><img src={SreemongolImage} alt="Sreemongol" /></Link>
        </SwiperSlide>
      <SwiperSlide>
        <Link to={'/sundorbon'}><img src={SundorbonImage} alt="Sundorbon" /></Link>
        </SwiperSlide>
    </Swiper>
  );
};

export default RightSide;
