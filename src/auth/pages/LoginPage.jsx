import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [usernameFocused, setUsernameFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const onLogin = (e) => {
    e.preventDefault();

    if (login(username, password)) {
      const lastPath = localStorage.getItem('lastPath') || '/dashboard';
      navigate(lastPath, {
        replace: true
      });
    } else {
      setError('Credenciales incorrectas');
    }
  };

  return (
    <section className='d-flex justify-content-center align-items-center' style={{ minHeight: '100svh', backgroundColor: '#f0f4f9' }}>
      <div className="text-center text-lg-start my-auto">
        <div className="container">
          <div className="row gx-lg-5 align-items-center">
            <div className="col-12 col-lg-6 mb-5 mb-lg-0">
              <h1 className="my-5 display-3 ls-tight" style={{ fontWeight: 500, fontFamily: "roboto" }}>
                ¡Descubre a tus héroes favoritos de<br />
                <span className="text-primary">Marvel y DC Comics!</span>
              </h1>
            </div>

            <div className="col-12 col-lg-6 mb-5 mb-lg-0">
              <div className="card w-100" style={{ borderRadius: "28px" }}>
                <h2 className='fs-3 sm:fs-5 text-center mt-5'>Iniciar sesión</h2>
                <div className="card-body px-3 py-5 px-md-5">
                  <form onSubmit={onLogin}>
                    <div className={`form-outline mb-4 ${usernameFocused || username ? 'focused' : ''}`}>
                      <input
                        type="text"
                        id="username"
                        className="form-control rounded-4"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        onFocus={() => setUsernameFocused(true)}
                        onBlur={() => setUsernameFocused(false)}
                        placeholder=" "
                        required
                      />
                      <label className="form-label" htmlFor="username">Usuario</label>
                    </div>
                    <div className={`form-outline mb-4 ${passwordFocused || password ? 'focused' : ''}`}>
                      <input
                        type="password"
                        id="password"
                        className="form-control rounded-4"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onFocus={() => setPasswordFocused(true)}
                        onBlur={() => setPasswordFocused(false)}
                        placeholder=" "
                        required
                      />
                      <label className="form-label" htmlFor="password">Contraseña</label>
                    </div>
                    {error && <div className="alert alert-danger mt-3">{error}</div>}
                    <button type="submit" className="btn btn-primary btn-block mb-4 rounded-pill px-4 py-2">
                      Ingresar
                    </button>
                    <div className="divider d-flex align-items-center my-4">
                      <p className="text-center fw-bold mx-3 mb-0 text-muted" style={{ fontSize: "12px" }}>C R E D E N C I A L E S</p>
                    </div>
                    <p>Usuario — <span className='text-primary'>user</span></p>
                    <p>Contraseña — <span className='text-primary'>pass</span></p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
