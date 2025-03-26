import './App.css'
import menu1 from './assets/Menu0001.jpg'
import menu2 from './assets/Menu0002.jpg'
import menu3 from './assets/Menu0003.jpg'
import phone from './assets/phone.png'

function App() {
  return (
    <>
      <img className='menu' src={menu1} alt="Menu Restaurante 1" />
      <img className='menu' src={menu2} alt="Menu Restaurante 2" />
      <img className='menu' src={menu3} alt="Menu Restaurante 3" />
      <a href='tel:+523324835530'>
       <img className='phone' src={phone} alt="Llamar" />
      </a>
    </>
  )
}

export default App
