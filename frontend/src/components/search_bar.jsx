import { useState } from "react";
import { Section } from "./post-section";
export function Search() {
  const [searchvalue, getsearch] = useState("");
  function userinput(e) {
    var lowercase = e.target.value.toLowerCase();
    getsearch(lowercase);
  }
  console.log(searchvalue);
  return (
    <div id="search-bar" className="lg:block : hidden ">
      <input
        className="h-11 w-96 px-6 bg-black text-white rounded-3xl"
        type="search"
        name=""
        placeholder="Search"
        id=""
        onChange={userinput}
        style={{width:"500%",marginLeft:"-90px"}}
      />
      <Section />
    </div>
  );
}
