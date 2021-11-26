import './Menu.css';

import { useLocation } from 'react-router-dom';

const Menu = () => {
	const location = useLocation();
	return (
		<div className='containerMenu'>
			<div className='tittleMenu'>Stars Wars catalog</div>
			<div className='linksRight'>
				{location.pathname === '/' ? <a id='linkHomeColor' href='/'>Home</a> : <a id='linkHome' href='/'>Home</a>}
				{location.pathname === '/starships' ?  <a id='linkStarshipsColor' href='/starships'>Starships</a> : <a id='linkStarships' href='/starships'>Starships</a>}
				{location.pathname === '/pilots' ? <a id='linkPilotsColor' href='/pilots'>Pilots</a> : <a id='linkPilots' href='/pilots'>Pilots</a>}				
			</div>				
		</div>
	);
};

export default Menu;