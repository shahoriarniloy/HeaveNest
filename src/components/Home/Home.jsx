import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Home = () => {
    

    return (
        <div>
           <Swiper  spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper">
            <SwiperSlide>
                <div className="flex lg:flex-row flex-col  justify-center items-center max-w-[1400px] h-[554px] bg-neutral-100 rounded-3xl lg:p-20 mt-12 m-auto mb-16 lg:text-left text-center " style={{backgroundImage: "url('/images/banner.jpg')"}}>
                    <div className="lg:ml-20">
                        <h1 className=" text-white text-[56px] font-bold text-center">Your heavenly gateway to finding the perfect home.</h1>
                    </div>
                </div>

            </SwiperSlide>

            <SwiperSlide>
                <div className="flex lg:flex-row flex-col  justify-center items-center max-w-[1400px] h-[554px] bg-neutral-100 rounded-3xl lg:p-20 mt-12 m-auto mb-16 lg:text-left text-center " style={{backgroundImage: "url('/images/banner3.jpg')"}}>
                    <div className="lg:ml-20">
                        <h1 className=" text-white text-lg font-bold text-center bg-purple-900 rounded-lg p-12 sm:p-4 w-full">Where aspirations meet addresses, guiding you to heavenly homes amidst earthly landscapes. Discover the divine in every dwelling.</h1>
                    </div>
                </div>
                
            </SwiperSlide>

            <SwiperSlide>
                <div className="flex lg:flex-row flex-col justify-center items-center max-w-[1400px] h-[554px] bg-neutral-100 rounded-3xl lg:p-20 mt-12 m-auto mb-16 lg:text-left text-center  " style={{backgroundImage: "url('/images/banner2.webp')"}}>
                    <div className="lg:ml-20">
                        <h1 className=" text-white text-lg bg-orange-700 lg:p-12 md:p-12  sm:p-8 font-bold text-center rounded-lg  w-full ">Embark on a journey to discover heavenly abodes tailored to your desires.
Unlock the door to divine living with HeavensNest, where every home is a sanctuary of serenity</h1>
                    </div>
                </div>
                
            </SwiperSlide>
              
               
               
            
           </Swiper>
        </div>
    );
};

export default Home;