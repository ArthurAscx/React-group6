import PropTypes from "prop-types";

function GenreCard(props) {
  return (
    <div className="col-lg-6 mb-4">
      <div className="card bg-dark text-white shadow">
        <div className="card-body">
          {props.genero}
          <br/>
          {props.total}
          </div>
      </div>
    </div>
  );
}

GenreCard.propTypes = {
  genero: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
};

GenreCard.defaultProps = {
  genero: "Sin datos",
  total: 0
};

export default GenreCard;
