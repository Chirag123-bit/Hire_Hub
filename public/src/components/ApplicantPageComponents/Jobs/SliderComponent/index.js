import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
  root: {
    width: "97%",
    padding: "1.5rem 0",
  },
  thumb: {
    color: "#045DE9",
  },
  rail: {
    color: `rgba(0, 0, 0, 0.26)`,
  },
  track: {
    color: "#045DE9",
  },
});

const followersMarks = [
  {
    value: 0,
    scaledValue: 1000,
    label: "1k",
  },
  {
    value: 25,
    scaledValue: 25000,
    label: "25k",
  },
  {
    value: 50,
    scaledValue: 50000,
    label: "50k",
  },
  {
    value: 75,
    scaledValue: 75000,
    label: "75k",
  },
  {
    value: 100,
    scaledValue: 100000,
    label: "100k",
  },
];

const scale = (value) => {
  const previousMarkIndex = Math.floor(value / 25);
  const previousMark = followersMarks[previousMarkIndex];
  const remainder = value % 25;
  if (remainder === 0) {
    return previousMark.scaledValue;
  }
  const nextMark = followersMarks[previousMarkIndex + 1];
  const increment = (nextMark.scaledValue - previousMark.scaledValue) / 25;
  return remainder * increment + previousMark.scaledValue;
};

function numFormatter(num) {
  if (num > 999 && num < 1000000) {
    return (num / 1000).toFixed(0) + "K"; // convert to K for number from > 1000 < 1 million
  } else if (num >= 1000000) {
    return (num / 1000000).toFixed(0) + "M"; // convert to M for number from > 1 million
  } else if (num < 900) {
    return num; // if value < 1000, nothing to do
  }
}

const SliderComponent = ({ value, changedPrice }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Slider
        value={value}
        onChange={changedPrice}
        valueLabelDisplay="on"
        min={0}
        step={1}
        max={100}
        valueLabelFormat={numFormatter}
        marks={followersMarks}
        scale={scale}
        classes={{
          thumb: classes.thumb,
          rail: classes.rail,
          track: classes.track,
        }}
      />
    </div>
  );
};

export default SliderComponent;
