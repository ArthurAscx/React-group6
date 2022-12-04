import PropTypes from "prop-types";

function Tile(props) {
  return (
    <div className="col-md-4 mb-4" key={props.key}>
      <div className={`card border-left-${props.color} shadow h-100 py-2`}>
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div
                className={`text-xs font-weight-bold text-${props.color} text-uppercase mb-1`}
              >
                {props.title}
              </div>
              <div className="h5 mb-0 font-weight-bold text-gray-800">
                {props.quantity}
              </div>
            </div>
            <div className="col-auto">
              <i className={`fas ${props.icon} fa-2x text-gray-300`}></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Tile.propTypes = {
  key: PropTypes.number,
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  quantity: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  icon: PropTypes.string.isRequired,
};

Tile.defaultProps = {
  key: 0,
  title: "Sin titulo",
  color: "purple",
  quantity: 0,
  icon: "fa-user",
};

export default Tile;
