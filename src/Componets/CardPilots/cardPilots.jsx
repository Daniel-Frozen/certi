import './cardPilots.css';

const cardPilots = ( {name='Another character', img} ) => {
	return (
		<div className='cardPilots'>
			<div className='imageCard'>
				<img id='imageCard' src={img} alt={img}></img>
			</div>
			<div className='nameCard'>{name}</div>
		</div>
	);
};

export default cardPilots;