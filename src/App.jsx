
import './App.css'
import { Provider } from 'react-redux';
import FormField from './components/formField';
import store from './redux/store';
import StockTable from './components/stockTable';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Provider store={store}>
      <div className='mx-auto'>
        <FormField />
        <StockTable/>
      </div>
    </Provider>
  )
}

export default App