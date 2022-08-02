import React, {useState} from 'react'
import {connect} from 'react-redux'
import { buyPants } from '../redux/pants/pantsActions'




function PantsContainer(props) {
    const [number, setNumber] = useState(1)
  return (
    <div>
        <h2># of Pants - {props.numOfPants}</h2>
        <button onClick = {props.buyPants}>Buy Pants</button>
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
        buyPants: () => dispatchEvent(buyPants())
    }
}


export default connect(
    mapStateToProps,
    mapDipatchToProps
)(PantsContainer)