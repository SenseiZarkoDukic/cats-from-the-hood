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
  return (
    <article className="AboutUs">
      <h2>ABOUT US</h2>
      <main className="main">
        <div className="border-radius">
          <p className="main-part-one">
            We are group of neighbours and friends that have have some nice
            things in common. Primarely, we all live in the third part of
            Skojevsko Naselje that is located in Municipality of Rakovica -
            Belgrade, Serbia. Second, we all have big passion for cats and made
            some budget to make their life in out neighbourhood the best
            possible for any living cat.
          </p>
        </div>
        <div className="border-radius">
          <p className="main-part-two">
            The main advantage of living in our neighbourhood is that we live
            near the Košutnjak woods, and have lots of green fields and trees as
            well. With the proper deeds from our group, slowly but steadily
            other our neighbours started having affection towards cats, so we
            were a huge part of that together with our amazing friends !
          </p>
        </div>
      </main>
    </article>
  );
}
