import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/card"
import data from "./components/data"


export default function App() {

  const cards = data.map(function(item){
    return (

    <Card 
    key={item.id}
    img={item.coverImg}
    imgS={item.starImg}
    Spn={item.stats.rating}
    review={item.stats.reviewcount}
    rcountry={item.location}
    name={item.title}
    price={item.price}
    openSpots={item.openSpots}
/>
)

  })  
  return (
    <div className="App">
       

       <Navbar />
       <Hero />
       <section>
       {cards}
       </section>
    </div>
  );
}

// export default App;
