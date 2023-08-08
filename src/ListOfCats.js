export default function ListOfCats({ curr, allCats }) {
  return (
    <div className="ListOfCats">
      {allCats.map((cat) => (
        <div>
          {cat === allCats[curr] ? (
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
