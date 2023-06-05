import logo from './logo.svg';
import './App.css';
import { Create, Lister } from './Create';
import { Add } from './Add';
import { Routes ,Route} from 'react-router-dom';

function App(){
  return(
    <div>
      <h1>dashbord</h1>
      
   <Lister/>

    </div>
  )
}




export default App;
