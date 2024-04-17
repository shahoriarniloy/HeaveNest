import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
import { Link } from "react-router-dom";
const Sale = ({residential}) => {
    console.log(residential);
    const {estate_title, image, description, id}= residential;
    return (
        <div className="max-w-[1400px] m-auto " data-aos="zoom-in"
        >
            <div className="card lg:w-96 md:w-96 sm:w-full bg-base-100 shadow-xl">
                <figure className="px-10 pt-10 w-120 h-120">
                    <img  src={image} alt="Shoes" className="rounded-xl  " style={{height: '300px', width: '500px'}} />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{estate_title}   </h2>
                    <p className="text-sm text-gray-700">{description}</p>
                    <div className="card-actions">
                    <Link to={`/estate/${id}`} ><button className="btn bg-purple-700 text-white">View Property</button></Link>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Sale;