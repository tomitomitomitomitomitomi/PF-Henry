import React from 'react';

export default function Loading ({setLoading}){
 return(
     <div>
         <div>
             <img src='data:image/png;base64,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' alt=''/>
         </div>
         <div>
             {
                 setTimeout(() =>{
                     setLoading(false)
                 }, 5000)
             }
         </div>
     </div>
 )
}