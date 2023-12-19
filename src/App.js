import { Route, Routes } from 'react-router-dom';
import Authentication from './components/Authentication/Authentication';
import Burger from './components/Burger';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Burger/>}  />
      <Route path='/auth' element={<Authentication />} />
    </Routes>
  );
}

export default App;
