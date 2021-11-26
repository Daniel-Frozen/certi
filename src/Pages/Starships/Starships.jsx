import axios from 'axios';
import React from 'react';

import './Starships.css';

import Menu from '../../Componets/Menu/Menu';
import Card from '../../Componets/CardStarships/cardStarships';

//===================assets==========================================//
import xWing from '../../assets/xwing.png';
import BlackOne from '../../assets/blackone.png';
import MileniumFalcon from '../../assets/mileniumfalcon.png';
import RazorCrest from '../../assets/razorcrest.png';
import TieFighter from '../../assets/tiefighter.png';
import TieReaper from '../../assets/tiereaper.png';
import TheDevastator from '../../assets/thedevastator.png';
import Lambda from '../../assets/lambda.png';
import TradeFederationBattleship from '../../assets/tradefederationbattleship.png';
import RepublicAttackCruiser from '../../assets/republickattackcruiser.png';
import StarDestroyer from '../../assets/stardestroyer.png';
import NabooRoyalCruiser from '../../assets/nabooroyalcruiser.png';
//====================================================================//

class Starships extends React.Component {
  state = {
    starshipsPage1: [],
    starshipsPage2: [],
    starshipsPage3: [],
    starshipsPage4: [],
  }
  
  componentDidMount() {
    axios.all([
      axios.get('https://swapi.dev/api/starships/?page=1'),
      axios.get('https://swapi.dev/api/starships/?page=2'),
      axios.get('https://swapi.dev/api/starships/?page=3'),
      axios.get('https://swapi.dev/api/starships/?page=4')
      ]).then(axios.spread((starshipsPage1Res, starshipsPage2Res, starshipsPage3Res, starshipsPage4Res) => {
        const starshipsPage1 = starshipsPage1Res.data.results.map((starship) => starship.name);
        const starshipsPage2 = starshipsPage2Res.data.results.map((starship) => starship.name);
        const starshipsPage3 = starshipsPage3Res.data.results.map((starship) => starship.name);
        const starshipsPage4 = starshipsPage4Res.data.results.map((starship) => starship.name);
        this.setState({ starshipsPage1, starshipsPage2, starshipsPage3, starshipsPage4});
   }))
  }

  render() {
    return (
      <div>
        <Menu/>
        <div className='containerStarships'>
          <h1 className='tittleStarships'>Starships</h1>
          <div className='cardsStarships'>
            <Card img={xWing} name={this.state.starshipsPage1[6]}/>
            <Card img={BlackOne} name='Black One'/>
            <Card img={MileniumFalcon} name={this.state.starshipsPage1[4]}/>
            <Card img={RazorCrest} name='Razor Crest'/>
            <Card img={TieFighter} name='TIE fighter'/>
            <Card img={TieReaper} name='TIE/rp Reaper attack lander'/>
            <Card img={TheDevastator} name='The Devastator'/>
            <Card img={Lambda} name='Lambda-class Imperial Shuttle'/>
            <Card img={TradeFederationBattleship} name='Trade Federation Battleship'/>
            <Card img={RepublicAttackCruiser} name={this.state.starshipsPage3[9]} />
            <Card img={StarDestroyer} name={this.state.starshipsPage1[1]}/>
            <Card img={NabooRoyalCruiser} name='Naboo Royal Cruiser'/>
          </div>
        </div>
      </div>
    );
    }
}

export default Starships;