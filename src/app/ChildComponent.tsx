import React from 'react'

const Childcomponent = (props: any) => {
    console.log(props.fvrtDish)
  return (
    <div>
        <h1 className='text-5xl'>{props.fullName}</h1> <br />
        <h1 className='text-5xl'>{props.fvrtDish}</h1> <br />
        <h1 className='text-5xl'>{props.fvrtSport}</h1>
    </div>
  )
}

export default Childcomponent
