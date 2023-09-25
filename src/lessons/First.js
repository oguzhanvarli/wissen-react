import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Third from './Third'


function First() {

  const [data, setData] = useState({
    limit: 0,
    total: 0,
  })
  const [data2, setData2] = useState()
  const [data3, setData3] = useState()

  useEffect(() => {
    getData()
  }, [])

  const getData = () => {
    axios.get('https://dummyjson.com/products')
      .then(res => setData(res.data))
  }
  

  return (
    <div>
      <h1>Limit - {data.limit}</h1>
      <h1>Total - {data.total}</h1>
      {/* {data.products && data.products.map((product) => (
          <>
            <h4>{product.title}</h4>
            <p>{product.description}</p>
          </>
      ))} */}
      <Third myProp={data.products} />
    </div>
  )
}
export default First


