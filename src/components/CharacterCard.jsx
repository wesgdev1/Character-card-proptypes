import "./styles.css";
import PropTypes from "prop-types";

const CharacterCard = ({ character }) => (
  <article className="characterCard">
    <div className="characterImagen">
      <img src={character.image} alt="Blue Footprint Guy" />
    </div>
    <div className="characterContent">
      <div className="section">
        <h2>{character.name}</h2>
        <span className="status">
          <span
            className={
              character.status === "Alive"
                ? `status__icon status__alive`
                : `status__icon status__dead`
            }
          ></span>
          {`${character.status} - ${character.species}`}
        </span>
      </div>
      <div className="section">
        <span className="text-gray">Last known location:</span>
        <a href={character.location.url}>{character.location.name}</a>
      </div>
      <div className="section">
        <span className="text-gray">First seen in:</span>
        <a href={character.origin.url}>{character.origin.name}</a>
      </div>
    </div>
  </article>
);
CharacterCard.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    location: PropTypes.shape({
      url: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,

    origin: PropTypes.shape({
      url: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default CharacterCard;
