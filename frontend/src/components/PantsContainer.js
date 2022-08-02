import React, {useState} from 'react'
import {connect} from 'react-redux'
import { buyPants } from '../redux/pants/pantsActions'




function PantsContainer(props) {
    const [number, setNumber] = useState(1)
  return (
    <div>
        <h2># of Pants - {props.numOfPants}</h2>
        <input type='text' value={number} onChange = { e =>
        setNumber(e.target.value)}/>
        <button onClick = { () => props.buyPants(number)}>Buy {number} Pants</button>
    </div>
  )
}
const mapStateToProps= state =>{
    return  {
        numOfPants: state.pants.numOfPants
    }
}
const mapDipatchToProps = dispatchEvent => {
    return {
        buyPants: number => dispatchEvent(buyPants(number))
    }
}


export default connect(
    mapStateToProps,
    mapDipatchToProps
)(PantsContainer)