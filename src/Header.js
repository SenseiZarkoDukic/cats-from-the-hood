import Logo from "./Logo";
import Menu from "./Menu";

export default function Header() {
  return (
    <header className="App-header">
      <Logo />
      <div className="headline">
        <h1>CATS FROM THE HOOD</h1>
        <img src=".\Images\cat-hello-clipart.jpg" />
        <p>Get your lucky 💫 cat! 🐈‍⬛🐈</p>
      </div>
      {/* <Menu /> */}
    </header>
  );
}
