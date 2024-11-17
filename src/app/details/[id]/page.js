"use client";
import React from "react";

const Details = ({ params }) => {
  console.log(params);
  const { id } = params;
  return <div>Details {id}</div>;
};

export default Details;
