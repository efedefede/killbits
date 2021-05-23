import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import "./cards.css";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",

    justifyContent: "center",
    margin: "20px",
    width: "40%",
    height: "250px",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    width: "40%",
  },
  content: {
    flex: "1 0 auto",
    overflow: "hidden",
    width: "50%",
  },
  cover: {
    width: 280,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: theme.spacing(11),
    width: "40%",
  },
  playIcon: {
    height: 90,
    width: 90,
  },
}));

export default function MediaControlCard(props) {
  const link = `/kb/home/${props.id}`;
  const classes = useStyles();
  const theme = useTheme();

  return (
    /* <div className="card">
      <div className="info">
        <h5>{props.title}</h5>
      </div>
      <div className="image">
        <img src={props.img} alt="img not found" />
      </div>
    </div> */
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          {/* <Typography component="h5" variant="h5">
            {props.title}
          </Typography> */}
          <h5>{props.title}</h5>
          {/* <Typography variant="subtitle1" color="textSecondary">
            Kill Bits
          </Typography> */}
        </CardContent>
        <div className={classes.controls}>
          <NavLink to={link}>
            <IconButton aria-label="play/pause">
              <PlayArrowIcon className={classes.playIcon} />
            </IconButton>
          </NavLink>
        </div>
      </div>
      <CardMedia className={classes.cover} image={props.img} />
    </Card>
  );
}
