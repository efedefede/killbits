import urls from "../../URLS/urls";
import "./ViewVideo.css";

function ViewVideo(props) {
  let eid = props.match.params.id;
  const arr = urls.filter((e) => e.id === eid);
  console.log(arr);

  return (
    <video src={arr[0]?.vid} controls width="100%" height="100%"></video>
    /* <ReactPlayer
      className="ViewVideo"
      url={props.dir}
      className="react-player"
      controls
      width="50%"
      height="50%" 
      
    /> */
  );
}

export default ViewVideo;
