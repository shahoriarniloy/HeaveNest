import { useLoaderData } from 'react-router-dom';
import Sale from './Sale';



const SaleCard = () => {

    const residential = useLoaderData();
    console.log('Res:',residential);



    return (

        <div >
            <h1 className='text-3xl text-purple-900 text-center mt-8'>For Sale</h1>
            <p className='text-center mt-4 text-green-500'>Grab the best deals now!</p>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'>
                {
                    residential
                        .filter(aResidential => aResidential.status === 'Sale')
                        .map(aResidential => (
                            <Sale key={aResidential.id} residential={aResidential}></Sale>
                        ))
                }
            </div>



            
        </div>
    );
};

export default SaleCard;