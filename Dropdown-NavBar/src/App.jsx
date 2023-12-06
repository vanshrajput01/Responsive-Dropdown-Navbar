import './App.css'
import HoroScope from './Pages/Horoscope'

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Predictions from './Pages/Predictions'
import Blog from './Pages/Blog'
import Calendar from './Pages/Calendar'
import Panchang from './Pages/Panchang'
import Kundli from './Pages/Kundli'
import Navigation from './components/Navigation/Navigation'

function App() {


  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path='/horoscope' element = {<HoroScope />} />
        <Route path='/predictions' element = {<Predictions />} />
        <Route path='/kundli' element = {<Kundli />} />
        <Route path='/panchang' element = {<Panchang />} />
        <Route path='/calendar' element = {<Calendar />} />
        <Route path='/blog' element = {<Blog />} />

      </Routes>
    </Router>




  )
}

export default App
