import React from 'react'

function Third({myProp}) {
    console.log(myProp)
  return (
    <ul>
        {myProp && myProp.map((product, key) => (
            <li key={key}>{product.title}</li>
        ))}
    </ul>
  )
}

export default Third