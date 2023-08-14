import React from 'react'
import redStar from '../../assets/red_star.png'
import greyStar from '../../assets/grey_star.png'

export default function Rating({rating}) {
    const starRating = []
    let starEmpty = true

    for(let i=0; i<5; i++){
        if(i === parseInt(rating)){
            starEmpty = false
        }
        if(starEmpty === true){
            starRating.push(<img key={i} src={redStar} alt='redStar'/>)
        } else {
            starRating.push(<img key={i} src={greyStar} alt='greyStar'/>)
        }
    }
  return (
    <div>{starRating}</div>
  )
}
