const cats = [
  {
    name: "Masha",
    Father: "Kmeka",
    Mother: "Felixa",
    color: "black and white",
    description:
      "Loves to eat and to be cuddled. Good with humans and cats, like to paw aggressive male cats. Strong character",
    image: "./Images/",
    id: "001",
  },
  {
    name: "Tigrich",
    Father: "Kmeka",
    Mother: "Felixa",
    color: "black and white",
    description:
      "He is castrated male. Truly big cat! Loves to play a lot with cats and humans and to be cuddled. Amazing friendly character. Sofia is taking the most care of him",
    image: ".Images/",
    id: "002",
  },
];

export default function App() {
  return (
    <div className="App">
      <Header />
      <AboutUs />
      <CatsList />
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
    <div className="Menu">
      <h1 className="navigation">Navigation</h1>
      <ul className="navigation-list">
        <li>Home</li>
        <li>About us</li>
        <li>Our cats</li>
        <li>Add new cat</li>
        <li>Contact us</li>
      </ul>
    </div>
  );
}

function AboutUs() {
  return (
    <article className="AboutUs">
      <h2 className="headline-small">ABOUT US</h2>
      <main className="main">
        <div className="border-radius">
          <p className="main-part-one">
            We are group of neighbours and friends that have have some nice
            things in common. Primarely, we all live in the third part of
            Skojevsko Naselje that is located in Municipality of Rakovica -
            Belgrade, Serbia. Second, we all have big passion for cats and made
            some budget to make their life in our neighbourhood the best
            possible for any living cat.
          </p>
        </div>
        <div className="border-radius">
          <p className="main-part-two">
            The main advantage of living in our neighbourhood is that we live
            near the Košutnjak forest, and have lots of green fields and trees
            as well. With the proper deeds from our group, slowly but steadily
            other our neighbours started having affection towards cats, so we
            were a huge part of that together with our amazing friends 😻! Let
            us introduce them to you!
          </p>
        </div>
      </main>
    </article>
  );
}

function CatsList() {
  return (
    <div className="CatsList">
      <ul>
        {cats.map((cat) => (
          <Cat cat={cat} />
        ))}
      </ul>
    </div>
  );
}

function Cat(cat) {
  return (
    <li className="cat-li">
      {/* <img src={cat.image + cat.name + ".jpg"} alt={cat.name} /> */}
    </li>
  );
}
