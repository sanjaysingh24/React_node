import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Globaldataprovider from './component/Context/AppContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

<Globaldataprovider>
<App />
</Globaldataprovider>

  </React.StrictMode>,
)
