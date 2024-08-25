import thePopeDepotLogo from './assets/Pope-Depot-Logo.jpg';
import popeHeroImage from './assets/Pope-Depot-Hero-Image_crop.png';
import CallToAction from './components/CallToAction';

function App() {

  return (
    <>
      <header>
        <img src={thePopeDepotLogo} alt="the_pope_depot_logo" />
        <CallToAction text='Shop Today'/>
        <div>
          <p>#1 Pope Improvement Retailer</p>
        </div>
      </header>
      <main>
        <section className='action-container'>
          <h1>Attire For <span>Every</span>one</h1>
          <h2>Mitres, Crucifixes, Robes, and more...</h2>
          <CallToAction text='Shop Today'/>
        </section>
        <section className='hero-container'>
          <img src={popeHeroImage} alt="hero_image" />
        </section>
      </main>
      <footer></footer>
    </>
  )
}

export default App
