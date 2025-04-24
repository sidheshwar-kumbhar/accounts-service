//import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import SpentMoney from './components/SpentMoney';
import NoPage from './components/NoPage';
import EarningExpenses from './components/EarningExpenses';
import BasicRating from './components/charts/BasicRating';
import PrivateRoute from './services/PrivateRouteService';
import { useAuth } from './services/AuthProviderService';

function App() {
  const { user, logout } = useAuth();
  const isAuthenticated = user !== null ? true : false;
  const userName = user !== null ? user.username : '';
  console.log(user);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout isAuthenticated={isAuthenticated} user={userName} logout={logout} />} >
          <Route path="*" element={<NoPage />} />
          <Route path="home" element={<PrivateRoute component={Home} isAuthenticated={isAuthenticated} />} />
          <Route path="spent-money" element={<PrivateRoute component={SpentMoney} isAuthenticated={isAuthenticated} />} />
          <Route path="earning-expenses" element={<PrivateRoute component={EarningExpenses} isAuthenticated={isAuthenticated} />} />
          <Route path="rating" element={<PrivateRoute component={BasicRating} isAuthenticated={isAuthenticated} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
