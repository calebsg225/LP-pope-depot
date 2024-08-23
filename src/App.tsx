import thePopeDepotLogo from './assets/Pope-Depot-Logo.jpg';
import CallToAction from './components/CallToAction';

function App() {

  return (
    <>
      <header>
        <img src={thePopeDepotLogo} alt="the_pope-depot-logo" />
        <CallToAction text='Shop Today'/>
      </header>
      <main>
      </main>
      <footer></footer>
    </>
  )
}

export default App
