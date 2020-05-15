import React from 'react';
import './App.css';
import Routes from './pages/routes';
import { ToastContainer } from 'react-toastify';

const App = () => {
	
	return (
		<div id="apertum-webapp">
      <Routes />
      <ToastContainer/>
		</div>
	);
};

export default App;
