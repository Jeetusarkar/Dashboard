import React from "react";
import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../themes";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{ color: colors.grey[100] }}
      onClick={() => setSelected(title)}
      icon={icon}>
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-Wrapper": {
          background: "transparent !important",
          height: "100%",
        },
        "& .pro-inner-item": {
          padding: "0 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}>
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}>
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItem="center"
                ml="15px">
                <Typography variant="h3" color={colors.grey[100]} pt="5px">
                  ALEX
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          {/* USER */}
          {!isCollapsed && (
            <Box mb="20px">
              <Box display="flex" justifyContent="center" alinItems>
                <img
                  alt="USER"
                  width="70px"
                  height="70px"
                  src={"../../assets/user.png"}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h3"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}>
                  JS DEV
                </Typography>
                <Typography variant="h6" color={colors.greenAccent[500]}>
                  VP Fancy Admin
                </Typography>
              </Box>
            </Box>
          )}
          {/* {menu items} */}
          <Box paddingLeft={isCollapsed ? undefined : "8%"}>
            <Item
              title="Dashboard"
              icon={<HomeOutlinedIcon />}
              to="/"
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.grey[100]}
              sx={{ m: "15px 0 5px 20px" }}>
              Data
            </Typography>
            <Item
              title="Manage Teams"
              icon={<PeopleOutlinedIcon />}
              to="/team"
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Contacts Information"
              icon={<ContactsOutlinedIcon />}
              to="/contacts"
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Invoices Balances"
              icon={<ReceiptOutlinedIcon />}
              to="/invoices"
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.grey[100]}
              sx={{ m: "15px 0 5px 20px" }}>
              Pages
            </Typography>
            <Item
              title="Profile form"
              icon={<PersonOutlinedIcon />}
              to="/form"
              selected={selected}
              setSelected={setSelected}
            />{" "}
            <Item
              title="Calendar"
              icon={<CalendarTodayOutlinedIcon />}
              to="/calendar"
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FAQ Page"
              icon={<HelpOutlinedIcon />}
              to="/faq"
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.grey[100]}
              sx={{ m: "15px 0 5px 20px" }}>
              Charts
            </Typography>
            <Item
              title="Bar Chart"
              icon={<BarChartOutlinedIcon />}
              to="/bar"
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pie Chart"
              icon={<PieChartOutlineOutlinedIcon />}
              to="/pie"
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Line Chart"
              icon={<TimelineOutlinedIcon />}
              to="/line"
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Geography Chart"
              icon={<MapOutlinedIcon />}
              to="/geography"
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
