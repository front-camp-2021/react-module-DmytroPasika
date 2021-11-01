import "./Main.scss"
import { 
  Filter,
  CardContainer
 } from "../index.js";
import {
  useEffect
 } from "react";
import {
  useDispatch
} from "react-redux";
import { 
  getDataFromApi
 } from "../../store/helpersFn/getData.js";


function Main() {
const dispatch = useDispatch()

useEffect(() => {
    dispatch(getDataFromApi())
}, [dispatch])

    return <div className='main'>
    <Filter />
    <CardContainer />
    </div>
  }

export default Main;