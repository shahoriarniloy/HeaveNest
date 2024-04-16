import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
    const [estate, setEstate] = useState(null);
    const { id } = useParams();
    

    useEffect(() => {
        const fetchEstateData = async () => {
            try {
                const response = await fetch('/data.json');
                const data = await response.json();
                console.log(data);
                const singleEstate = data.find(estate => estate.id === Number(id));
                console.log(singleEstate);
                


                setEstate(singleEstate);
            } catch (error) {
                console.error('Error fetching estate data:', error);
            }
        };

        fetchEstateData();
    }, [id]);

    if (!estate) {
        return <div><span className="loading loading-bars loading-xs"></span>
        <span className="loading loading-bars loading-sm"></span>
        <span className="loading loading-bars loading-md"></span>
        <span className="loading loading-bars loading-lg"></span>
        </div>;
    }

    return (
        <div className="max-w-[1400px] m-auto">





            <div className="card lg:card-side bg-base-100 shadow-xl p-8 bg-cyan-50">
                <figure className="lg:w-[500px] md:w-[700px] sm:w-1/2 h-auto">
                    <img src={estate.image} alt="picture"/>
                    </figure>
                <div className="card-body grid grid-cols-1 gap-2">
                    <h2 className="card-title">{estate.estate_title}</h2>
                    <p className="mt-0 text-gray-600">{estate.segment_name}</p>
                    <p className="text-xl text-bold text-blue-800">{estate.price}</p>
                    <p className="text-purple-400 text-lg">{estate.location}</p>
                    <p>{estate.area}</p>

                    <p className="text-sm text gray 800">{estate.description}</p>
                    <hr />
                    <div  className="flex">
                    <p className="btn btn-sm h-full btn-success text-white font-bold">Available for {estate.status}</p>
                   


                    </div>


                    
                </div>
            </div>









        </div>
    );
};

export default Details;











