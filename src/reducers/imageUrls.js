const intialstate = [];

const imageUrls = (state = intialstate, action) => {
  switch (action.type) {
    case "RECEIVE_DATA":
      return action.payload;

    default:
      return state;
  }
};

export default imageUrls;
