import React from 'react'

function App() {
  let cards=[
    {
    title:"card1",
    description:"This object represents a car. There can be many types and colors of cars, each object then represents a specific car."
},
{
    title:"card2",
    description:"This object represents a car. There can be many types and colors of cars, each object then represents a specific car."
},
{
    title:"card3",
    description:"This object represents a car. There can be many types and colors of cars, each object then represents a specific car."
},
{
    title:"card4",
    description:"This object represents a car. There can be many types and colors of cars, each object then represents a specific car."
},
{
    title:"card5",
    description:"This object represents a car. There can be many types and colors of cars, each object then represents a specific car."
},
{
    title:"card6",
    description:"This object represents a car. There can be many types and colors of cars, each object then represents a specific car."
},
]
  return <>
  
  <div className="container">

{/* <!-- Page Heading --> */}
<h1 className="my-4">Page Heading
  <small>Secondary Text</small>
</h1>

<div className="row">
  {
    cards.map((e,i)=>{
    return<div className="col-lg-4 col-sm-6 mb-4" key={i}>
    <div className="card h-100">
      <a href="#"><img className="card-img-top" src="https://via.placeholder.com/700x400" alt="" /></a>
      <div className="card-body">
        <h4 className="card-title">
          <a href="#">{e.title}</a>
        </h4>
        <p className="card-text">{e.description}</p>
      </div>
    </div>
  </div>
  })
}
</div>
  </div>
  
  
  </>
    
}

export default App