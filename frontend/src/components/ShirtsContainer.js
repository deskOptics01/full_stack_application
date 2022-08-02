import React from 'react'
import {connect} from 'react-redux'
import { buyShirts } from '../redux/pants/pantsActions'



function ShirtsContainer(props) {
  return (
    <div>
        <h2># of Shirts - {props.numOfShirts}</h2>
        <button onClick = {props.buyShirts}>Buy Shirts</button>
    </div>
  )
}
const mapStateToProps= state =>{
    return  {
        numOfShirts: state.shirts.numOfShirts
    }
}
const mapDipatchToProps = dispatchEvent => {
    return {
        buyShirts: () => dispatchEvent(buyShirts())
    }
}


export default connect(
    mapStateToProps,
    mapDipatchToProps
)(ShirtsContainer)