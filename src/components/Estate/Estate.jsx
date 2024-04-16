
const Estate = ({residential}) => {
    console.log(residential);
    const {estate_title, image}= residential;
    return (
        <div className="max-w-[1400px] m-auto">
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10 w-120 h-120">
                    <img  src={image} alt="Shoes" className="rounded-xl  w-120 h-120" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{estate_title}   </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Estate;