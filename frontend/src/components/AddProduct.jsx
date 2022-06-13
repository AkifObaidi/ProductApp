import * as React from 'react';
import Box from '@mui/material/Box';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styles from "../assets/styles/main.module.css";
import axios from 'axios';
import appSettings from '../app.settings.json';
import {useNavigate} from 'react-router-dom';

const AddProduct = () => {
  const navigate = useNavigate();
  const [values, setValues] = React.useState({
    title: '',
    price: '',
    category: '',
    img_url: '',
    rating: '',
    description: '',
  });
  
  const handleChange = (name,value) => {
    setValues({ ...values, [name]: value });
  }
  
  const handleSubmit = () => {
    axios.post(appSettings.apiUrl+"/products", values).then(function (response) {
      console.log(response);
      alert("Product added successfully");
      navigate("/");
    }).catch(function (error) {
      console.log(error);
      alert("Error adding product");
    })
  }


  return (
    <main className={styles.main_section}>
      <div className={styles.container}>
        <h2>Add Product</h2>
        <Box m={2} />
        <TextField
          label="Product Title"
          id="outlined-start-adornment"
          sx={{ m: 1, width: '98%' }}
          onChange={(e) => handleChange('title', e.target.value)}
        />

        <FormControl sx={{ m: 1,width:'48%' }} variant="filled">
          <InputLabel htmlFor="filled-adornment-amount">Product Price</InputLabel>
          <FilledInput
            id="filled-adornment-amount"
            value={values.amount}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            onChange={(e) => handleChange('price', e.target.value)}
          />
        </FormControl>

        <TextField
          label="Product Category"
          id="outlined-start-adornment"
          sx={{ m: 1, width: '48%' }}
          onChange={(e) => handleChange('category', e.target.value)}
        />

        <TextField
          label="Product Image"
          id="outlined-start-adornment"
          sx={{ m: 1, width: '48%' }}
          onChange={(e) => handleChange('img_url', e.target.value)}
        />

        <TextField
          label="Product Rating"
          id="outlined-start-adornment"
          sx={{ m: 1, width: '48%' }}
          onChange={(e) => handleChange('rating', e.target.value)}
        />
        <TextField
          placeholder="Product Description"
          multiline
          rows={6}
          sx={{ m: 1, width: '98%' }}
          onChange={(e) => handleChange('description', e.target.value)}
        />
        <Box m={2} />
        <div style={{display:'flex',justifyContent:'end'}}>
          <Button variant="outlined" sx={{m:1}} onClick={handleSubmit} >Add</Button>
        </div>
      </div>
    </main>
  );
};

export default AddProduct;
