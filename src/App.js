import { useState } from "react";

const cats = [
  {
    name: "Masha",
    Father: "Kmeka",
    Mother: "Felixa",
    color: "black and white",
    description:
      "I am sterilized cat that loves to eat very much and very often. I specially love to be cuddled, and don't mind aggresive petting as well. I love to be with my humans and cats. Like to paw aggressive male cats. I have really strong character. Dogs and puppies, don't mess with me, I have very dangerous origin, just ask around who was Kmeka!",
    image: "./Images/",
    imageID: crypto.randomUUID(),
    id: "001",
  },
  {
    name: "Tigrich",
    Father: "Kmeka",
    Mother: "Felixa",
    color: "black and white",
    description:
      "I am castrated male. Truly big cat! Love to play a lot with cats and humans and to be cuddled. I have amazing friendly character. Sofia is taking the most care of me",
    image: "./Images/",
    imageID: crypto.randomUUID(),
    id: "002",
  },
  {
    name: "Emina",
    Father: "unknown",
    Mother: "unknown",
    color: "black and white",
    description:
      "I am a very young girl. I am one of the most joyfull cats in the hood. I love everyone, cats, dogs, humans... One of my best friends if American Pit Bull Terrier Frida. I am pretty small for my age, and Maya and Zharko call mi Mini. Olja raised me but when I grew up a bit wend to look for my pack, and now I am under Maya and Zharko's guidance.",
    image: "./Images/",
    imageID: crypto.randomUUID(),
    id: "003",
  },
  {
    name: "Reponja",
    Father: "unknown",
    Mother: "unknown",
    color: "Orange, brown and white",
    description:
      "I was very aggresive to other cats until my humans castrated me. After that I am playfull instead. I was not from this hood, but came here and humans and cats somehow adopoted me. I like to be cuddled by humans, and I like to play with them very, very much! I am pretty strong and endlessly beautiful cat. I got my name from Maya for having special tail. ",
    image: "./Images/",
    imageID: crypto.randomUUID(),
    id: "004",
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
            We are group of neighbours and friends that have some nice things in
            common. Primarely, we all live in the third part of Skojevsko
            Naselje that is located in Municipality of Rakovica - Belgrade,
            Serbia. Second, we all have big passion for cats and made some
            budget to make their life in our neighbourhood the best possible for
            any living cat.
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
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? cats.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === cats.length - 1 ? 0 : curr + 1));

  return (
    <div className="CatsList">
      <h1 className="CatsList-Headline">MEET OUR CATS FROM THE HOOD!</h1>
      <ul className="cats">
        {cats.map((cat) =>
          cat === cats[curr] ? (
            <div className="carousel">
              <Cat
                cat={cat}
                curr={curr}
                onCurr={setCurr}
                key={cat.id}
                imageID={cat.imageID}
                onPrev={prev}
                onNext={next}
              />
            </div>
          ) : (
            ""
          )
        )}
      </ul>
      <div className="flex">
        <ListOfCats curr={curr} />
        <AddNewCat />
      </div>
      <h2 className="cat-headline cats-number-h2">
        We now have <span className="cats-number-bigger">{cats.length}</span>{" "}
        cats in the hood and counting...
      </h2>
    </div>
  );
}

function Cat({ cat, currCat, onCurrCat, onPrev, onNext, imageID }) {
  return (
    <li key={cat.id} className="cat-li">
      <img
        key={imageID}
        className="cat-image"
        src={cat.image + cat.name + ".jpg"}
        alt={cat.name}
      />

      <h2 className="cat-headline">😸 My name is {cat.name}</h2>
      {cat.Father && (
        <p className="text-about-cat">
          <span className="no-italic">🦁</span> My father's name is {cat.Father}
          .
        </p>
      )}
      {cat.Mother && (
        <p className="text-about-cat">
          <span className="no-italic">🐯</span> My Mother's name is {cat.Mother}
          .
        </p>
      )}
      <p className="text-about-cat">
        <span className="no-italic">🐈‍⬛</span> The color of my fur is {cat.color}
        .
      </p>
      <h3 className="cat-headline">😺 MORE ABOUT ME</h3>
      <p className="text-about-cat">
        <span className="no-italic">😻</span> {cat.description}
      </p>
      <button className="btn btn--left" onClick={onPrev}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 btn-icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <button className="btn btn--right" onClick={onNext}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 btn-icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </li>
  );
}

function ListOfCats({ curr }) {
  return (
    <div className="ListOfCats">
      {cats.map((cat) => (
        <div>
          {cat === cats[curr] ? (
            <img
              className="gallery-img box-shadow"
              src={cat.image + cat.name + ".jpg"}
              alt={cat.name}
              key={cat.id}
            />
          ) : (
            <img
              className="gallery-img"
              src={cat.image + cat.name + ".jpg"}
              alt={cat.name}
              key={cat.id}
            />
          )}
        </div>
      ))}
    </div>
  );
}

function AddNewCat({ name }) {
  return (
    <div className="AddNewCat">
      <h1 className="add-cat-headline">Add New Cat</h1>
      <form className="addNewCatForm">
        <label className="form-cats-entry">Enter cat's name: </label>
        <input type="text" value={name}></input>
        <label className="form-cats-entry">Enter cat's name: </label>
        <input type="text" value={name}></input>
      </form>
    </div>
  );
}
