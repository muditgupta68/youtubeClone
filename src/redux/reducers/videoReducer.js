const initial = {
  videoData: null,
  error: null,
  loading: true,
};

const videoReducer = (state = initial, action) => {
  switch (action.type) {
    case "HOME_VIDEO_SUCCESS":
      return { ...state, videoData: action.payload, loading: false };
    case "HOME_VIDEO_REQUEST":
      return { ...state, loading: false };
    case "HOME_VIDEO_FAIL":
      return {
        ...state,
        videoData: null,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default videoReducer;
