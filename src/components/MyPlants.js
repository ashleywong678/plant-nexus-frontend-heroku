import React from 'react'
import { connect } from 'react-redux'
import PlantCard from './PlantCard'
import { getPlants } from '../actions/myPlants'

const MyPlants = ({ myPlants, userName}) => {

  const plantCards = myPlants.length > 0 ? 
  myPlants.map(plant => <PlantCard plant={plant} key={plant.id} />) : <h4>Your garden is empty! Add a plant!</h4>

  return (
    <div className="center">
      <h1>Welcome {userName}</h1>
      <h2>Checkout what's in your garden:</h2>
      <br/>
      <div className="grid center">
        {plantCards}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  const userName = state.currentUser ? state.currentUser.attributes.name : ""
  return {
    myPlants: state.myPlants,
    userName: userName
  }
}

export default connect(mapStateToProps, { getPlants })(MyPlants)