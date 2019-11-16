import {connect} from "react-redux";
import {changeVisibilityAction} from "./redux/actions"
import FilterOptions from "./FilterOptions"

const mapDispatchToProps = dispatch => ({
	onClick : filter => dispatch(changeVisibilityAction(filter))
})

export default connect(null,mapDispatchToProps)(FilterOptions);