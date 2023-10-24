import React from 'react'
import {useAddTrans} from '../../hooks/useAddTrans'
import { useState } from 'react';
//always start component name in all capps
export default function ExTrack() {
  const [desc , setDesc] = useState("")
  const [ transAm, setTransAm] = useState(0)
  const [transType, setTransType] = useState("")
  const addTrans = useAddTrans();

  const saveTrans = () =>{

    addTrans({description : desc , transactionAmount : transAm , transactionType : transType})
    setDesc("")
    setTransAm(0)
    setTransType("")
  }

  


  return (

    <>
    <div className="container">
      
<h1>
  Net Worth - ₹ terimummy
</h1>
<h2>Total Income - ₹ terimummy</h2>
<h2>Total Expense - ₹ terimummy</h2>

    </div>
    
    <div className="container my-5 bg-dark py-5 rounded border border-info">
<div class="input-group mb-3">
  <span class="input-group-text">₹</span>
  <input type="number"  class="form-control" aria-label="Text input with radio button" value={transAm} onChange={(e)=>{setTransAm(e.target.value)}}/>
</div>


      <div class="input-group my-5">
  <span class="input-group-text">Description</span>
  <textarea class="form-control" aria-label="With textarea" value={desc} onChange={(e)=>{setDesc(e.target.value)}} ></textarea>
</div>

<div class="input-group my-2">
  <div class="input-group-text">
    <input name="transactionType" onClick={()=>{setTransType("income")}} class="form-check-input mt-0" type="radio" value="" aria-label="Radio button for following text input"/>
  </div>
  <input type="textArea" value="Income" class="form-control" aria-label="Text input with radio button"/>
</div>


<div class="input-group">
  <div class="input-group-text">
    <input  checked="true" name="transactionType" onClick={()=>{setTransType("expense")}} class="form-check-input mt-0" type="radio"  aria-label="Radio button for following text input"/>
  </div>

  <input type="textArea" value="Expense" class="form-control" aria-label="Text input with radio button"/>
</div>

<button onClick={saveTrans} type="button" class="btn btn-primary my-5">Add</button>

    </div>
    </>
  )
}
