import React from 'react'
import { Link } from 'react-router-dom'
import { categoriesList } from '../data'
import { Advertisement } from '../components/Advertisement'

const Home = () => {
  return (
    <>
      <div className="home-wrapper-1 h-350px">
        <div className="container-xxl">
          <div className="row">
            <div className="col-2 p-0">
              <div className="shop-categories">
                <div className="categories-list d-flex flex-column gap-10">
                  {categoriesList.map((item, index) => (
                    <Link key={index} >{item.title}</Link>
                  ))}

                </div>
              </div>
            </div>
            <div className="col-10 px-0">
              <div className='banner d-flex '>
                <img className='banner-img w-100' src="images/banner1.jpg" alt="" />
              </div>
            </div>
          </div>
         
        </div>
      </div>
     <div className="advertisement-wrapper py-4">
     <Advertisement/>
     </div>

    </>
  )
}

export default Home