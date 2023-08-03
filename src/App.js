export default function App() {
  return (
    <div className="App">
      <Header />
      <AboutUs />
    </div>
  );
}

function Header() {
  return (
    <header className="App-header">
      <Logo />
      <div className="headline">
        <h1>CATS FROM THE HOOD</h1>
        <p>Get your lucky 💫 cat! 🐈‍⬛🐈</p>
      </div>
      <Menu />
    </header>
  );
}

function Logo() {
  return (
    <img
      className="logo"
      src=".\Images\Cats_LOGO.jpg"
      alt="cats from the hood logo"
    />
  );
}

function Menu() {
  return (
    <div>
      <h3>Navigation</h3>
    </div>
  );
}

function AboutUs() {
  return <article className="AboutUs">ABOUT US</article>;
}
