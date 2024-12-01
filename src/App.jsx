
import './App.css'
import { Provider } from 'react-redux';
import FormField from './components/formField';
import store from './redux/store';
import StockView from './components/stockView';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Provider store={store}>
      <div className='mx-auto'>
        <FormField />
        <StockView/>
      </div>
    </Provider>
  )
}

export default App