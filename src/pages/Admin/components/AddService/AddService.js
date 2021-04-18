import { Button, Grid, makeStyles, Typography } from "@material-ui/core";
import React, { useState,useEffect } from "react";
import axios from "axios";

const useStyles = makeStyles({
  addServiceRoot: {
    width: "100%",
    display: "flex",
    // justifyContent: "center",
    backgroundColor: "whitesmoke",
  },
  addServiceContainer: {
    width: "80%",
    height: "80vh",
  },
  addServiceForm: {
    display: "flex",
    flexDirection: "column",
    padding: "10px",
    backgroundColor: "white",
    marginLeft: "20px",
    marginTop: " 20px",
    height: " max-content",
    width: " 400px",
    borderRadius: "10px",
  },
  input: {
    // marginBottom: "20px",
  },
  titleInput: {
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "5px",
    border: "0.1px solid whitesmoke",
    outline: "transparent",
  },
  textareaStyle: {
    border: "1px solid lightgray",
    borderRadius: "5px",
    outline: "transparent",
    marginBottom: "15px",
  },
  uploadBtn: {
    padding: " 10px",
    borderRadius: "5px",
    border: "transparent",
    backgroundColor: " #3f51b5",
    color: " white",
    marginTop: "20px"
  },
});

const AddService = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [img,setImg] = useState(null);


  const handleImgUpload = (event) => {
    const imgData = new FormData();
    imgData.set('key','95dc92dc1c56205a4fd825528d05d5ab')
    imgData.append('image',event.target.files[0])
    axios.post('https://api.imgbb.com/1/upload',imgData)
    .then((res) => setImg(res.data.data.display_url))
    .catch((err)=> console.log(err))
  };
 
  const classes = useStyles();

  const handleAddService = (e) => {
    e.preventDefault();
    const service = { 
      title: title,
      price: price,
      description: description,
      img:img,
    }
    const url = 'https://infinite-dusk-63646.herokuapp.com/services'
    fetch(url,{
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(service)
    }).then(res=>console.log(res))
  };
  return (
    <Grid container className={classes.addServiceRoot}>
      <Grid container className={classes.addServiceContainer}>
        <form className={classes.addServiceForm} onSubmit={handleAddService}>
          <label htmlFor="Title">Service Title</label>
          <input
            className={classes.titleInput}
            type="text"
            name="title"
            placeholder="Enter title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
            <label htmlFor="Services Price">Services Price</label>
          <input
            className={classes.titleInput}
            type="number"
            name="price"
            placeholder="Enter Price"
            required
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <label htmlFor="Description">Description</label>
          <textarea
            className={classes.textareaStyle}
            name="description"
            cols="30"
            rows="5"
            placeholder="Enter description"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Grid container direction="column">
             <input
            accept="image/*"
            className={classes.input}
            id="contained-button-file"
            multiple
            type="file"
            required
            onChange={handleImgUpload}
          />
            <Typography variant="body2">Please Wait ... <strong>5</strong>s when you selected img  </Typography>
          </Grid>
         
          <button type="submit" className={classes.uploadBtn}>
            Upload
          </button>
        </form>
      </Grid>
    </Grid>
  );
};

export default AddService;

