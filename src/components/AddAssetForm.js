import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  Grid,
  Button,
  Select,
  MenuItem,
  FormControl,
  IconButton,
  Typography,
  makeStyles
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: '70%', // Adjust width as needed
    '& .MuiInputBase-root': {
      fontSize: '0.875rem', // Smaller font size
      height: 40, // Smaller field height
    },
    '& .MuiInputLabel-root': {
      fontSize: '0.875rem', // Smaller label font size
    },
  },
  button: {
    fontSize: '0.875rem', // Smaller button text
    padding: '6px 16px', // Smaller padding
  },
  typography: {
    fontSize: '0.875rem', // Smaller typography for labels
  },
  textField: {
    '& .MuiInputBase-root': {
      fontSize: '0.875rem', // Smaller font size for text fields
      height: 40, // Smaller height for text fields
    },
    width: '70%', // Adjust width as needed
  },
  gridItem: {
    maxWidth: '50%', // Smaller width for grid items
  }
}));

const AddAssetForm = ({ open, handleClose, handleSave, asset }) => {
  const classes = useStyles();

  // State for form fields initialized with props if available (for edit)
  const [vin, setVin] = useState('');
  const [assetType, setAssetType] = useState('');
  const [name, setName] = useState('');
  const [year, setYear] = useState('');
  const [model, setModel] = useState('');
  const [make, setMake] = useState('');

  // Effect to pre-populate form when editing
  useEffect(() => {
    if (asset) {
      setVin(asset.vin || '');
      setAssetType(asset.type || '');
      setName(asset.name || '');
      setYear(asset.year || '');
      setModel(asset.model || '');
      setMake(asset.make || '');
    }
  }, [asset]);

  // Handle form submission
  const handleFormSave = () => {
    const newAsset = {
      id: asset ? asset.id : Math.random().toString(), // Use existing id if editing
      name: name,
      type: assetType,
      make: make,
      model: model,
      year: year,
      vin: vin,
    };
    handleSave(newAsset);
    handleClose(); // Close the form after submission
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
      <DialogTitle>
        <Grid container justifyContent="space-between" alignItems="center">
          <Typography variant="h6">{asset ? 'Edit Asset' : 'Add New Asset'}</Typography>
          <IconButton onClick={handleClose} aria-label="close">
            <CloseIcon />
          </IconButton>
        </Grid>
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography className={classes.typography} variant="subtitle2">VIN/SN</Typography>
            <TextField fullWidth variant="outlined" value={vin} onChange={(e) => setVin(e.target.value)} className={classes.textField} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography className={classes.typography} variant="subtitle2">Asset Type</Typography>
            <FormControl fullWidth variant="outlined" className={classes.formControl}>
              <Select value={assetType} onChange={(e) => setAssetType(e.target.value)} defaultValue="">
                <MenuItem value="type1">Type 1</MenuItem>
                <MenuItem value="type2">Type 2</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography className={classes.typography} variant="subtitle2">Name</Typography>
            <TextField fullWidth variant="outlined" value={name} onChange={(e) => setName(e.target.value)} className={classes.textField} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography className={classes.typography} variant="subtitle2">Year</Typography>
            <TextField fullWidth variant="outlined" value={year} onChange={(e) => setYear(e.target.value)} className={classes.textField} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography className={classes.typography} variant="subtitle2">Model</Typography>
            <FormControl fullWidth variant="outlined" className={classes.formControl}>
              <Select value={model} onChange={(e) => setModel(e.target.value)} defaultValue="">
                <MenuItem value="model1">Model 1</MenuItem>
                <MenuItem value="model2">Model 2</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography className={classes.typography} variant="subtitle2">Make</Typography>
            <FormControl fullWidth variant="outlined" className={classes.formControl}>
              <Select value={make} onChange={(e) => setMake(e.target.value)} defaultValue="">
                <MenuItem value="make1">Make 1</MenuItem>
                <MenuItem value="make2">Make 2</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid container justifyContent="flex-end" style={{ marginTop: 20 }}>
          <Button onClick={handleFormSave} color="primary" variant="contained" className={classes.button}>
            Save
          </Button>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default AddAssetForm;
