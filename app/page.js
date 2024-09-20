// In order to use react hooks (`useState`, `useEffect`), we must specify that this component runs on the client
"use client";
// We import react functions
import { useEffect, useState } from "react";
// Import the styles from the css file.
import classes from "./page.module.css";
import AdBox from "./components/AdBox";


// In a `page.js` file, we usually call the page function `Home`
export default function Home() {
  return (
    <body>
      <div>
        <h1 className = {classes.title}> Add An Event! </h1>
      </div>
      <div>
        <h1 className = {classes.title}> Today's Events! </h1>
      </div>
      <div className = {classes.grid-container}>
        <p> Hello World!</p>
        <AdBox
          // Example of passing in props (properties) to the card
          header="My React Card"
          timeDate="This is some text that is inside of the card"
          location="Click me!"
        ></AdBox>
      </div>
    </body>
  );
}
