import React from 'react'
function Itens({data,hora,chuva}){
    return<>
       <div className='itens'>
          <div>{data} - {hora}h</div>
          <div>{chuva}</div>
       </div>
    </>
}
export default Itens