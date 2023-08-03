export default function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

function Header() {
  return (
    <header className="App-header">
      <Logo />
      <h1>CATS FROM THE HOOD</h1>
    </header>
  );
}

function Logo() {
  return <image></image>;
}
