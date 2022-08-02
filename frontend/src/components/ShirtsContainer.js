import React, {useState} from 'react'
import {connect} from 'react-redux'
import { buyShirts } from '../redux/shirts/shirtActions'



function ShirtsContainer(props) {
  const [number, setNumber] = useState(1)
    return (
    <div>
        <input type='text' value = {number} onChange= {
            e => setNumber(e.target.value)} />
        <h2># of Shirts - {props.numOfShirts}</h2>
        <button  onClick ={() => props.buyShirts(number)}>Buy {number} Shirts</button>
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
        buyShirts: number => dispatchEvent(buyShirts(number))
    }
}


export default connect(
    mapStateToProps,
    mapDipatchToProps
)(ShirtsContainer)