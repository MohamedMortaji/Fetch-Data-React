import React from 'react';
import UseFetch from './UseFetch';
import './FetchData.css'
const FecthYoga = () =>{
    const [yoga] = UseFetch('https://api.npoint.io/4459a9a10e43812e1152');
    return(
        <>
        <ul className='list_data_main'>
        {yoga && yoga.map((e)=>(
            <>
            <li className='list_data'>
                <h3>{e.name}</h3>
                <p><strong>Benefits:</strong>{e.benefits}</p>
                <p><strong>time duration:</strong>{e.time_duration}</p>
            </li>
            </>
        ))}
        </ul>
        </>
    );
}
export default FecthYoga;