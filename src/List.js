import React, { useEffect, useState } from 'react'

function List({getItems}) {
    const [numbers, setNumbers] = useState([]);

    useEffect(()=>{
        setNumbers(getItems());
        console.log('updating items')
    },[getItems])

  return  numbers.map((num) => <div key={num}>{num}</div>)
    
  
}

export default List