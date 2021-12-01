import React from "react";
const Register = React.lazy(() => import("../views/Register"));

const RegisterRoutes = [
	{
		path: "/register",
		name: "Register",
		component: Register,
		private: false,
		exact: true,
	},
	{ redirect: true, path: "/", to: "/register", name: "Register" },
];

export default RegisterRoutes;
