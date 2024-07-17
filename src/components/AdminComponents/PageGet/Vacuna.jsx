import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactLoading from 'react-loading';

const Vacuna = () => {
  const [vacunas, setVacunas] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=>{
    const fetchData = async()=>{
      const token = localStorage.getItem('token')
      try{
        const response = await axios.get('https://avitech-api.myftp.org/api/vacunas',{
          headers:{
            'Token': `${token}`,
            'apikey':'l%!43Bki6hh$%3$Zb$orn9Q9Ke832mSL'
          }
        })
        setVacunas(response.data.vacunas)
        console.log(response.data)
        setLoading(false)
      }catch(error){
        setError(error.message);
        setLoading(true);
      }
    }
    fetchData();
  },[])

  if (loading) {
    return <div className='flex justify-center items-center h-full'>
                <ReactLoading type='bars' color='#000' height={50} width={50} />
 
    </div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
 
  return (
    <div className='h-full p-2 w-full'>
      <h2 className='font-semibold'>Vacunas</h2>
      <div className='overflow-y-scroll h-5/6'>
        <table className='min-w-full bg-white'>
          <thead>
            <tr>
              <th className='py-2 px-4 bg-yellow-400 rounded-l-xl text-left'>Nombre</th>
              <th className='py-2 px-4 bg-yellow-400 text-left'>Precio</th>
              <th className='py-2 px-4 bg-yellow-400 rounded-r-xl text-left'>Cantidad</th>
            </tr>
          </thead>
          <tbody>
            {vacunas.map((data)=>(
              <tr key={data.id} className='border-b'>
                <td className='py-2 px-4'>{data.nombre}</td>
                <td className='py-2 px-4'>{data.precio} $</td>
                <td className='py-2 px-4'>{data.cantidad}</td>
              </tr>
              ))}
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Vacuna;
