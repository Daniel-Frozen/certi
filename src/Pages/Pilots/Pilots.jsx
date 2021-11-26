import axios from 'axios';
import React from 'react';

import Menu from '../../Componets/Menu/Menu';
import Card from '../../Componets/CardPilots/cardPilots';
import './Pilots.css';

//=========================assets==========================//
import Anakin from '../../assets/anakin.png';
import DarthVader from '../../assets/darthvader.png';
import Chewbacca from '../../assets/chewbacca.png';
import HanSolo from '../../assets/hansolo.png';
import PrincessLeia from '../../assets/princessleia.png';
import C3PO from '../../assets/c3po.png';
import R2D2 from '../../assets/r2d2.png';
import LukeSkywalker from '../../assets/lukeskywalker.png';
import LeiaOrgana from '../../assets/leiaorgana.png';
import BeruLars from '../../assets/berulars.png';
import R5D4 from '../../assets/r5d4.png';
import Biggs from '../../assets/biggs.jpg';
import ObiWan from '../../assets/obiwan.png';
import Tarkin from '../../assets/tarkin.png';
import Greedo from '../../assets/greedo.jpg';
import Wedge from '../../assets/wedge.png';
import Palpatine from '../../assets/palpatine.png';
import Yoda from '../../assets/yoda.png';
//========================================================//

class Pilots extends React.Component {
	state = {
    pilotsPage1: [],
    pilotsPage2: [],
    pilotsPage3: [],
    pilotsPage4: [],
  }
  
  componentDidMount() {
    axios.all([
      axios.get('https://swapi.dev/api/people/?page=1'),
      axios.get('https://swapi.dev/api/people/?page=2'),
      axios.get('https://swapi.dev/api/people/?page=3'),
      axios.get('https://swapi.dev/api/people/?page=4')
      ]).then(axios.spread((pilotsPage1Res, pilotsPage2Res, pilotsPage3Res, pilotsPage4Res) => {
        const pilotsPage1 = pilotsPage1Res.data.results.map((pilot) => pilot.name);
        const pilotsPage2 = pilotsPage2Res.data.results.map((pilot) => pilot.name);
        const pilotsPage3 = pilotsPage3Res.data.results.map((pilot) => pilot.name);
        const pilotsPage4 = pilotsPage4Res.data.results.map((pilot) => pilot.name);
				console.log(pilotsPage1);
				console.log(pilotsPage2);
        this.setState({ pilotsPage1, pilotsPage2, pilotsPage3, pilotsPage4});
   }))
  }

	render() {
		return (
			<div>
				<Menu/>
				<div className='containerPilots'>
					<h1 className='tittlePilots'>Pilots</h1>
					<div className='cardsPilots'>
						<Card img={Anakin} name={this.state.pilotsPage2[0]}/>
						<Card img={DarthVader} name={this.state.pilotsPage1[3]}/>
						<Card img={Chewbacca} name={this.state.pilotsPage2[2]}/>
						<Card img={HanSolo} name={this.state.pilotsPage2[3]}/>
						<Card img={PrincessLeia} name='Princess Leia' />
						<Card img={C3PO} name={this.state.pilotsPage1[1]}/>
						<Card img={R2D2} name={this.state.pilotsPage1[2]}/>
						<Card img={LukeSkywalker} name={this.state.pilotsPage1[0]} />
						<Card img={LeiaOrgana} name={this.state.pilotsPage1[4]}/>
						<Card img={BeruLars} name={this.state.pilotsPage1[6]}/>
						<Card img={R5D4} name={this.state.pilotsPage1[7]}/>
						<Card img={Biggs} name={this.state.pilotsPage1[8]}/>
						<Card img={ObiWan} name={this.state.pilotsPage1[9]}/>
						<Card img={Tarkin} name={this.state.pilotsPage2[1]}/>
						<Card img={Greedo} name={this.state.pilotsPage2[4]}/>
						<Card img={Wedge} name={this.state.pilotsPage2[6]}/>
						<Card img={Palpatine} name={this.state.pilotsPage2[9]}/>
						<Card img={Yoda} name={this.state.pilotsPage2[8]}/>
					</div>
				</div>
			</div>
		);
	}
}

export default Pilots;