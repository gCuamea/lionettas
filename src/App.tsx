import './App.css'
import menu from '/assets/menu.png'
import phone from '/assets/phone.png'

function App() {
  return (
    <>
      <img className='menu' src={menu} alt="Menu Restaurante" />
      <a href='tel:+523324835530'>
       <img className='phone' src={phone} alt="Llamar" />
      </a>
    </>
  )
}

export default App
