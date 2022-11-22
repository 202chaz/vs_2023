import { Route, Routes } from 'react-router-dom';

import { HomePage, LoginPage } from './pages';

const Router = () => {
  return(
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  )
};

export default Router;