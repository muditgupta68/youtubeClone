import axios from "axios";

export const API = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyC1J3qmCr07FMrS6fFHOHNtDHr-o1Sab1E",
  },
});

// apis

export const getHomeVideos = () =>
  API.get(
    "/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=IN&HTTP/1.1"
  );
