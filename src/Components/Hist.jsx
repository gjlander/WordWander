import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Accordion, AccordionItem } from '@nextui-org/react'
import { useLog } from '../Context/AuthProvider'
import { useNavigate } from 'react-router-dom'

function Hist() {
  const [hist, setHist] = useState([])
  const { isLoggedIn, userData } = useLog()
  const nav = useNavigate()

  useEffect(() => {
   async function fetchHist(username){
      try{
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/user/${username}`)
        if(res.status === 200){
          const histData = await res.data
          setHist(histData.slice(0, 10))
        }else{
          console.log("Error - Status-Code: ", res.status)
        }
      }catch(err){
        console.log("Error: ",err)
      }
      fetchHist(userData.username)
    }
  },[])

  return (
    <>
      { isLoggedIn ? <div className='max-w-7xl mx-auto p-5 flex flex-col justify-center items-center'>
        <Accordion variant="shadow" selectionMode="multiple">
          {hist.map((item, index) => <AccordionItem key= {index} aria-label={item.placehold} title='item.placehold'></AccordionItem>)}
        </Accordion>
      </div> : ""}
    </>
  )
}

export default Hist