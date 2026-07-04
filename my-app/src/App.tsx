
import './App.css'
import Counter from './compoments/Counter'
import DrinkList from './compoments/DrinkList'
import Greet from './compoments/Greet'
import InputValueState from './compoments/InputValueState'
import Player from './compoments/Player'

function App() {


const playerobj  = {
  name : "신유빈",
  age : 22
}

const clickHandler = () => {
  alert("버튼이 클릭되었습니다.");
}
  return (
    <>
    <section className='app'>
    {/* <Greet name="타입스크립트"/> */}
    {/* <Player player={playerobj} clickHandler={clickHandler}/> */}
    {/* {<Counter/>} */}
    {/* {<InputValueState/>} */}
    {<DrinkList/>}
    </section>
    </>
  )
}

export default App
