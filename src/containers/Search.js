import Search from "../components/imageList";
import { connect } from "react-redux";
import getUrls from "../actions/getUrls";

const mapStateToProps = (dispatch) => {
  return {
    getUrls: (word) => {
      dispatch(getUrls(word));
    }
  };
};

export default connect(mapStateToProps)(Search);
