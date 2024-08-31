import React from "react";
import { Navigate } from "react-router-dom";
import { useGlobalContext } from "../context/ContextProvider";

const PrivateRoute = ({ element, ...rest }) => {
	const { isLogged } = useGlobalContext();

	return isLogged ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
