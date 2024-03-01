import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <div className="col-md-6">
      <div className="card mb-3">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="card-title">{project.name}</h5>

            <Link className="btn btn-light" to={`/projects/${project.id}`}>
              View
            </Link>
          </div>
          <p className="small">
            Status: <strong>{project.status}</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    // Add other properties as needed
  }).isRequired,
};
