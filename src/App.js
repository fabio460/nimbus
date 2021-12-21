
import api from './api';
import './App.css';
import Itens from './itens';

function App() {
  const lista = api
  let quant_agua = ''
  return (
    <div className="App">
      <header className="App-header">
         <h1>Previsão de Chuva Horária </h1>
         <div className='bairros'>
           <span>Bairro:</span>
           <select>
              {lista.map(item=>{
                return <option>{item.cidade}/{item.estado}</option>
              })}
           </select>
           <div className='tempo'>
              {lista.map(item=>{
                if(item.chuva <= 0.2){
                  quant_agua='Sem Chuva'
                }else{
                  if(item.chuva > 0.2  && item.chuva <=5 ){
                    quant_agua = 'Chuva Fraca'
                  }else{
                    if(item.chuva <= 25 ){
                      quant_agua = 'Chuva Moderada'
                    }else{
                      quant_agua = 'Chuva Forte'
                    }
                  }
                }
                return <Itens hora={item.hora} data={item.data} chuva={quant_agua}/>
              })}
           </div>
         </div>
      </header>
    </div>
  );
}

export default App;
