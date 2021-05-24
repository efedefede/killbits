import { Fragment } from "react";
import urls from "../../URLS/urls";
import "./ViewVideo.css";

function ViewVideo(props) {
  let eid = props.match.params.id;
  const arr = urls.filter((e) => e.id === eid);
  console.log(arr);

  return (
    <Fragment>
      <video src={arr[0]?.vid} controls width="100%" height="100%"></video>
      <footer className="footer">
        todos los dechos reservados a &copy; kill-bits 2021
      </footer>
    </Fragment>
  );
}

export default ViewVideo;
