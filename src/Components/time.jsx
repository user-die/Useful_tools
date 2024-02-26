import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateTime,
  startStopwatch,
  stopStopwatch,
  updateStopwatch,
  resetStopwatch,
  updateTimer,
  startTimer,
  stopTimer,
  resetTimer,
} from "../store/timeSlice";
import SideBar from "./sideBar";

export default () => {
  const time = useSelector((state) => state.time);

  const dispatch = useDispatch();

  useEffect(() => {
    if (time.stopwatch.enabled === false) return;
    const i = setInterval(() => {
      dispatch(updateStopwatch());
      return () => {
        clearInterval(i);
      };
    }, 10);
  }, [time.stopwatch.enabled]);

  useEffect(() => {
    if (time.timer.enabled === false) return;
    const i = setInterval(() => {
      dispatch(updateTimer());
      return () => {
        clearInterval(i);
      };
    }, 10);
  }, [time.timer.enabled]);

  return (
    <div className="container h-100">
      <SideBar />
      <div className="row">
        <div className="col-12">
          {time.time.toLocaleString("en-US", {
            dateStyle: "full",
            timeStyle: "medium",
            hour12: false,
          })}{" "}
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          Секундомер
          <p>{`${time.stopwatch.hours} : ${time.stopwatch.minutes} : ${time.stopwatch.seconds} : ${time.stopwatch.milliseconds}`}</p>
          <button
            className="btn btn-success"
            onClick={() => dispatch(startStopwatch())}
          >
            Старт
          </button>
          <button
            className="btn btn-warning"
            onClick={() => dispatch(stopStopwatch())}
          >
            Стоп
          </button>
          <button
            className="btn btn-danger"
            onClick={() => dispatch(resetStopwatch())}
          >
            Сбросить
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="mt-4">
            <form action="">
              <input type="hours" id="hours" />
              <label htmlFor="hours">Часы</label>

              <input type="minutes" id="minutes" />
              <label htmlFor="minutes">Минуты</label>

              <input type="seconds" id="seconds" />
              <label htmlFor="seconds">Секунды</label>
            </form>
          </div>
          Таймер
          <p>{`${time.timer.hours} : ${time.timer.minutes} : ${
            time.timer.seconds
          } : ${time.timer.milliseconds.toString().slice(5)}`}</p>
          <button
            className="btn btn-success"
            onClick={() => dispatch(startTimer())}
          >
            Старт
          </button>
          <button
            className="btn btn-warning"
            onClick={() => dispatch(stopTimer())}
          >
            Стоп
          </button>
          <button
            className="btn btn-danger"
            onClick={() => dispatch(resetTimer())}
          >
            Сбросить
          </button>
        </div>
      </div>
    </div>
  );
};
