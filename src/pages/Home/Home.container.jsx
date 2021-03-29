import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Link to="/cards">Go to CardsList</Link>
    </div>
  );
}
