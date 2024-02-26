import { useDispatch, useSelector } from "react-redux";
import {
  changeSelect1,
  changeSelect2,
  changeInput1,
  changeType,
  calculate,
} from "../store/convSlice";
import jsonData from "./data.json";
import uniqueId from "lodash.uniqueid";

import SideBar from "./sideBar";
import { useEffect } from "react";

export default () => {
  const converter = useSelector((state) => state.converter);

  const dispatch = useDispatch();

  const typeData = Object.entries(jsonData).filter(
    (el) => el[0] === converter.type
  )[0];

  useEffect(() => {
    dispatch(calculate());
  }, [converter.input1, converter.select1, converter.select2]);

  return (
    <div className="container">
      <SideBar />

      <div className="conv">
        <select
          value={converter.type}
          onChange={(e) => dispatch(changeType(e.target.value))}
          className="rounded-3"
          name="type"
        >
          {Object.keys(jsonData).map((el) => (
            <option value={el} id={uniqueId()} key={uniqueId}>
              {el}
            </option>
          ))}
        </select>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "20vw",
            margin: "0 auto",
          }}
        >
          <select
            name="select1"
            id={3}
            style={{ margin: "10px 0" }}
            value={converter.select1}
            onChange={(e) => dispatch(changeSelect1(e.target.value))}
            className="rounded-3"
          >
            {Object.keys(typeData[1]).map((el) => (
              <option id={uniqueId()} key={uniqueId()} value={el}>
                {el}
              </option>
            ))}
          </select>

          <input
            name="input1"
            id={1}
            value={converter.input1}
            onChange={(e) => dispatch(changeInput1(e.target.value))}
            className="rounded-3"
          />

          <select
            name="select2"
            id={4}
            style={{ margin: "10px 0" }}
            value={converter.select2}
            onChange={(e) => dispatch(changeSelect2(e.target.value))}
            className="rounded-3"
          >
            {Object.keys(typeData[1]).map((el) => (
              <option id={uniqueId()} key={uniqueId()} value={el}>
                {el}
              </option>
            ))}
          </select>

          <input
            name="input2"
            id={2}
            value={converter.input2}
            onChange={(e) => dispatch(calculate())}
            className="rounded-3"
          />
        </form>
      </div>
    </div>
  );
};
