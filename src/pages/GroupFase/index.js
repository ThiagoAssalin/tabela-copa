import React from 'react';
import Tabela from '../../components/Tabela';
import { UserContext } from '../../contexts/selecoes';
import { useContext } from 'react';


export default function GroupFase() {
  const { brasil, qatar, ecuador, senegal, novaZelandia, inglaterra, iran , usa , gales , argentina , 
  arabiaSaudita, mexico, polonia, franca, australia, dinamarca, tunisia, 
espanha, costaRica, alemanha, japao, belgica, canada, marrocos, croacia,
servia, suecia, camaroes, portugal, ghana, uruguai, koreaDoSul } = useContext(UserContext)
  

  var grupoA = [qatar, ecuador, senegal,novaZelandia]
  var grupoB = [inglaterra , iran ,usa , gales]
  var grupoC = [argentina,arabiaSaudita,mexico,polonia]
  var grupoD = [franca,australia,dinamarca,tunisia]
  var grupoE = [espanha,costaRica,alemanha,japao]
  var grupoF = [belgica,canada,marrocos,croacia]
  var grupoG = [brasil,servia,suecia,camaroes]
  var grupoH = [portugal,ghana,uruguai,koreaDoSul]

  

 return (
   <div>
      <Tabela grupo={grupoA}/>
      <Tabela grupo={grupoB}/>
      <Tabela grupo={grupoC}/>
      <Tabela grupo={grupoD}/>
      <Tabela grupo={grupoE}/>
      <Tabela grupo={grupoF}/>
      <Tabela grupo={grupoG}/>
      <Tabela grupo={grupoH}/>
   </div>
 );
}