import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import moment from 'moment'

const FlexItem = () => {

  const dateNow = new Date()
  const dateArray = {
    day: dateNow.getDate(),
    month: dateNow.getMonth() + 1,
    year: dateNow.getFullYear()
  }
  
  const [date1, setDate1] = useState(`${dateArray.year}-${dateArray.month}-${dateArray.day}`)
  const [date2, setDate2] = useState(`${dateArray.year}-${dateArray.month}-${dateArray.day}`)

  const InsDate = () => {

    const dates = document.querySelectorAll('input.dates')
    const result = document.querySelector('.circle > h1')
    const firstDate = dates[0].value.split('-')
    const secondDate = dates[1].value.split('-')

    const momentDate1 = moment([firstDate[0], firstDate[1] - 1, firstDate[2]])
    const momentDate2 = moment([secondDate[0], secondDate[1] - 1, secondDate[2]])

    console.log(momentDate1, ' ', momentDate2)

    let diffDates = momentDate1.diff(momentDate2, 'days', false)

    setDate1(dates[0].value)
    setDate2(dates[1].value)

    if(diffDates < 0) {
      diffDates = diffDates * -1
    } else if (isNaN(diffDates)) {
      diffDates = 0
    }

    result.textContent = diffDates <= 1 ? diffDates + ' DIA' : diffDates + ' DIAS'
  }

  const focusOn = (event) => {

    const dt1 = document.getElementById('dt1')
    const dt2 = document.getElementById('dt2')

    if(event.keyCode === 13) {

      if (event.target.id === 'dt1') {
        dt2.focus()
      }else{
        dt1.focus()
      }
    }

  }

  return (
  <>
  <h1>Verifique a diferença de dias entre 2 datas</h1>
  <div className="root">
    <div>
      <label>PRIMEIRA DATA</label>
      <input type="date" id="dt1" className="dates" onKeyDown={focusOn} onChange={InsDate} value={date1}/>
      <br/>
      <label>SEGUNDA DATA</label>
      <input type="date" id="dt2" className="dates" onKeyDown={focusOn} onChange={InsDate} value={date2}/>
    </div>
    <div>
      <div className="circle">
        <h1>Olá</h1>
      </div>
    </div>
  </div>
  <div className="alexsander"><h2>Created by Alexsander</h2></div>
  </>
  )
}

const FlexBox = () => <FlexItem/>

ReactDOM.render(
  <React.StrictMode>
    <FlexBox/>
  </React.StrictMode>,
  document.getElementById('root')
);