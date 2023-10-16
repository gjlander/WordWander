import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Accordion, AccordionItem } from 'react-bootstrap'

function Hist() {
  const [hist, setHist] = useState([])

  useEffect(() => {
    async function fetchHist(user){
      try{
        const res = await axios.get()
        if(res.status === 200){
          const histData = await res.data
          setHist(histData.slice(0, 10))
        }else{
          console.log("Error - Status-Code: ", res.status)
        }
      }catch(err){
        console.log("Error: ",err)
      }

    }
  },[])

  return (
    <div className='max-w-7xl mx-auto p-5 flex flex-col justify-center items-center'>
      <Accordion variant="shadow" selectionMode="multiple">
        {hist.map((item, index) => <AccordionItem key= {index} aria-label={item.placehold} title='item.placehold'></AccordionItem>)}
      </Accordion>
    </div>
  )
}

export default Hist