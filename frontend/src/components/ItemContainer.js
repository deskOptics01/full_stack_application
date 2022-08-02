import React from 'react'
import {connect} from 'react-redux'
import { buyPants } from '../redux/pants/pantsActions'
import { buyShirts } from '../redux/shirts/shirtActions'

function ItemContainer(props) {
  return (
    <div>
        <h2>Item - {props.item}</h2>
        <button onClick={props.buyItem}>Buy Items</button>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.pants
    ? state.pants.numOfPants
    : state.shirts.numOfShirts
        return{
            item: itemState
        }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchFunction = ownProps.pants
    ? () => dispatch(buyPants())
    : () => dispatch(buyShirts())
    return {
        buyItem: dispatchFunction
    }
}


export default connect(mapStateToProps, mapDispatchToProps)
    (ItemContainer)