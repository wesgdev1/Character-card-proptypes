import "./styles.css";

const CharacterCard = ({ character }) => (
  <article className="characterCard">
    <div className="characterImagen">
      <img
        src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
        alt="Blue Footprint Guy"
      />
    </div>
    <div className="characterContent">
      <div className="section">
        <h2>{character.name}</h2>
        <span className="status">
          <span className={`status__icon status__alive`}></span>
          Alive - Human
        </span>
      </div>
      <div className="section">
        <span className="text-gray">Last known location:</span>
        <a href="https://rickandmortyapi.com/api/location/1">Earth</a>
      </div>
      <div className="section">
        <span className="text-gray">First seen in:</span>
        <a href="https://rickandmortyapi.com/api/location/20">Earth</a>
      </div>
    </div>
  </article>
);

export default CharacterCard;
