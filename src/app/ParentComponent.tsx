import React from 'react'
import ChildComponent from './ChildComponent'

const ParentComponent = () => {
    let fullName = "Usman Shireen"
    let fvrtDish = "Biryani"
    let fvrtSport = "Cricket"
  return (
    <div>
      <ChildComponent 
      fullName={fullName} 
      fvrtDish={fvrtDish}
      fvrtSport={fvrtSport}/>
    </div>
  )
}

export default ParentComponent