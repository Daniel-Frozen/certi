import Menu from '../../Componets/Menu/Menu';
import './Home.css';
import home from '../../assets/home.jpg';

const Home = () => {
  return (
    <div>
      <Menu/>
      <div className='image'>
        <img id='imageHome' src={home} alt='Squadrons'/>
      </div>
      <div className='containerHome'>
        <div className='buttonsHome'>
          <a id='a' href='/starships'> Starships</a>
          <a id='b' href='/pilots'> Pilots</a>
        </div>
      </div>      
    </div>
      
  );
};

export default Home;