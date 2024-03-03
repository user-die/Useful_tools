import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Trash3, Pencil, Check2 } from "react-bootstrap-icons";
import { useFormik } from "formik";
import SideBar from "./sideBar";
import cn from "classnames";
import {
  addTodo,
  removeTodo,
  renameTodo,
  toggleComplete,
} from "../store/todoSlice";
import uniqueId from "lodash.uniqueid";

//смена цвета кнопки при перечёркивании

export default () => {
  const todos = useSelector((state) => state.todo.value);

  const dispath = useDispatch();

  const [status, setStatus] = useState("all");

  const formik = useFormik({
    initialValues: {
      task: "",
    },
    onSubmit: (values, { resetForm }) => {
      dispath(addTodo(values.task));
      resetForm();
    },
  });

  const callback = (el) => (
    <li className="row my-2" key={el.id} id={el.id}>
      <p
        className="col-9 mb-0"
        id={uniqueId()}
        style={
          el.completed
            ? {
                textDecoration: "line-through",
                padding: "0",
                overflowWrap: "break-word",
              }
            : { padding: "0", overflowWrap: "break-word" }
        }
      >
        {el.text}
      </p>

      <div className="col-2 justify-content-end d-flex p-0 align-items-center">
        <button
          id={el.id}
          className="me-2 btn btn-success"
          style={{ width: "40px" }}
          onClick={() => dispath(toggleComplete(el.id))}
        >
          <Check2 id={el.id} />
        </button>
        <button
          id={el.id}
          className="me-2 btn btn-danger"
          style={{ width: "40px" }}
          onClick={() => {
            dispath(removeTodo(el.id));
          }}
        >
          <Trash3 id={el.id} />
        </button>
        <button
          className="btn btn-warning"
          id={el.id}
          style={{ width: "40px" }}
          onClick={() => dispath(renameTodo(el.id))}
        >
          <Pencil id={el.id} />
        </button>
      </div>
    </li>
  );

  return (
    <div className="container pt-5">
      <SideBar />
      <div
        className="row border rounded-4 bg-dark bg-gradient
"
      >
        <div className="col p-0">
          <div className="container p-0">
            <div className="row text-center fs-1 fw-bold">
              <p className="fs-1 fw-bold">Список задач</p>
            </div>

            <form
              className="px-5 row justify-content-between"
              style={{ maxWidth: "inherit" }}
              onSubmit={formik.handleSubmit}
            >
              <div className="col-11 p-0">
                <input
                  name="task"
                  className="form-control"
                  onChange={formik.handleChange}
                  value={formik.values.task}
                  placeholder="Введите задачу"
                  required="true"
                ></input>
              </div>
              <button
                type="submit"
                className="btn btn-primary flex-column"
                style={{ width: "95px" }}
              >
                Добавить
              </button>
            </form>

            <div
              className="row mt-2 mx-5 div"
              style={{
                height: "600px",
                overflowY: "overlay",
                overflowX: "hidden",
              }}
            >
              <ol>
                {todos && status === "all" && todos.map(callback)}

                {todos &&
                  status === "complete" &&
                  todos.filter((el) => el.completed === true).map(callback)}

                {todos &&
                  status === "notComplete" &&
                  todos.filter((el) => el.completed === false).map(callback)}
              </ol>
            </div>

            <div className="row my-3 px-5">
              <button
                className={cn(
                  "align-items-center btn me-3",
                  status === "all" ? "btn-primary" : "btn-secondary"
                )}
                style={{ flexBasis: "156px" }}
                onClick={() => setStatus("all")}
              >
                Все задачи
              </button>
              <button
                className={cn(
                  "align-items-center btn me-3",
                  status === "complete" ? "btn-primary" : "btn-secondary"
                )}
                style={{ flexBasis: "156px" }}
                onClick={() => setStatus("complete")}
              >
                Завершённые
              </button>
              <button
                className={cn(
                  "align-items-center btn",
                  status === "notComplete" ? "btn-primary" : "btn-secondary"
                )}
                style={{ flexBasis: "156px" }}
                onClick={() => setStatus("notComplete")}
              >
                Не завершённые
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
