import * as api from "../../api";

export const getPopularVideos = () => async (dispatch) => {
  try {
    dispatch({
      type: "HOME_VIDEO_REQUEST",
    });
    console.log("working");
    const response = await api.getHomeVideos();
    // console.log(response);
    dispatch({
      type: "HOME_VIDEO_SUCCESS",
      payload: {
        videos: response.data.items,
        pagination: response.data.nextPageToken,
      },
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: "HOME_VIDEO_FAIL",
      payload: error.message,
    });
  }
};
