import { BrowserRouter } from 'react-router-dom'

import Header from './containers/Header'

import './App.css'
import Pages from './routes'

function App() {

  return (
    <div className='wrapper'>
      <Header />
      <BrowserRouter>
        <Pages />
      </BrowserRouter>
    </div>
  )
}

export default App
