import React from "react";
import {VISIBILITY_COMPLETED, VISIBILITY_INCOMPLETE, VISIBILITY_ALL} from "./redux/actions"

const FilterOptions = (props) => {
	console.log(props.onClick);
	return (
		<div className="row">
			<div className="col-4">
			<button className="btn btn-primary btn-block" onClick={() => props.onClick(VISIBILITY_ALL)} >
				ALL TASKS
			</button>
			</div>
			<div className="col-4">
			<button className=" btn btn-success btn-block" onClick={() => props.onClick(VISIBILITY_COMPLETED)}>
				COMPLETED
			</button>
			</div>
			<div className="col-4">
			<button className=" btn btn-danger btn-block" onClick={() => props.onClick(VISIBILITY_INCOMPLETE)}>
				INCOMPLETE
			</button>
			</div>
		</div>)
}

export default FilterOptions;