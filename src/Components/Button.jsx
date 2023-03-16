import React from 'react'
import { useGlobal } from '../ContextApi'

const Button = () => {
       const {catVal, filterBtn} = useGlobal();
  return (
    <>
    <div className='container'>
<div className='row'>
  {
    catVal.map((elmCur) =>{
      return(
<button className='btn btn-light w-25 m-2' onClick={() => filterBtn(elmCur)} >{elmCur}</button>
     )
    })
    }
</div>
       </div>
    </>
  )
}

export default Button