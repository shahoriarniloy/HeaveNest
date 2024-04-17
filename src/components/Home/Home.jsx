import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import 'animate.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useLoaderData } from 'react-router-dom';
import Estate from '../Estate/Estate';
import { Link } from 'react-router-dom';





const Home = () => {

    const residential = useLoaderData();
   

    return (
        <div className='max-w-[1400px] m-auto'>
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

           <h1 className='text-6xl text-purple-900 text-center  lg:mt-12 mb-6 mt-8'>Our Residential</h1>

           <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'>
            {
               residential.map(aResidential => <Estate 
                key={aResidential.id} 
                residential={aResidential}></Estate>)
            }
           </div>



<h1 className='text-4xl text-purple-800 text-center mt-8'>Rent or Sale?</h1>
<p className='text-gray-600 text-center'>Explore By Your Preference!</p>
           <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 mt-12'>
           <div className="card w-full  col-span-2 h-64 bg-base-100 shadow-xl image-full">
            <figure><img  src="/images/rent.jpg" style={{ width: "700px", height: "auto" }}  alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Rents!</h2>
                <p>Find your perfect rental home on our site. Explore apartments and houses for rent, tailored to you!</p>
                <div className="card-actions justify-end">
                <Link to="/rent"><button className="btn bg-white text-black w-60 animate__animated animate__shakeY">View Rents</button></Link>
                </div>
            </div>
            </div>

            <div className="card  w-full col-span-2  h-64 bg-base-100 shadow-xl image-full">
            <figure><img  src="/images/sale.jpg" style={{ width: "700px", height: "auto" }}  alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Sales!!</h2>
                <p>Discover your dream home for sale on our platform. Explore a variety of properties, from charming cottages to luxurious estates, waiting for you!</p>
                <div className="card-actions justify-end">
                <Link to="/sale"><button className="btn bg-white text-black w-60 animate__animated animate__shakeY">View Sales</button></Link>
                </div>
            </div>
            </div>






           </div>
          











           
        </div>
    );
};

export default Home;