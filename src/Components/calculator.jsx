import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSymbol, removeSymbol, calcResult } from "../store/calcSlice";
import SideBar from "./sideBar";

export default () => {
  const [countNumber, SetCountNumber] = useState();
  const [memory, setMemory] = useState();
  const [switchType, setSwitchType] = useState(true);

  const symbols = [
    "%",
    "√",
    "x²",
    "1/x",
    "CE",
    "C",
    "⌫",
    "/",
    "7",
    "8",
    "9",
    "X",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "±",
    "0",
    ",",
    "=",
  ];

  const value = useSelector((state) => state.calculator.value);

  const dispatch = useDispatch();

  const addSymb = (e) => dispatch(addSymbol(e.target.value));

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
            {/*switchType && (
              <table>
                <tbody>
                  <tr>
                    <th>
                      <button>%</button>
                    </th>
                    <th>
                      <button>√</button>
                    </th>
                    <th>
                      <button>x²</button>
                    </th>
                    <th>
                      <button>1/x</button>
                    </th>
                  </tr>
                  <tr>
                    <th>
                      <button>CE</button>
                    </th>
                    <th>
                      <button>C</button>
                    </th>
                    <th>
                      <button onClick={() => dispatch(removeSymbol())}>
                        ⌫
                      </button>
                    </th>
                    <th>
                      <button value={"/"} onClick={addSymb}>
                        /
                      </button>
                    </th>
                  </tr>
                  <tr>
                    <th>
                      <button value={7} onClick={addSymb}>
                        7
                      </button>
                    </th>
                    <th>
                      <button value={8} onClick={addSymb}>
                        8
                      </button>
                    </th>
                    <th>
                      <button value={9} onClick={addSymb}>
                        9
                      </button>
                    </th>
                    <th>
                      <button value={"*"} onClick={addSymb}>
                        X
                      </button>
                    </th>
                  </tr>
                  <tr>
                    <th>
                      <button value={4} onClick={addSymb}>
                        4
                      </button>
                    </th>
                    <th>
                      <button value={5} onClick={addSymb}>
                        5
                      </button>
                    </th>
                    <th>
                      <button value={6} onClick={addSymb}>
                        6
                      </button>
                    </th>
                    <th>
                      <button value={"-"} onClick={addSymb}>
                        -
                      </button>
                    </th>
                  </tr>
                  <tr>
                    <th>
                      <button value={1} onClick={addSymb}>
                        1
                      </button>
                    </th>
                    <th>
                      <button value={2} onClick={addSymb}>
                        2
                      </button>
                    </th>
                    <th>
                      <button value={3} onClick={addSymb}>
                        3
                      </button>
                    </th>
                    <th>
                      <button value={"+"} onClick={addSymb}>
                        +
                      </button>
                    </th>
                  </tr>
                  <tr>
                    <th>
                      <button>±</button>
                    </th>
                    <th>
                      <button value={0} onClick={addSymb}>
                        0
                      </button>
                    </th>
                    <th>
                      <button value={"."} onClick={addSymb}>
                        ,
                      </button>
                    </th>
                    <th>
                      <button onClick={() => dispatch(calcResult())}>=</button>
                    </th>
                  </tr>
                </tbody>
              </table>
            )*/}

            <table>
              {symbols.map((el) =>
                symbols.indexOf(el) % 5 == 0 ? (
                  <tr>
                    {" "}
                    <th>
                      <button value={el}>{el}</button>
                    </th>{" "}
                  </tr>
                ) : (
                  <th>
                    <button value={el}>{el}</button>
                  </th>
                )
              )}
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
