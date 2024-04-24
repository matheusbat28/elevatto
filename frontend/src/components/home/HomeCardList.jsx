import React from 'react'
import HomeCard from './HomeCard'
import {exampleData} from "./exempleData"

export default function HomeCardList() {





  return (
    <div className='
    home-card-box 
    '>
        {exampleData.map(item => {
            return <HomeCard key={item.id} {...item} />
        })}
    </div>
  )
}
