import urls from "../../URLS/urls";
import "./ViewVideo.css";

function ViewVideo(props) {
  let eid = props.match.params.id;
  const arr = urls.filter((e) => e.id === eid);
  console.log(arr);

  return <video src={arr[0]?.vid} controls width="100%" height="100%"></video>;
}

export default ViewVideo;
