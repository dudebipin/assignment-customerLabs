import { makeStyles } from "@mui/styles";

export const stylesheet = makeStyles((theme) => ({
  main: {
    display: "flex",
    backgroundColor: "rgb(67, 201, 206)",
    height: "80px",
    margin: "-8px"
  },
  divarea: {
    border: "3px solid white",
    marginLeft: "10px",
    display: "flex"
  },
  btnCancel: {
    color: "grey",
    backgroundColor: "white",
    marginLeft: "10px",
    textTransform: "capitalize"
  },
  slider: {
    display: "flex",
    backgroundColor: "rgb(67, 201, 206)",
    height: "80px"
  },
  btnSegment: {
    color: "white",
    textTransform: "capitalize",
    fontSize: "20px"
  },
  txtfield: {
    width: "450px"
  },
  middle: {
    height: "80vh",
    overflowY: "auto"
  },  
  btnSave: {
    color: "white",
    backgroundColor: "grey",
    marginLeft: "10px",
    textTransform: "none"
  },
  link: {
    fontSize: "12px",
  },
  auto1: {
    margin: "10px"
  },
  mainbtn: {
    color: "white",
    textTransform: "capitalize",
    fontSize: "20px"
  },  
  auto2: {
    border: "3px solid #2596be"
  },
  div2: {
    display: "flex",
    alignItems: "center"
  },
  divbtnSave: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "lightblue",
    position: "absolute",
    bottom: "0",
    height: "80px",
    width: "100%"
  },
}));
