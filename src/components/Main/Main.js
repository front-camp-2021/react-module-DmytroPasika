import "./Main.scss"
import { 
  Filter,
  CardContainer
 } from "../index.js";



function Main(props) {
    return <div className='main'>
    <Filter />
    <CardContainer />
    </div>
  }

export default Main;