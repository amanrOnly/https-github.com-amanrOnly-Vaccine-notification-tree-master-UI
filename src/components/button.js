import React, { useState, useEffect } from "react";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";
import { Container } from "@material-ui/core";


const Update=()=>{
    toast.success("Courses loaded Succesfully!!!", {
        position: "top-center" 
    });
    // axios.get(`${base_url}/all`).then(
    //     (response)=>{
    //         console.log(response.data);
            
    //     },
    //     (error)=>{
    //         toast.error("Something wesnt wrong");
    //     })
    };