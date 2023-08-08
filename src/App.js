import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import AboutUs from "./AboutUs";
import CatsList from "./CatsList";

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
    id: "1",
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
    id: "2",
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
    id: "3",
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
    id: "4",
  },
];

export default function App() {
  const [newIdNumber, setNewIdNumber] = useState(4);
  const [allCats, setAllCats] = useState(cats);

  function handleAddNewCat(cat) {
    setAllCats((allCats) => [...allCats, cat]);
  }
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/"></Route>
          <Route path="/AboutUs">
            <AboutUs />
          </Route>
          <Route path="/CatsList">
            <CatsList
              newIdNumber={newIdNumber}
              onNewIdNumber={setNewIdNumber}
              onAddNewCat={handleAddNewCat}
              allCats={allCats}
            />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

function AddNewCat({ newIdNumber, onNewIdNumber, onAddNewCat, allCats }) {
  const [name, setName] = useState("");
  const [Father, setFather] = useState("");
  const [Mother, setMother] = useState("");
  const [color, setColor] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const catImage = "./Images/";

    const imageID = crypto.randomUUID();
    const id = allCats.length + 1;

    if (!name || !Father || !Mother || !color || !description) return;
    const newCat = {
      name,
      Father,
      Mother,
      color,
      description,
      image: `${catImage}`,
      imageID: `${imageID}`,
      id: `${id}`,
    };
    onAddNewCat(newCat);
    console.log(newCat, id);
  }
  console.log(allCats.length);
  return (
    <div className="AddNewCat">
      <h1 className="add-cat-headline">Add New Cat</h1>
      <form className="addNewCatForm" onSubmit={handleSubmit}>
        <label className="form-cats-entry">Enter cat's name: </label>
        <input
          className="form-input-field"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <label className="form-cats-entry">Enter cat's father name: </label>
        <input
          className="form-input-field"
          type="text"
          value={Father}
          onChange={(e) => setFather(e.target.value)}
        ></input>
        <label className="form-cats-entry">Enter cat's mother name: </label>
        <input
          className="form-input-field"
          type="text"
          value={Mother}
          onChange={(e) => setMother(e.target.value)}
        ></input>
        <label className="form-cats-entry">Enter cat's color: </label>
        <input
          className="form-input-field"
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        ></input>
        <label className="form-cats-entry">
          Enter decription of the cat:{" "}
          <span className="min-length">(min. 50 characters)</span>{" "}
        </label>
        <textarea
          minlength="50"
          className="form-input-field form-description"
          type="text"
          cols="40"
          rows="5"
          name="Text1"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button
          className="btn--add-cat box-shadow-lighter"
          on
          onClick={() => handleSubmit}
        >
          Add
        </button>
      </form>
    </div>
  );
}
