import { useState } from "react";
import jsonData from "./data.json";
import { useFormik } from "formik";
import SideBar from "./sideBar";

export default () => {
  const [converterType, setConverterType] = useState("length");

  const formik = useFormik({
    initialValues: {
      input1: "",
      input2: "",
      select1: "meters",
      select2: "meters",
    },
    //onChange: convent("time", select1),
  });

  function convent(type, value1, value2) {
    const data = jsonData;

    console.log(data[type][value1] / data[type][value2]);

    //console.log(data[type][value1] * data[type][value2]);
  }

  convent(converterType, formik.values.select1, formik.values.select2);

  return (
    <div>
      <SideBar />

      <div className="conv">
        <button>q</button>
        <p>Время</p>
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
          />
          {converterType === "length" && (
            <select
              name="select1"
              id={3}
              style={{ margin: "10px 0" }}
              value={formik.values.select1}
              onChange={formik.handleChange}
            >
              <option value="nanometers">нанометры</option>
              <option value="microns">микроны</option>
              <option value="millimeters">миллиметры</option>
              <option value="centimeters">сантиметры</option>
              <option value="meters">метры</option>
              <option value="kilometers">киллометры</option>
            </select>
          )}

          {converterType === "time" && (
            <select
              name="select1"
              id={3}
              style={{ margin: "10px 0" }}
              value={formik.values.select1}
              onChange={formik.handleChange}
            >
              <option value="microseconds">микросекунд</option>
              <option value="milliseconds">миллисекунд</option>
              <option value="seconds">секунд</option>
              <option value="minuts">минут</option>
              <option value="hours">часов</option>
              <option value="days">дней</option>
              <option value="weeks">недель</option>
              <option value="mounths">месяцев</option>
              <option value="years">лет</option>
              <option value="centuries">веков</option>
            </select>
          )}
          <input
            name="input2"
            id={2}
            value={formik.values.input2}
            onChange={formik.handleChange}
          />

          {converterType === "length" && (
            <select
              name="select1"
              id={3}
              style={{ margin: "10px 0" }}
              value={formik.values.select2}
              onChange={formik.handleChange}
            >
              <option value="nanometers">нанометры</option>
              <option value="microns">микроны</option>
              <option value="millimeters">миллиметры</option>
              <option value="centimeters">сантиметры</option>
              <option value="meters">метры</option>
              <option value="kilometers">киллометры</option>
            </select>
          )}

          {converterType === "time" && (
            <select
              name="select2"
              id={4}
              style={{ margin: "10px 0" }}
              value={formik.values.select2}
              onChange={formik.handleChange}
            >
              <option value="microseconds">микросекунд</option>
              <option value="milliseconds">миллисекунд</option>
              <option value="seconds">секунд</option>
              <option value="minuts">минут</option>
              <option value="hours">часов</option>
              <option value="days">дней</option>
              <option value="weeks">недель</option>
              <option value="mounths">месяцев</option>
              <option value="years">лет</option>
              <option value="centuries">веков</option>
            </select>
          )}
        </form>
      </div>
    </div>
  );
};
