import ImageList from "../components/imageList";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    urlList: state.imageUrls
  };
};

export default connect(mapStateToProps)(ImageList);
