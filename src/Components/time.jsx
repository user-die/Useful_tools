import { useEffect } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {
  updateTime,
  toggleStopwatch,
  updateStopwatch,
  resetStopwatch,
  updateTimer,
  toggleTimer,
  resetTimer,
  setTimer,
  switchTimerType,
  calculateTime,
} from "../store/timeSlice";
import SideBar from "./sideBar";
import * as Yup from "yup";
import { PauseFill, PlayFill } from "react-bootstrap-icons";

export default () => {
  const time = useSelector((state) => state.time);

  const dispatch = useDispatch();

  /*
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(updateTime());
      return () => {
        clearInterval(i);
      };
    }, 1000);
  });
  */

  useEffect(() => {
    if (time.stopwatch.enabled == false) return;

    const i = setInterval(() => {
      dispatch(updateStopwatch());
    }, 10);

    return () => {
      clearInterval(i);
    };
  }, [time.stopwatch.enabled]);

  useEffect(() => {
    if (time.timer.enabled === false) return;

    const i = setInterval(() => {
      dispatch(updateTimer());
    }, 10);

    return () => {
      clearInterval(i);
    };
  }, [time.timer.enabled]);

  const form = useFormik({
    initialValues: {
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0,
    },
    validationSchema: Yup.object().shape({
      hours: Yup.number(), //.max(999, "Максимальное значение - 999"),
      minutes: Yup.number(), //.max(59, "Максимальное значение - 59"),
      seconds: Yup.number(), //.max(59, "Максимальное значение - 59"),
    }),
    onSubmit: (values, { resetForm }) => {
      dispatch(
        setTimer({
          hours: values.hours,
          minutes: values.minutes,
          seconds: values.seconds,
          milliseconds: values.milliseconds,
        })
      );
      dispatch(switchTimerType());
      dispatch(updateTimer());
      dispatch(calculateTime());

      resetForm();
    },
  });

  return (
    <div className="container mx-auto" style={{ maxWidth: "" }}>
      <SideBar />

      <div className="row bg-dark bg-gradient my-3">
        <div className="col-12">
          {time.time.toLocaleString("ru", {
            dateStyle: "full",
            timeStyle: "medium",
            hour12: false,
          })}{" "}
        </div>
      </div>

      <div className="row bg-dark bg-gradient my-3">
        <div className="col-12">
          Секундомер
          <p>{`${time.stopwatch.hours} : ${time.stopwatch.minutes} : ${time.stopwatch.seconds} : ${time.stopwatch.milliseconds}`}</p>
          <button
            className="btn btn-success"
            onClick={() => dispatch(toggleStopwatch())}
          >
            {time.stopwatch.enabled ? <PauseFill /> : <PlayFill />}
          </button>
          <button
            className="btn btn-danger"
            onClick={() => dispatch(resetStopwatch())}
          >
            Сбросить
          </button>
        </div>
      </div>

      <div className="row bg-dark bg-gradient my-3">
        <div className="col-12">
          <div className="mt-4">
            Таймер
            {time.timer.type === true ? (
              <form onSubmit={form.handleSubmit} style={{ maxWidth: "350px" }}>
                <label htmlFor="hours">Часы</label>
                <input
                  value={form.values.hours}
                  onChange={form.handleChange}
                  type="hours"
                  id="hours"
                  className={
                    form.errors.hours
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                />
                {form.errors.hours && (
                  <div className="invalid-tooltip position-static">
                    {form.errors.hours}
                  </div>
                )}

                <label htmlFor="minutes">Минуты</label>
                <input
                  value={form.values.minutes}
                  type="minutes"
                  id="minutes"
                  onChange={form.handleChange}
                  className={
                    form.errors.minutes
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                />
                {form.errors.minutes && (
                  <div className="invalid-tooltip position-static">
                    {form.errors.minutes}
                  </div>
                )}

                <label htmlFor="seconds">Секунды</label>
                <input
                  value={form.values.seconds}
                  type="seconds"
                  id="seconds"
                  onChange={form.handleChange}
                  className={
                    form.errors.seconds
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                />
                {form.errors.seconds && (
                  <div className="invalid-tooltip position-static">
                    {form.errors.seconds}
                  </div>
                )}

                <button type="submit" className="btn btn-success">
                  Подтвердить
                </button>
              </form>
            ) : (
              <div>
                <p>{`${time.timer.hours} : ${time.timer.minutes} : ${
                  time.timer.seconds
                } : ${time.timer.milliseconds.toString().slice(-2)}`}</p>
                <button
                  className="btn btn-success"
                  onClick={() => dispatch(toggleTimer())}
                >
                  {time.timer.enabled ? <PauseFill /> : <PlayFill />}
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => dispatch(resetTimer())}
                >
                  Сбросить
                </button>
                <button
                  className="btn btn-warning  "
                  onClick={() => dispatch(switchTimerType())}
                >
                  ввести
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
