import './App.css';
import Photo from './Photo.png';
import React from 'react';
import App from './time';
class Name extends React.Component {
  
  state = {
    
    fullName: "Serigne Cheikh Al-Macktoum",
    bio:"Serigne Cheikh Al-Maktoum est le petit-fils du marabout El Hadji Malick Sy et le fils de Serigne Babacar Sy.Il devient grand khalife à la mort de son frère Serigne Mansour Sy en 2012.Il est rappelé à Dieu le 15 mars 2017 et a été remplacé à la tête de la confrérie par son frère Serigne Abdoul Aziz Sy Al-Amin",
    profession: "Homme d'affaires",
    imgSrc:<img src={Photo} alt="screen" />,
    shows: true
  };
  
  render() {
    const ClickMe = (e) => {
     if(this.state.shows === true) {
       this.setState({shows : false})
     }
     else {
      this.setState({shows : true})
     }
    }
    return (
      <>
      <div> 
      {
        this.state.shows === false ? 
        <div>
        <p>{this.state.fullName}</p>
        <p>{this.state.bio}</p>
        <p>{this.state.profession}</p>
        <p>{this.state.imgSrc}</p>
        </div> : <p></p>
      }
        <button type="button" onClick={e => ClickMe(e)}>Click Me</button>
       <br/>
       <h1></h1>
        
      </div> 
        </>
      );
    };
  }

export default Name;
