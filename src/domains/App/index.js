import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import NavItem from "../../components/Navbar/NavItem";
import { Typography, Button } from "@material-ui/core";
export default () => {
  const fetchMyData = async () => {
    const data = await fetch("/bonk", { method: "POST" });
    console.log(data);
  };
  return (
    <>
      <Typography align="center" variant="h1">
        Rice Bot
      </Typography>
      <Typography align="center" variant="h3">
        Dominate the Fields.
      </Typography>
      <Link to="/">
        <Button>Home</Button>
      </Link>
      <Link to="/about">
        <Button>ABOUT</Button>
      </Link>
      <Link href="https://longshotdev.tk/">
        <Button>invite</Button>
      </Link>
    </>
  );
};
