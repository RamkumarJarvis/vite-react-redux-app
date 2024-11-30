
import './App.css'
import { Provider } from 'react-redux';
import FormField from './components/formField';
import store from './redux/store';
import PizzaTable from './components/pizzaTable';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Provider store={store}>
      <>
        <h1>Pizza List</h1>
        <FormField />
        <PizzaTable/>
      </>
    </Provider>
  )
}

export default App