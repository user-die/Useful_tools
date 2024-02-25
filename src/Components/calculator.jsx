import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSymbol, removeSymbol, calcResult } from "../store/calcSlice";
import uniqueId from "lodash.uniqueid";
import SideBar from "./sideBar";

export default () => {
  const [countNumber, SetCountNumber] = useState();
  const [memory, setMemory] = useState();
  const [switchType, setSwitchType] = useState(true);

  const symbols = [
    ["%", "√", "x²", "1/x"],
    ["CE", "C", "⌫", "/"],
    ["7", "8", "9", "X"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["±", "0", ",", "="],
  ];

  const operators = ["%", "√", "x²", "1/x", "CE", "C", "⌫", "±"];

  const value = useSelector((state) => state.calculator.value);

  const dispatch = useDispatch();

  const addSymb = (value) => dispatch(addSymbol(value));

  const getValue = (x) => {
    switch (x) {
      /*
      case "=":
        (x) => dispatch(calcResult(x));
        break;
      case "⌫":
        (x) => dispatch(removeSymbol(x));
        break;
        */
      default:
        addSymb(x);
        break;
    }
  };

  return (
    <div style={{ height: "100vh" }}>
      <SideBar />
      <div className="container h-100">
        <div className="row h-100">
          <span
            className="mx-auto align-self-center"
            style={{ width: "400px" }}
          >
            <button>MC</button>
            <button>MR</button>
            <button>M+</button>
            <button>M-</button>
            <button>MS</button>
            <button>M</button>
            {countNumber && <p>{countNumber}</p>}

            <form style={{ width: "207px", margin: "5px 0" }}>
              <input
                autoFocus
                style={{ width: "100%" }}
                value={value.join("")}
              ></input>
            </form>

            <table>
              <tbody>
                {symbols.map((el) => {
                  return (
                    <tr key={uniqueId()}>
                      {el.map((cell) => {
                        return (
                          <th>
                            <button value={cell} onClick={getValue()}>
                              {cell}
                            </button>
                          </th>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>

            {switchType === false && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                }}
              >
                {memory && memory.map((el) => <div>{el}</div>)}
              </div>
            )}

            <p>{eval}</p>
          </span>
        </div>
      </div>
    </div>
  );
};
