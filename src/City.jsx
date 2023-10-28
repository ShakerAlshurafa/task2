import React from 'react'
import gaza from './images/Cards/Gaza/gaza.jpg'
import jenin from './images/Cards/jenin/OIP.jpg'
import tulkarem from './images/Cards/Tulkarem/OIF.jpg'
import nablus from './images/Cards/Nablus/WhMyC.jpg'
import Card from './Card'

export default function City() {
  const citys = [
    {image:gaza,name:'Gaza',victims:5087,injuries:15287},
    {image:jenin,name:'Jenin',victims:4,injuries:'-----'},
    {image:tulkarem,name:'Tulkarem',victims:22,injuries:'-----'},
    {image:nablus,name:'Nablus',victims:14,injuries:'-----'},
    {image:gaza,name:'Gaza',victims:5087,injuries:15287},
    {image:jenin,name:'Jenin',victims:4,injuries:'-----'},
    {image:tulkarem,name:'Tulkarem',victims:22,injuries:'-----'},
    {image:nablus,name:'Nablus',victims:14,injuries:'-----'},
  ];

  return (
    <div className="container">
      <h2 className='text-center text-white mb-5'>Victims and injuries in Palestine (October 7 - October 22)</h2>
      <div className='cards my-5 row row-gap-4 column-gap-1'>
        {citys.map((city)=> <Card key={city.name} {...city} /> )}
      </div>
    </div>
  )
}
