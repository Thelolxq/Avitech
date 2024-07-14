import React, { useState } from 'react';
import axios from 'axios';
import '../../App.css';
import ImgBanner from '../../assets/InicioSesionBanner.png';
import { useNavigate } from 'react-router-dom';

const IniciarSesion = () => {
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setCorreo(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setContraseña(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = 'https://apitaintegrador.sytes.net:8443/api/login';
    const apiKey = 'integrador';

    try {
      const response = await axios.post(url, {
        correo,
        contraseña
      }, {
        headers: {
          'apikey': apiKey,
        }
      });

      // Guarda el token en el local storage
      const token = response.data.token; // Asegúrate de que 'token' sea el nombre correcto de la propiedad en la respuesta
      localStorage.setItem('token', token);

      // Navega al dashboard
      navigate('/dashboard');

      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  };

  return (
    <div className="h-screen w-full flex">
      <div className="w-1/2 h-full flex justify-center items-center">
        <div className="w-3/4 max-w-md p-8 rounded-lg">
          <h2 className="text-2xl text-center font-semibold mb-4">Iniciar Sesión</h2>
          <h3 className="text-sm text-center textParrafColor mb-6">Ingrese tu email para iniciar sesión</h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="email"
              value={correo}
              onChange={handleEmailChange}
              placeholder="Email"
              className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="password"
              value={contraseña}
              onChange={handlePasswordChange}
              placeholder="Contraseña"
              className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="p-2 bg-black text-white rounded focus:outline-none"
            >
              Iniciar sesión con correo
            </button>
          </form>
          {error && <p className="text-red-500 font-bold mt-4">{error}</p>}
          {data && <p className="text-green-500 font-bold mt-4">Inicio de sesión exitoso!</p>}
        </div>
      </div>
      <div className="w-1/2 h-full"><img className='w-full h-full object-cover object-center' src={ImgBanner} alt="Banner de inicio de sesión" /></div>
    </div>
  );
};

export default IniciarSesion;
