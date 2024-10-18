import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
const App = () => {
  const [view, setView] = useState('register');

  useEffect(() => {
    setView('register');
  }, []);

  const showRegister = () => {
    setView('register');
  };

  const showDataBase = () => {
    setView('dataBase');
  };
  return (

    <div className="App">
<div class="wrapper">
<link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
    <nav class="nav">
    
        <div class="nav-logo">
        <p>MENSAL PW .</p>
        </div>  
    
        <div class="nav-menu">
        <ul>
            <li><a href="#" class="link active">Casa</a></li>
            <li><a href="#" class="link">Sobre Nós</a></li>
            <li><a href="#" class="link">Serviços</a></li>
            <li><a href="#" class="link">Informações</a></li>
        </ul>
        </div>
    
        <div className="nav-button">
          <button className="btn white-btn" onClick={showRegister}>Cadastre-se</button>
          <button className="btn" onClick={showDataBase}>Banco de Dados</button>
        </div>
       </nav>


     <div className="form-box">
        {view === 'register' && 
          <div className="register-container" id="register">
            <div className="top">
              <header>Cadastre-se</header>
            </div>

            <div className="two-forms">
              <div className="input-box">
                <i className="bx bx-user"></i>
                <input type="text" placeholder="Primeiro Nome" className="input-field" />
              </div>
              <div className="input-box">
                <i className="bx bx-user"></i>
                <input type="text" placeholder="Ultimo Nome" className="input-field" />
              </div>
            </div>

            <div className="input-box">
              <input type="text" className="input-field" placeholder="Email" />
              <i className="bx bx-envelope"></i>
            </div>

            <div className="input-box">
              <input type="password" className="input-field" placeholder="Senha" />
              <i className="bx bx-lock-alt"></i>
            </div>

            <div className="input-box">
              <input type="submit" className="submit" value="Registrar" />
            </div>

            <div className="two-col">
              <div className="one">
                <input type="checkbox" id="register-check" />
                <label htmlFor="register-check">Lembre-me</label>
              </div>
            </div>
          </div>
        }

        {view === 'dataBase' && (
          <div className="data-base" id="dataBase">
            <table>
              <caption>Usuários logados</caption>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>E-mail</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Ana</td>
                  <td>ana@gmail.com</td>
                </tr>
                <tr>
                  <td>Bernardo</td>
                  <td>bernardo@gmail.com</td>
                </tr>
                <tr>
                  <td>Clara</td>
                  <td>clara@gmail.com</td>
                </tr>
                <tr>
                  <td>Edinaldo</td>
                  <td>edinaldo@gmail.com</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
   </div>
</div>
</div> 
);
};
export default App;
