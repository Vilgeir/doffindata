import { ListItemAvatar } from "@material-ui/core";
import React, { useState } from "react";
import cpvMain from "./cpvmain.json";
import count from "./data/count.json";

function Filter() {
  const [input, setInput] = useState("not checked");
  const [check, setCheck] = useState(
    cpvMain.map((item) => [{ cpv: item.cpv, checked: false }])
  );
  const [data, setData] = useState();

  let newCount = Object.values(count)[0];

  const handleChange = (e) => {
    console.log(e.target.value);

    setCheck((prevState) => [
      ...prevState,
      [{ cpv: e.target.value, checked: true }],
    ]);
  };

  const test = () => {
    cpvMain.map((item) => {});
  };
  console.log(check);
  //   const myInput = <h1>{input}</h1>;

  const handleChecked = () => {
    return <h1>{input}</h1>;
  };

  const hello = <input type="checkbox"></input>;

  return (
    <div>
      <h3>Dette blir et fantastisk filter</h3>
      <button>button</button>
      <form>
        {cpvMain.map((item) => (
          <div>
            <input
              type="checkbox"
              value={item.cpv}
              onClick={handleChange}
            ></input>
            <label>
              {item.cpvmain} (
              {newCount[item.cpv.substring(0, 2) + "000000"].count})
            </label>
            {console.log(check[0] ? check[0].cpv : "")}
            {check[0] ? item.cpv == check[0].cpv ? <h3>Hello</h3> : "" : ""}
            {/* {check && hello} */}
          </div>
        ))}
      </form>
    </div>
  );
}

export default Filter;
