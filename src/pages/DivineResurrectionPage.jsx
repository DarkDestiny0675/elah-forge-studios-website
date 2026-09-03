import { Link } from 'react-router-dom';
import './GamePage.css';

function DivineResurrectionPage() {
  return (
    <main className='game-page'>
      <div className='game-container'>
        <h1>Divine Resurrection</h1>
        <p className='tagline'>You were sent to destroy evil. You were chosen to restore creation.</p>
        <div className='alert'>UNDER CONSTRUCTION</div>
        <p>
          Divine Resurrection follows the restoration of a fallen world after the corruption of creation.
          The Twelve Guardians have fallen, darkness spreads across the land, and the player must begin the journey toward renewal.
        </p>
        <p>
          Current Status: Pre-Production. Story development, guardian concepts, world building, gameplay systems, and progression design are actively being planned.
        </p>
        <Link to='/' className='close-button'>Return to Elah Forge Studios</Link>
      </div>
    </main>
  );
}

export default DivineResurrectionPage;
