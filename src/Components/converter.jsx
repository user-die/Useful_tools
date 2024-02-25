import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { changeType } from "../store/convSlice";
import jsonData from "./data.json";
import uniqueId from "lodash.uniqueid";

import SideBar from "./sideBar";

export default () => {
  const type = useSelector((state) => state.converter.type);

  const dispatch = useDispatch();

  const typeData = (Object.entries(jsonData).filter((el) => el[0] === type)[0]);

  const formik = useFormik({
    initialValues: {
      input1: "",
      input2: "",
      select1: "meters",
      select2: "meters",
    },
  });

  function convent(type, value1, value2) {
    const data = jsonData;

    //console.log(data[type][value1] / data[type][value2]);

    //console.log(data[type][value1] * data[type][value2]);
  }

  //convent(converterType, formik.values.select1, formik.values.select2);

  return (
    <div className="container">
      <SideBar />

      <div className="conv">
        <select value={type} onChange={(e) => dispatch(changeType(e.target.value))} className="rounded-3" name='type'>
          {Object.keys(jsonData).map((el) =>  <option value={el} id={uniqueId()} key={uniqueId}>{el}</option>)}
        </select>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "20vw",
            margin: "0 auto",
          }}
        >
          <input
            name="input1"
            id={1}
            value={formik.values.input1}
            onChange={formik.handleChange}
            className="rounded-3"
          />

            <select
              name="select1"
              id={3}
              style={{ margin: "10px 0" }}
              value={formik.values.select1}
              onChange={formik.handleChange}
              className="rounded-3"
            >
              {Object.keys(typeData[1]).map((el) => 
                <option id={uniqueId()} key={uniqueId()} value={el}>{el}</option>
              )}
            </select>

            <input
            name="input2"
            id={2}
            value={formik.values.input2}
            onChange={formik.handleChange}
            className="rounded-3"
          />
      
            <select
              name="select2"
              id={4}
              style={{ margin: "10px 0" }}
              value={formik.values.select1}
              onChange={formik.handleChange}
              className="rounded-3"
            >
              {Object.keys(typeData[1]).map((el) => 
                <option id={uniqueId()} key={uniqueId()} value={el}>{el}</option>
              )}
            </select>
      
        </form>
      </div>
    </div>
  );
};
