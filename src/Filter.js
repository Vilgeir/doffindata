import { ListItemAvatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import cpvMain from "./cpvmain.json";
import count from "./data/count.json";
import data from "./data/doffin-bach-default-rtdb-F02_2014-export.json";
import CPVcodes from "./data/cpv.json";

function Filter() {
  const [input, setInput] = useState("not checked");
  const [check, setCheck] = useState(
    cpvMain.map((item) => ({ cpv: item.cpv, checked: false }))
  );
  const [data, setData] = useState();
  const [cpvstate, setCpv] = useState(null);
  const [subkat, setSubKat] = useState();
  const [cpvName, setCpvName] = useState([]);
  const [chooseSubkat, setChooseSubkat] = useState();

  useEffect(() => {
    let arr = [];
    if (subkat) {
      let hello = Object.keys(subkat).filter((e) => e.length === 8);
      console.log(hello);
      let test2 = hello.map((item) => item.slice(0, 3));
      // console.log(test2)
      for (let [k, v] of Object.entries(CPVcodes)) {
        hello.includes(k) && arr.push([v, k]);
      }
      console.log(arr);

      let newArr = arr.filter(
        (value, index, arr) => arr.indexOf(value) == index
      );
      setCpvName(newArr);
    }
  }, [subkat]);

  useEffect(() => {
    setSubKat(newCount[cpvstate]);
  }, [cpvstate]);

  let newCount = Object.values(count)[0];

  const handleChange = (e) => {
    let isChecked = check;
    isChecked.forEach((item) => {
      item.cpv === e.target.value && (item.checked = e.target.checked);
    });
    setCheck(isChecked);
    setCpv(e.target.value);
  };

  const handleClick = (e) => setChooseSubkat(e.target.value);
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
            {console.log(cpvName)}
            {cpvName
              ? cpvName.map((e) => (
                  <button className="button" value={e[1]} onClick={handleClick}>
                    {e[0]} (
                    {newCount[e[1].substring(0, 2) + "000000"][e[1]].count})
                  </button>
                ))
              : ""}
          </div>
        ))}
      </form>
    </div>
  );
}

export default Filter;
