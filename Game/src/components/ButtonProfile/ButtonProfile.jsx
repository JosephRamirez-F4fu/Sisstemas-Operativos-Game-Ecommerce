import { Link } from "react-router-dom";
import React from "react";
import "./ButtonProfile.css";
export default function ButtonProfile({ text, url }) {
  return (
    <>
      <Link to={url}>
        <span>{text}</span>{" "}
      </Link>
    </>
  );
}
