import { useState,useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // Fetch data from the backend API
    fetch('http://localhost:3000/cards')
      .then(response => response.json())
      .then(data => {
        setCards(data.cards); // Assuming the backend returns an array of card data
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []); // Empty dependency array to fetch data only once on component mount


  return (
    <>
    <div className="flex-wrap">
      {/* Render dynamic cards */}
      {cards.map((card, index) => (
          <CardComponent key={index} heading={card.heading} headingDesc={card.headingDesc} subheading={card.subheading} subheadingDesc1={card.subheadingDesc1} subheadingDesc2={card.subheadingDesc2} subheadingDesc3={card.subheadingDesc3} linkedinURL={card.linkedinURL} twitterURL={card.twitterURL}  />
        ))}
    </div>
      {/* <div class="flex-wrap">
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </div> */}
    </>
  )
}

// function CardWrapper({children}) {
//   return <div class="">{children}</div>
// }

function CardComponent({heading,headingDesc,subheading,subheadingDesc1,subheadingDesc2,subheadingDesc3,linkedinURL,twitterURL}) {
  return (
    <div className="flex-container">
      <TextComponent className="heading">{heading}</TextComponent>
      <TextComponent className="caption weight-normal grey">{headingDesc}</TextComponent>
      <TextComponent className="sub-heading weight-bold">{subheading}</TextComponent>
      <TextComponent className="sub-text weight-normal grey">{subheadingDesc1}</TextComponent>
      <TextComponent className="sub-text weight-normal grey">{subheadingDesc2}</TextComponent>
      <TextComponent className="sub-text weight-normal grey">{subheadingDesc3}</TextComponent>
      <div className='button-container'>
        <ButtonComponent className="button blue" url={linkedinURL}>LinkedIn</ButtonComponent>
        <ButtonComponent className="button blue margin-left" url={twitterURL}>Twitter</ButtonComponent>
      </div>
    </div>);
}

function TextComponent({ className, children }) {
  return <div className={className}>
    {children}
  </div>
}

function ButtonComponent({ className, children, url }) {

  if(!url || url.trim() === '')
    return null;

  return(
  <a href={url}> 
    <button className={className}>
      {children}
    </button>
  </a>
  )
}


export default App
