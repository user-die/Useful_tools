import { useEffect, useState } from "react";
import SideBar from "./sideBar";

export default () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  function startTime() {}

  return (
    <div className="container h-100">
      <SideBar />
      <div className="row">
        <div className="col-12">
          {time.toLocaleString("en-US", {
            dateStyle: "full",
            timeStyle: "medium",
            hour12: false,
          })}{" "}
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          Секундомер
          <div>qwe</div>
          <button className="btn btn-success">Старт</button>
          <button className="btn btn-warning">Стоп</button>
          <button className="btn btn-danger">Сбросить</button>
        </div>
      </div>
    </div>
  );
};
