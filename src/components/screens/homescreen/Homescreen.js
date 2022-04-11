import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getPopularVideos } from "../../../redux/actions/videoAction";
import Category from "../../categoryBar/Category";
import Video from "../../video/Video";
import "./_homescreen.scss";

const Homescreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);

  const videosData = useSelector((state) => state?.videoReducer?.videoData);
  const videoArray = videosData?.videos;
  // console.log(videoArray);

  return (
    <div className="homeScreen">
      <Container>
        <Category />
        <Row>
          {videoArray?.map((video) => {
            return (
              <Col lg={3} md={4} key={video?.id}>
                <Video video={video} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Homescreen;
