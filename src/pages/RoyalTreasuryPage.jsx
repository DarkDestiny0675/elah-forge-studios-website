import { Link } from 'react-router-dom';
import './GamePage.css';

function RoyalTreasuryPage() {
  return (
    <main className='game-page'>
      <div className='game-container'>
        <h1>Royal Treasury</h1>
        <p className='tagline'>Build wealth. Grow kingdoms. Shape alliances.</p>
        <div className='alert'>UNDER CONSTRUCTION</div>
        <p>
          Royal Treasury is a kingdom-building and treasury-management experience centered around leadership, growth, strategic choices, Lady Seraphina, and Prince Leopold.
        </p>
        <p>
          Current Status: In Development. Core concepts exist, but the planned multiplayer foundation and shared-world experience have not yet been implemented.
        </p>
        <Link to='/' className='close-button'>Return to Elah Forge Studios</Link>
      </div>
    </main>
  );
}

export default RoyalTreasuryPage;
