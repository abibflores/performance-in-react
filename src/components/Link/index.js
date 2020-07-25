import React from "react";
import { Link } from "wouter";

export default ({ path, text }) => (
<Link className="Link" to={path}>{text}</Link>
);