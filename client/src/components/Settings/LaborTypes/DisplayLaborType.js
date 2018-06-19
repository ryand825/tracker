import React from "react";

const DisplayLaborType = props => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {props.labor.laborTypeName}
      <span>
        <button
          className="btn btn-outline-warning mr-2"
          onClick={() => props.editLaborTypeName(props.labor._id)}
        >
          <i className="fas fa-edit" />
          {/* {" Rename"} */}
        </button>
        <button
          className=" btn btn-outline-danger"
          onClick={() => props.deleteLaborType(props.labor._id)}
        >
          <i className="fas fa-times" />
          {/* {" Delete"} */}
        </button>
      </span>
    </li>
  );
};

export default DisplayLaborType;
