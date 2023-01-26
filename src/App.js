
import Login from './Pages/Login';
import Register from './Pages/Register';
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route exact path='/' element={< Login />}/>
      <Route exact path='/register' element={< Register />}/>
      </Routes>
    </div>
  );
}

export default App;
