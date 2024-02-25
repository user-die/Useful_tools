import { Link } from "react-router-dom";

export default () => {
  return (
    <div className="bg-primary-subtle rounded-3 py-5 px-2 d-flex flex-column gap-3 position-fixed top-50 start-0 translate-middle-y justify-content-center z-1">
      <Link
        to="/todo"
        className="btn btn-primary mx-auto"
        style={{ width: "110px", display: "block" }}
      >
        Todo
      </Link>

      <Link
        to="/converter"
        className="btn btn-primary mx-auto"
        style={{ width: "110px", display: "block" }}
      >
        Конвертер
      </Link>

      <Link
        to="/calculator"
        className="btn btn-primary mx-auto"
        style={{ width: "110px", display: "block" }}
      >
        Калькулятор
      </Link>

      <Link
        to="/chess"
        className="btn btn-primary mx-auto"
        style={{ width: "110px", display: "block" }}
      >
        Шахматы
      </Link>

      <Link
        to="/chess"
        className="btn btn-primary mx-auto"
        style={{ width: "110px", display: "block" }}
      >
        Часы
      </Link>
    </div>
  );
};
