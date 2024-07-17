import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PredicHour = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem('token');

      if (!token) {
        throw new Error('No se encontró un token en localStorage');
      }

      const response = await axios.get('https://practicaspoli.zapto.org/dht/hour', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (response.data && response.data.Error) {
        throw new Error(response.data.Error);
      }

      setData(response.data);
      console.log('Datos recibidos:', response.data);
    } catch (error) {
      setError(error.message);
      console.error('Error al obtener los datos:', error);
    }
  };

  useEffect(() => {
    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const getFirstFourDigits = (number) => {
    if (typeof number === 'number') {
      return Math.abs(number).toString().slice(0, 7);
    }
    return '';
  };

  return (
    <div className='h-fit w-full'>
      {error ? (
        <div className="error-class mt-4 p-2 border border-red-500 rounded bg-red-100 text-red-700">
          <p>{error}</p>
        </div>
      ) : data ? (
        <div className="response-class mt-4 p-2 border rounded">
          <h3>Predicción de temperatura cada 6 horas:</h3>
          <h2>{getFirstFourDigits(data.prediccion_proximas_6_horas)} °C</h2>
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default PredicHour;
