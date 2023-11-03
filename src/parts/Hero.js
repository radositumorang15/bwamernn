import React from 'react'
import ImageHero from '../assets/images/ImageHero.png'
import IconCamera from '../assets/images/camera-front-color.png'
import IconMaps from '../assets/images/map-pin-front-color.png'
import IconBag from '../assets/images/travel-front-color.png'
import Button from "../elements/Button";

export default function Hero(props) {
  return (
    <section className="container pt-4">
        <div className="row align-items-center">
            <div className='col-auto pr-5' style={{width:422}}>
            <h1 className="h2 font-weight-bold line-height-1 mb-3">
                Lupakan Kerja  <br/>
                Lanjut Nginep
             </h1>
             <p className="mb-5 font-weight-light text-gray-500 w-75">
              isjxisxisjsixji
             </p>
             <Button className='btn  px-5' hasShadow isPrimary>

             </Button>
            </div>
        </div>
    </section>
  )
}
