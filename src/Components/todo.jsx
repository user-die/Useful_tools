import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Trash3, Pencil, Check2 } from "react-bootstrap-icons";
import { useFormik } from "formik";
import SideBar from "./sideBar";
import cn from 'classnames';
import { addTodo, removeTodo, renameTodo, completeTodo } from "../store/todoSlice";
//import uniqueId from "lodash.uniqueid";

export default () => {
  const todos = useSelector((state) => state.todo.value);
  const store = [];

  const [list, setList] = useState([]);

  const [id, setId] = useState();
  const [status, setStatus] = useState("all");

  const formik = useFormik({
    initialValues: {
      task: "",
    },
    onSubmit: (values, { resetForm }) => {
      store.dispatch({ type: "INCREMENT" });
      resetForm();
    },
  });

  function deleteTask(e) {
    store.dispatch({ type: "DECREMENT" });
  }

  function rename(id, task) {
    setList((list) => {
      const copyList = [...list];
      copyList.splice(
        copyList.indexOf(copyList.filter((el) => el.id === id)[0]),
        1,
        {
          value: task,
          status: copyList.filter((el) => el.id === id)[0].status,
          id: copyList.filter((el) => el.id === id)[0].id,
        }
      );
      return copyList;
    });
  }

  function doneTask(e) {
    setList((list) => {
      const copyList = [...list];
      copyList.splice(
        copyList.indexOf(copyList.filter((el) => el.id === e.target.id)[0]),
        1,
        {
          value: copyList.filter((el) => el.id === e.target.id)[0].value,
          status: !copyList.filter((el) => el.id === e.target.id)[0].status,
          id: copyList.filter((el) => el.id === e.target.id)[0].id,
        }
      );
      return copyList;
    });
  }

  return (
    <div className="container pt-5">
      <SideBar />
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-title text-center fs-1 fw-bold">
              <p className="fs-1 fw-bold">Список задач</p>
            </div>
            <div className="card-body">
              <form className="mx-5" onSubmit={formik.handleSubmit}>
                <div className="row">
                  <div className="col-10">
                    <input
                      name="task"
                      className="form-control"
                      onChange={formik.handleChange}
                      value={formik.values.task}
                    ></input>
                  </div>
                  <div className="col-2">
                    <button type="submit" className="btn btn-primary flex-column">
                      Добавить
                    </button>
                  </div>
                </div>
              </form>
              <div className="container d-flex" style={{ height: "600px" }}>
                <ol className="w-100">
                  {store &&
                    status === "all" &&
                    list.map((el) => (
                      <li className="m-2 container" key={el.id} id={el.id}>
                        <div className="row">
                          <p
                            className="col-8"
                            style={
                              el.status
                                ? { textDecoration: "line-through" }
                                : {}
                            }
                          >
                            {el.value}
                          </p>
                          <button
                            id={el.id}
                            className="mx-1 btn btn-success "
                            onClick={doneTask}
                          >
                            <Check2 id={el.id} />
                          </button>
                          <button
                            id={el.id}
                            className="mx-1 btn btn-danger"
                            onClick={deleteTask}
                          >
                            <Trash3 id={el.id} />
                          </button>
                          <button className="mx-1 btn btn-warning" id={el.id}>
                            <Pencil id={el.id} />
                          </button>
                        </div>
                      </li>
                    ))}

                  {list &&
                    status === "complete" &&
                    list
                      .filter((el) => el.status === true)
                      .map((el) => (
                        <li className="m-2 container" key={el.id} id={el.id}>
                          <div className="row">
                            <p
                              className="col-8"
                              style={
                                el.status
                                  ? { textDecoration: "line-through" }
                                  : {}
                              }
                            >
                              {el.value}
                            </p>
                            <button
                              id={el.id}
                              className="mx-1 btn btn-success "
                              onClick={doneTask}
                            >
                              <Check2 id={el.id} />
                            </button>
                            <button
                              id={el.id}
                              className="mx-1 btn btn-danger"
                              onClick={deleteTask}
                            >
                              <Trash3 id={el.id} />
                            </button>
                            <button
                              className="mx-1 btn btn-warning"
                              onClick={(e) => {
                                setId(e.target.id);
                              }}
                              id={el.id}
                            >
                              <Pencil id={el.id} />
                            </button>
                          </div>
                        </li>
                      ))}

                  {list &&
                    status === "notComplete" &&
                    list
                      .filter((el) => el.status === false)
                      .map((el) => (
                        <li className="m-2 container" key={el.id} id={el.id}>
                          <div className="row">
                            <p
                              className="col-8"
                              style={
                                el.status
                                  ? { textDecoration: "line-through" }
                                  : {}
                              }
                            >
                              {el.value}
                            </p>
                            <button
                              id={el.id}
                              className="mx-1 btn btn-success "
                              onClick={doneTask}
                            >
                              <Check2 id={el.id} />
                            </button>
                            <button
                              id={el.id}
                              className="mx-1 btn btn-danger"
                              onClick={deleteTask}
                            >
                              <Trash3 id={el.id} />
                            </button>
                            <button className="mx-1 btn btn-warning" id={el.id}>
                              <Pencil id={el.id} />
                            </button>
                          </div>
                        </li>
                      ))}
                </ol>
              </div>
              <div className="container">
                <div>
                  <button
                    className={cn('flex-column btn mx-2', 
                      status === "all"
                        ? "btn-primary"
                        : "btn-secondary"
                    )}
                    onClick={() => setStatus("all")}
                  >
                    Все задачи
                  </button>
                  <button
                    className={cn('flex-column btn mx-2', 
                    status === "complete"
                      ? "btn-primary"
                      : "btn-secondary"
                  )}
                    onClick={() => setStatus("complete")}
                  >
                    Завершённые
                  </button>
                  <button
                    className={cn('flex-column btn mx-2', 
                    status === "notComplete"
                      ? "btn-primary"
                      : "btn-secondary"
                  )}
                    onClick={() => setStatus("notComplete")}
                  >
                    Не завершённые
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
