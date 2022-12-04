import UpTiles from "./Uptiles/UpTiles";

import Genres from "./Genres/Genres"
import LastDisc from "./LastDisc";

function ContentUp() {
  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Lado A Dashboard</h1>
      </div>
      <UpTiles />
      <div className="row">
        <LastDisc />
        <Genres />
      </div>
    </div>
  );
}

export default ContentUp;
