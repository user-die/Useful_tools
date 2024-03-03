import { NavLink } from "react-router-dom";
import { CardChecklist } from "react-bootstrap-icons";

export default () => {
  return (
    <div className="h-100 bg-primary-subtle d-flex flex-column position-fixed top-50 start-0 translate-middle-y z-1">
      <NavLink
        to="/todo"
        className="btn btn-primary rounded-0"
        style={{ width: "100px", display: "block", height: "100px" }}
      >
        <CardChecklist />
        Todo
      </NavLink>

      <NavLink
        to="/time"
        className="btn btn-primary rounded-0"
        style={{ width: "100px", display: "block", height: "100px" }}
      >
        Часы
      </NavLink>

      <NavLink
        to="/converter"
        className="btn btn-primary rounded-0"
        style={{ width: "100px", display: "block", height: "100px" }}
      >
        Конвертер
      </NavLink>

      <NavLink
        //to="/calculator"
        className="btn btn-primary rounded-0"
        style={{ width: "100px", display: "block", height: "100px" }}
      >
        Калькулятор (в разработке)
      </NavLink>

      <NavLink
        //to="/chess"
        className="btn btn-primary rounded-0"
        style={{ width: "100px", display: "block", height: "100px" }}
      >
        Шахматы (в разработке)
      </NavLink>

      <NavLink
        //to="/chess"
        className="btn btn-primary rounded-0"
        style={{ width: "100px", display: "block", height: "100px" }}
      >
        Бинго (в разработке)
      </NavLink>
    </div>
  );
};
