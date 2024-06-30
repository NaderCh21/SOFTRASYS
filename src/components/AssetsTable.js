import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Grid
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import AddAssetForm from './AddAssetForm';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    maxWidth: "100%",
    border: "1px solid",
  },
  button: {
    margin: theme.spacing(1),
    fontSize: "0.75rem",
    padding: theme.spacing(0.5),
  },
  table: {
    minWidth: 600,
  }
}));

const AssetsTable = () => {
  const classes = useStyles();
  const [openForm, setOpenForm] = useState(false);
  const [assets, setAssets] = useState(() => {
    const savedAssets = localStorage.getItem('assets');
    return savedAssets ? JSON.parse(savedAssets) : [];
  });
  const [currentAsset, setCurrentAsset] = useState(null);
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [assetToDelete, setAssetToDelete] = useState(null);

  useEffect(() => {
    localStorage.setItem('assets', JSON.stringify(assets));
  }, [assets]);

  const handleOpenAssetForm = (asset = null) => {
    setCurrentAsset(asset);
    setOpenForm(true);
  };

  const handleCloseAssetForm = () => {
    setOpenForm(false);
    setCurrentAsset(null);
  };

  const handleAddOrEditAsset = (asset) => {
    setAssets(prevAssets => {
      const assetIndex = prevAssets.findIndex(a => a.id === asset.id);
      if (assetIndex > -1) {
        // Editing existing asset
        const newAssets = [...prevAssets];
        newAssets[assetIndex] = { ...newAssets[assetIndex], ...asset };
        return newAssets;
      } else {
        // Adding new asset
        return [...prevAssets, asset];
      }
    });
  };

  const openDeleteConfirm = (id) => {
    setAssetToDelete(id);
    setDeleteConfirmOpen(true);
  };

  const closeDeleteConfirm = () => {
    setDeleteConfirmOpen(false);
  };

  const deleteAsset = () => {
    setAssets(assets.filter(asset => asset.id !== assetToDelete));
    closeDeleteConfirm();
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Paper className={classes.root}>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <Typography variant="h6">Assets</Typography>
            </Grid>
            <Grid item>
              <Grid container spacing={1}>
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<AddIcon />}
                    className={classes.button}
                    onClick={() => handleOpenAssetForm()}
                  >
                    Add asset
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <TableContainer>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell>#</TableCell>
                  <TableCell>Make</TableCell>
                  <TableCell>Model</TableCell>
                  <TableCell>Year</TableCell>
                  <TableCell>Asset Group</TableCell>
                  <TableCell>VIN/License Number</TableCell>
                  <TableCell>Asset ID</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {assets.map((asset, index) => (
                  <TableRow key={asset.id || index}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{asset.name || 'N/A'}</TableCell>
                    <TableCell>{asset.type || 'N/A'}</TableCell>
                    <TableCell>{asset.make || 'N/A'}</TableCell>
                    <TableCell>{asset.model || 'N/A'}</TableCell>
                    <TableCell>{asset.year || 'N/A'}</TableCell>
                    <TableCell>{asset.group || 'N/A'}</TableCell>
                    <TableCell>{asset.vin || 'N/A'}</TableCell>
                    <TableCell>{asset.id || 'N/A'}</TableCell>
                    <TableCell>
                      <IconButton onClick={() => handleOpenAssetForm(asset)}>
                        <EditIcon />
                      </IconButton>
                      <IconButton onClick={() => openDeleteConfirm(asset.id)}>
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Grid>
      <Dialog
        open={deleteConfirmOpen}
        onClose={closeDeleteConfirm}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Confirm Deletion"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this asset?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDeleteConfirm} color="primary">
            Cancel
          </Button>
          <Button onClick={deleteAsset} color="primary" autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
      {openForm && (
        <AddAssetForm
          open={openForm}
          handleClose={handleCloseAssetForm}
          handleSave={handleAddOrEditAsset}
          asset={currentAsset} // Pass the current asset for editing
        />
      )}
    </Grid>
  );
};

export default AssetsTable;
