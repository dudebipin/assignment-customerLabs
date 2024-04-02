import * as React from "react";
import { Button } from "@mui/material";
import Slider from "./Slider";
import Drawer from "@mui/material/Drawer";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import "./styles.css";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function ControllableStates() {
  const [state, setState] = React.useState({
    right: false
  });

  const [open, setOpen] = React.useState();

  const toggleDrawer = (anchor, open) => {

    setState({ ...state, [anchor]: open });
    if (!open) {
      setOpen(true)
    }

  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div className="">
      <div className="main">
        <Button
          style={{
            color: "white",
            textTransform: "capitalize",
            fontSize: "20px"
          }}
        >
          <KeyboardArrowLeftIcon /> View Audience
        </Button>
      </div>

      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <button
            className="mainbtnSegment"
            onClick={() => toggleDrawer(anchor, true)}
          >
            Save Segment
          </button>

          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={() => toggleDrawer(anchor, false)}
          >
            <Slider click={toggleDrawer} />
          </Drawer>
        </React.Fragment>
      ))}
      <Snackbar onClose={handleClose} open={open} autoHideDuration={2000}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Segment Saved 😊
        </Alert>
      </Snackbar>
    </div>
  );
}
