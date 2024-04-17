import { useLoaderData } from 'react-router-dom';
import Rent from './Rent';
import { Helmet } from 'react-helmet';


const RentCard = () => {

    const residential = useLoaderData();
    console.log('Res:',residential);


    return (

        <div >
            <Helmet>
                <title>Rents</title>
            </Helmet>
            <h1 className='text-3xl text-purple-900 text-center mt-8'>For Rent</h1>
            <p className='text-center mt-4 text-green-500'>Grab the best deals now!</p>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'>
                {
                    residential
                        .filter(aResidential => aResidential.status === 'Rent')
                        .map(aResidential => (
                            <Rent key={aResidential.id} residential={aResidential}></Rent>
                        ))
                }
            </div>

            
        </div>
    );
};

export default RentCard;