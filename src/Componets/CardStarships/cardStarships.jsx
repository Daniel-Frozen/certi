import './cardStarships.css';

const cardStarships = ( {name='Teste', img} ) => {
	return (
		<div className='cardStarships'>
			<div className='imageCard'>
				<img id='imageCard' src={img} alt={img}></img>
			</div>
			<div className='nameCard'>{name}</div>
		</div>
	);
};

export default cardStarships;