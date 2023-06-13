import { Outlet, Navigate } from 'react-router-dom'
import React from "react";
import { useSelector,useDispatch } from 'react-redux'
import { useState } from 'react';

const Autentication = () => {
    const user = useSelector(store => store.user)
    return(
        (user.token != '') ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default Autentication