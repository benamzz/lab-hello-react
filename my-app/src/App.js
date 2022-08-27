import './App.css';
import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';
import icon4 from './images/icon4.png';
import logo from './images/logo.png';
import menu from './images/menu.png';


function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <img src={logo} alt="logo" />
          <img id="menu" src={menu} alt="menu" />
        </nav>
        <main><h1>Say hello to ReactJS</h1>
          <p>You will learn how to use the most popular frontend library, and become a super Ninja developer</p>
          <button>Awesome !</button>
        </main>

      </header>
      <footer>
        <div>
          <img src={icon1} alt="icon1" />
          <h2>Declarative</h2>
          <p>React makes it painless to create interactive UIs</p>
        </div>
        <div>
          <img src={icon2} alt="" />
          <h2>Components</h2>
          <p>Build encapsulaed components that manage their state.</p>
        </div>
        <div>
          <img src={icon3} alt="" />
          <h2>Single-Way</h2>
          <p>A set of immutable values are passed to the component's</p>
        </div>
        <div>
          <img src={icon4} alt="" />
          <h2>Jsx</h2>
          <p>Statically-typed, designed to run on modern browsers</p>
        </div>
      </footer>

    </div>
  );
}
export default App;