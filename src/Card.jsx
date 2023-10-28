import React from 'react'
import './City.css'

export default function Card(props) {
  return (
    <>
        <div className="card px-0 pb-2 col-md-3 bg-dark">
            <img src={props.image} className="card-img" alt="Gaza" />
            <div className="card-body mt-2 text-white pb-4">
              <h5 className="card-title text-center fs-4">{props.name}</h5>
              <div className="p-3 d-flex justify-content-between align-items-center">
                <p className="card-text m-0">Victims : {props.victims} </p>
                <p className="card-text">Injuries : {props.injuries} </p>
              </div>
            </div>
          </div> 
  </>
  )
}
