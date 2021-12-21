import React from 'react'
function Itens({data,hora,chuva}){
    
    var cor = 'green'
    if(chuva === 'Chuva Fraca'){
        cor = 'blue'
    }
    if(chuva === 'Chuva Moderada'){
        cor = 'yellow'
    }
    if(chuva === 'Chuva Forte'){
        cor = 'red'
    }
    
    return<>
       <div className='itens'>
          <div>{data} - {hora}h</div>
          <div className='chuva' style={{color:cor}}>{chuva}</div>
       </div>
    </>
}
export default Itens