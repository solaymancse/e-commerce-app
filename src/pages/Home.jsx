import React from 'react'
import { Link } from 'react-router-dom'
import { categoriesList } from '../data'
import { Advertisement } from '../components/Advertisement'
import { Services } from '../components/Services'
import { Categories } from '../components/Categories'
import { SponserMarquee } from '../components/SponserMarquee'
import { Blog } from '../components/Blog'
import { FeatureCollection } from '../components/FeatureCollection'
import { SpecialProduct } from '../components/SpecialProduct'
import { FamousProducts } from '../components/FamousProducts'
import { Meta } from '../components/Meta'

const Home = () => {
  return (
    <>
    <Meta  title="FaDeli - Ecommerce"/>

      <div className="home-wrapper-1">
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
        <Advertisement />  
        <Services />
        <Categories/>
       <FeatureCollection/>
       <SpecialProduct/>
       <FamousProducts/>
       <Blog/>
       <SponserMarquee/>
      </div>


    </>
  )
}

export default Home