import React from 'react'
import { useGlobal } from "../ContextApi";
import FilterItem from './FilterItem';
import AllProducts from './AllProducts';


const Home = () => {
  const { item } = useGlobal();
  if (item.length > 0) {
    return (
      <>
       <FilterItem/>
      </>
    )
  }
  return (
    <>
     <AllProducts/>
                </>
              )
}



export default Home