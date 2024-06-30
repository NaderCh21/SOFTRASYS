import React from "react";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import { ExpandMore as ExpandMoreIcon } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";
import DashboardIcon from "../assets/icons/Vector.svg";
import AssetIcon from "../assets/icons/Cube.svg"
import ContactsIcon from "../assets/icons/User circle.svg"
const CustomAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  "& .MuiAccordionSummary-expandIconWrapper": {
    transform: "rotate(90deg)",
  },
  "&.Mui-expanded .MuiAccordionSummary-expandIconWrapper": {
    transform: "rotate(0deg)",
  },
}));


const CustomListItemIcon = styled(ListItemIcon)(({ theme }) => ({
  minWidth: 'auto',
  marginRight: theme.spacing(2.5), 
}));

const Sidebar = () => {
  return (
    <Box
        sx={{
            width: 250,
            height: "100%",
            backgroundColor: "#f6f8f9", 
            paddingTop: 10,
        }}
    >
      <List component="nav">
        <ListItem button component={Link} to="/dashboard">
          <ListItemIcon>
            <img
              src={DashboardIcon}
              alt="Dashboard"
              style={{ width: "25px", height: "25px" , marginLeft: '5px'}}
            />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>

        <Accordion sx={{backgroundColor:"#f6f8f9"}}>
          <CustomAccordionSummary expandIcon={<ExpandMoreIcon />}>
          <CustomListItemIcon>
              <img src={AssetIcon} alt="Assets" style={{ width: '35px', height: '30px' }} />
            </CustomListItemIcon>
            <Typography>Assets</Typography>
          </CustomAccordionSummary>
          <AccordionDetails>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="assets/listing" target="_blank">
                <ListItemText primary="Listing" />
              </ListItem>
              <List component="div" disablePadding>
                <ListItem button component={Link} to="/assets/groups">
                  <ListItemText primary="Groups" />
                </ListItem>
              </List>
            </List>
          </AccordionDetails>
        </Accordion>

        <Divider />

        <ListItem button component={Link} to="/contacts">
        <CustomListItemIcon>
              <img src={ContactsIcon} alt="Assets" style={{ width: '35px', height: '30px' }} />
            </CustomListItemIcon>
          <ListItemText primary="Contacts" />
        </ListItem>

        <Divider />

        <Accordion sx={{backgroundColor:"#f6f8f9"}}>
          <CustomAccordionSummary expandIcon={<ExpandMoreIcon />}>
          <ListItemIcon>
            <img
              src={DashboardIcon}
              alt="Dashboard"
              style={{ width: "25px", height: "25px" , marginLeft: '5px'}}
            />
          </ListItemIcon>
            <Typography>Inspections</Typography>
          </CustomAccordionSummary>
          <AccordionDetails>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/inspections">
                <ListItemIcon>{/* Icon for Inspections */}</ListItemIcon>
                <ListItemText primary="Inspections" />
              </ListItem>
              <ListItem button component={Link} to="/inspections/history">
                <ListItemText primary="Payouts" />
              </ListItem>
              <ListItem button component={Link} to="/inspections/forms">
                <ListItemText primary="Payouts" />
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>

        <Divider />

        <Accordion sx={{backgroundColor:"#f6f8f9"}}>
          <CustomAccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Services & Maintenance</Typography>
          </CustomAccordionSummary>
          <AccordionDetails>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/services/tasks">
                <ListItemIcon>{/* Icon for Service Tasks */}</ListItemIcon>
                <ListItemText primary="Payouts" />
              </ListItem>
              <ListItem button component={Link} to="/services/maintenance">
                <ListItemText primary="Payouts" />
              </ListItem>
              <ListItem button component={Link} to="/services/history">
                <ListItemText primary="Payouts" />
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>

        <Divider />

        <Accordion sx={{backgroundColor:"#f6f8f9"}}>
          <CustomAccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Fuel</Typography>
          </CustomAccordionSummary>
          <AccordionDetails>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/fuel/history">
                <ListItemIcon>{/* Icon for Fuel */}</ListItemIcon>
                <ListItemText primary="Payouts" />
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>

        <Divider />

        <Accordion sx={{backgroundColor:"#f6f8f9"}}>
          <CustomAccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Policy</Typography>
          </CustomAccordionSummary>
          <AccordionDetails>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/policy/list">
                <ListItemIcon>{/* Icon for Policy List */}</ListItemIcon>
                <ListItemText primary="Payouts" />
              </ListItem>
              <ListItem button component={Link} to="/policy/history">
                <ListItemText primary="Payouts" />
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>

        <Divider />

        <Accordion sx={{backgroundColor:"#f6f8f9"}}>
          <CustomAccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Infractions</Typography>
          </CustomAccordionSummary>
          <AccordionDetails>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/infractions">
                <ListItemIcon>{/* Icon for Infractions */}</ListItemIcon>
                <ListItemText primary="Payouts" />
              </ListItem>
              <ListItem button component={Link} to="/infractions/history">
                <ListItemText primary="Payouts" />
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>

        <Divider />

        <Accordion sx={{backgroundColor:"#f6f8f9"}}>
          <CustomAccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Accounting</Typography>
          </CustomAccordionSummary>
          <AccordionDetails>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/accounting/overview">
                <ListItemIcon>{/* Icon for Overview */}</ListItemIcon>
                <ListItemText primary="Payouts" />
              </ListItem>
              <ListItem button component={Link} to="/accounting/invoices">
                <ListItemText primary="Payouts" />
              </ListItem>
              <ListItem button component={Link} to="/accounting/balance-sheet">
                <ListItemText primary="Payouts" />
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>

        <Divider />

        <Accordion sx={{backgroundColor:"#f6f8f9"}}>
          <CustomAccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Reports</Typography>
          </CustomAccordionSummary>
          <AccordionDetails>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/reports/generate">
                <ListItemIcon>{/* Icon for Generate Reports */}</ListItemIcon>
                <ListItemText primary="Payouts" />
              </ListItem>
              <ListItem button component={Link} to="/reports/schedule">
                <ListItemText primary="Payouts" />
              </ListItem>
              <ListItem button component={Link} to="/reports/planning">
                <ListItemText primary="Payouts" />
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>

        <Divider />

        <ListItem button component={Link} to="/settings">
          <ListItemIcon>{/* Icon for Settings */}</ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
