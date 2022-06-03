import './main.css'
import React from 'react'
import header from '../header'

export default props =>
 <React.Fragment>
     <header {...props} />
      {/* sexta-feira,27/05/2022 as 21:38:00 h+|- */}
     <main className="content container-fluid"  >
         <div className="p-3 mt-3">
            {props.children}
         </div>
     </main>
 </React.Fragment>