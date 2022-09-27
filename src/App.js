import { useEffect, useState } from 'react';
import axios from 'axios';
const App=()=>{
  useEffect(
    function()
    {
      async function getData()
      {
        var res=await axios.get('http://restapittt.herokuapp.com/products/');
        console.log(res.data);
      }
      getData();
    }
  );
  return(
    <>
      <h1>App component is running...</h1>
    </>
  )
}
export default App;


// import { useEffect, useState } from 'react';
// const App=()=> {
//   let [n1,updaten1]=useState(0);
//   let [n2,updaten2]=useState(0);
//   useEffect(
//     function()
//     {
//       alert("useeffect running.....");
//     },[n1]
//   );
//   const show=(e)=>{
//     if(e.target.name==="n1")
//     {
//       updaten1(n1++);
//     }
//     else
//     {
//       updaten2(n2++);
//     }
//   }
//   return(
//     <>
//     <h1>{n1}</h1>
//     <h1>{n2}</h1>
//     <button name='n1' onClick={show}>click me first</button>
//     <button name='n2' onClick={show}>click me second</button>
//     </>
//   )
// }
// export default App;
