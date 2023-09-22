import axios from "axios";
import { useEffect, useState } from "react";

export function Community() {
  const [image, setimage] = useState("");
  const [errormsg, seterror] = useState("");

  useEffect(() => {
    try {
      fetch("https://pixabay.com/api/")
        .then((response) => response.data)
        .then((data) => console.log(data));
    } catch (error) {
      seterror(error.message);
      console.log(errormsg);
    }
  }, [image]);

  return <div>{/* <img src={} alt="" /> */}</div>;
}
