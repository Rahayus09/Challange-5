import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Hasil from './pages/Hasil/Hasil';
import Details from './pages/Details/Details';
import { Provider } from 'react-redux';
import store from './redux/store';
import { useReducer } from 'react';

const initialState = { count: 0 };

function AppReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function App() {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <Provider store={store}
      value={{
        state,
        dispatch,
      }}
      >
       <BrowserRouter>
          <Routes>
            <Route path="/" >
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<Hasil />} />
              <Route path="/detail" element={<Details />} />
              <Route
                path="*"  
                element={
                <>
                  <h1>Page Not Found</h1>
                  <h1>404</h1>
                </>                  
                }
              />
            </Route>
          </Routes>
        </BrowserRouter>
    </Provider>
  
  ); 
}
export default App;