import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Catalog } from './pages/Catalog';

export function App() {
  return (
    <Routes>
      <Route path="/" element={ <Catalog /> } />
    </Routes>
  );
}

// TODO: Make a search bar functionality

// TODO: Create components
// TODO: Configurate React-Query
// TODO: Create Routers and pages (react-router-dom)