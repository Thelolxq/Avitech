import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const Peso = () => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [peso, setPeso] = useState('');
  const [pollos, setPollos] = useState('');
  const refFormulario = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (refFormulario.current && !refFormulario.current.contains(event.target)) {
        setMostrarFormulario(false); // Cerrar formulario si se hizo clic fuera de él
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleFormulario = () => {
    setMostrarFormulario(!mostrarFormulario); // Alternar visibilidad del formulario
  };

  const handleClose = () => {
    setMostrarFormulario(false); // Cerrar formulario al hacer clic en el botón "X"
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Obtener el token de localStorage
    const token = localStorage.getItem('token');

    // Preparar el objeto de datos para enviar a la API
    const nuevosPesos = {
      peso: parseFloat(peso),
      pollosPesados: parseInt(pollos),
    };

    try {
      // Realizar la solicitud POST a la API utilizando Axios
      const response = await axios.post('https://avitech-api.myftp.org/api/pesos', nuevosPesos, {
        headers: {
          'Token': `${token}`,
          'apikey': 'integrador'
        },
      });

      // Limpiar campos y ocultar formulario después de agregar
      setPeso('');
      setPollos('');
      setMostrarFormulario(false);

      // Opcional: manejar la respuesta de la API
      console.log('Peso agregado:', response.data);
    } catch (error) {
      console.error('Error:', error.response.data.message);
      // Manejar errores como desees
    }
  };

  return (
    <div className='shadowP flex flex-col justify-end w-1/3 h-3/4 rounded-xl'>
      <button
        className={`bg-black text-white  w-full py-2 duration-200 rounded-t-xl ${mostrarFormulario ? 'h-full' : 'h-12'}`}
        onClick={toggleFormulario}
      >
        Agregar peso
      </button>

      {mostrarFormulario && (
        <div ref={refFormulario} className='bg-white border absolute w-1/ border-gray-300 p-4 rounded-b-xl mt-1'>
          <div className="flex justify-between mb-2">
            <h2 className='text-lg font-bold'>Agregar Peso</h2>
            <button
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
              onClick={handleClose}
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className='mb-4'>
              <label htmlFor='nombre' className='block text-sm font-medium text-gray-700'>
                Peso
              </label>
              <input
                type='number'
                id='nombre'
                className='mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 sm:text-sm'
                value={peso}
                onChange={(e) => setPeso(e.target.value)}
                required
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='precio' className='block text-sm font-medium text-gray-700'>
                Pollos Pesado
              </label>
              <input
                type='number'
                id='precio'
                className='mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 sm:text-sm'
                value={pollos}
                onChange={(e) => setPollos(e.target.value)}
                required
              />
            </div>
            <button
              type='submit'
              className='bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600'
            >
              Agregar Peso
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Peso;
