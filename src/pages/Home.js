import React from 'react'
import {Bar} from "react-chartjs-2"
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';


const Home = () => {
    const [Lists,setlists]=React.useState([
{label:"Sales",count:10},
{label:"Income",count:10},
{label:"Cases",count:20},
{label:"Expenses",count:30},
])

const arrayList=Lists.map(value=>{return value.count})
 const changeData=(value,label)=>event=>{
     let index=Lists.findIndex(value=>value.label===label);
    let changedItems=Lists.map(value=>{return value});
    changedItems[index].count+=value;
    setlists([...changedItems])

    }
    
    return (
     <>
  <div className="home">
      <div className="content">
{Lists.map((value,index)=>{
    return <div className="lists" key={index}>
        <h3>Total {value.label} Today</h3>
        <p>{value.count}</p>
        <MoreVertOutlinedIcon/>
    </div>
})}
      </div>
      <div className="bar">  
      <div className="bars"> 
<Bar data={{
  labels: ['Sales', 'Income', 'Cases', 'Expenses'],
  datasets: [
    {
      label: 'Sales Figure last 7 days',
      data: [...arrayList],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
      ],
      borderWidth: 2,
    },
  ],
}}
 options={{
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
}}/>
 </div>   
      </div>
      <div className="buttons">
          <div className="row">
  <button onClick={changeData(1,"Sales")}>Increase Sales</button>
   <button onClick={changeData(1,"Income")}>Increase Income</button>
    <button onClick={changeData(1,"Cases")}>Increase Cases</button>
     <button onClick={changeData(1,"Expenses")}>Increase Expenses</button>
          </div>
          <div className="row">
  <button onClick={changeData(-1,"Sales")}>Decrease Sales</button>
   <button onClick={changeData(-1,"Income")}>Decrease Income</button>
    <button onClick={changeData(-1,"Cases")}>Decrease Cases</button>
     <button onClick={changeData(-1,"Expenses")}>Decrease Expenses</button>
          </div>
      </div>
  </div>

     </>
    )
}

export default Home
