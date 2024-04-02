import React from "react";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Typography } from "@mui/material";
import Link from "@mui/material/Link";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import axios from "axios";
import { stylesheet } from "./style";
import Box from '@mui/material/Box';
import Autocomplete from "@mui/material/Autocomplete";
import RemoveIcon from "@mui/icons-material/Remove";
import { useLayoutEffect } from "react";
import Button from '@mui/material/Button';


const list = [
  { label: "First Name", value: "first_name" },
  { label: "Last Name", value: "last_name" },
  { label: "Gender", value: "gender" },
  { label: "Age", value: "age" },
  { label: "Account Name", value: "account_name" },
  { label: "City", value: "city" },
  { label: "State", value: "state" }
];




const Slider = ({ click }) => {

  const [randomColors, setrandomColors] = useState('#ADD8E6');

  const [options, setoptions] = useState(list);
  const [inputValue, setInputValue] = useState([]);
  const [array, setarray] = useState([]);
  const [value, setValue] = useState([]);
  const [value1, setValue1] = useState([]);
  const [text, setText] = useState("");



  const handleClick = (item, index) => {
    array.splice(index, 1);
    const a = [...array];
    setarray(a);
    const opt = [...options];

    opt.push(item);

    setoptions(opt);
  };



  useLayoutEffect(() => {
    if (typeof window !== "undefined") {
      let spinner = document.getElementById("randomcolor0");
      if (spinner && spinner.style) {
        spinner.style.backgroundColor = '#910606';
      }

    }
  }, [randomColors])


  const handleLink = () => {
    randomColor();
    const dummyarr = [...array];
    if (inputValue !== "") {
      if (randomColors === "ADD8E6") {
        value['color'] = '910606';
      } else {
        value['color'] = randomColors;
      }
      dummyarr.push(value);
      let uniqueOptions = [...new Set(dummyarr)];
      setarray(uniqueOptions);
      const arropt = options.filter((val) => val.value !== value.value);
      setoptions(arropt);
      setValue1("");
    }
  };
  const handleInput = (e, newInputValue) => {
    setInputValue(newInputValue);
    setValue1(newInputValue);
  };

  const handleonchange2 = (e, newValue) => {
    setValue(newValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleClick_Cancel();
    postUser();
  };

  const handleClick_Cancel = () => {
    click("right", false);
  };


  function randomColor() {
    let colors = Math.floor(Math.random() * 16777215).toString(16);
    setrandomColors(colors);

  }


  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleAuto2 = (newValue, a, i) => {
    const autoarr = array;
    autoarr[i] = newValue;
    var options2 = [...list];
    autoarr.map((val1, index) => {
      options2 = options2.filter((val2) => val2?.value !== val1?.value);
    });
    setoptions(options2);
  };

  async function postUser() {
    let sentValues = {
      segment_name: text,
      schema: array
    };
    axios
      .post(
        "https://webhook.site/3b144348-9bd4-4839-ad5f-bb687bfee3c1",
        sentValues
      )
      .then(function (response) {

      })
      .catch(function (error) {
      });
  }

  const stylee = stylesheet();

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className={stylee.slider}>
          <Button className={stylee.btnSegment} onClick={handleClick_Cancel}>
            <KeyboardArrowLeftIcon /> Saving Segment
          </Button>
        </div>
        <div className={stylee.middle}>
          <div style={{ margin: "25px" }}>
            <Typography>Enter the Name of the segment</Typography>
            <br />
            <div>
              <TextField
                className={stylee.txtfield}
                size="small"
                placeholder="Name of the segment"
                onChange={handleChange}
              ></TextField>{" "}
            </div>
            <br />
            <Typography>
              To save your segment, you need to add the schemas to build the
              query
            </Typography>
            <br />
            <Box sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              p: 1,
              m: 1,
              bgcolor: 'background.paper',
              borderRadius: 1,
            }}>
              <div style={{ display: "flex", alignItems: 'center', marginRight: "1rem" }} id='UserTraits'>
                <div className="usertrait">

                </div>
                <div>
                  - User Traits
                </div>
              </div>
              <div style={{ display: "flex", alignItems: 'center' }} id='GroupTraits'>
                <div className="GroupTraits">

                </div>
                <div>
                  - Group Traits
                </div>
              </div>
            </Box>
            <div className={array.length ? stylee.auto2 : ""}>
              {array.map((item, index) => {
                return (
                  <div className={stylee.div2} key={index}>
                    <div id={'randomcolor' + index} style={{ backgroundColor: '#' + item.color, marginTop: '0' }} className="divautoComplete"></div>
                    <Autocomplete
                      className={stylee.auto1}
                      size="small"
                      value={item.label}
                      onChange={(event, newValue) => {
                        handleAuto2(newValue, item, index);
                      }}
                      disablePortal
                      options={options}
                      sx={{ width: 400 }}
                      renderInput={(params) => (
                        <TextField
                          size="small"
                          style={{
                            width: "400px"
                          }}
                          {...params}
                        />
                      )}
                    />
                    <Button onClick={() => handleClick(item, index)}>
                      <RemoveIcon />
                    </Button>
                  </div>
                );
              })}
            </div>
            <br />
            <div className={stylee.divarea}>
              <div style={{ backgroundColor: randomColors }} className="divautoComplete"></div>
              <Autocomplete
                value={value1}
                onChange={(event, newValue) => {
                  handleonchange2(event, newValue);
                }}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                  handleInput(event, newInputValue);
                }}
                options={options}
                sx={{ width: 300, margin: "10px" }}
                getOptionDisabled={(option) => option === inputValue}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    size="small"
                    style={{ width: "400px" }}
                    label="Add schema to segment"
                  />
                )}
              />
            </div>
            <Button className={stylee.link}>
              <div className="atag">
                <Link onClick={() => handleLink()}>+ Add new schema</Link>
              </div>
            </Button>
          </div>
        </div >
        <div className={stylee.divbtnSave}>
          <Button className={stylee.btnSave}d type="submit">
            Save the Segment
          </Button>
          <Button className={stylee.btnCancel} onClick={handleClick_Cancel}>
            Cancel
          </Button>
        </div>
      </form >

    </div >
  );
};

export default Slider;
