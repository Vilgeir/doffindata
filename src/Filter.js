import { ListItemAvatar } from "@material-ui/core";
import React, { useState } from "react";
import cpvMain from "./cpvmain.json";
import count from "./data/count.json";

function Filter() {
  const [input, setInput] = useState("not checked");
  const [check, setCheck] = useState(
    cpvMain.map((item) => ({ cpv: item.cpv, checked: false }))
  );
  const [data, setData] = useState();

  let newCount = Object.values(count)[0];

  const handleChange = (e) => {
    let isChecked = check;
    isChecked.forEach((item) => {
      item.cpv === e.target.value && (item.checked = e.target.checked);
    });
    setCheck(isChecked);
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
          </div>
        ))}
      </form>
    </div>
  );
}

export default Filter;
