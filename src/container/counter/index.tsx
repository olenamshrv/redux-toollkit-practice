import "./index.css";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { decrement, increment, incrementByAmount } from "./slice";

export function Counter() {
    const count = useSelector((state: RootState) => state.counter.value);

    const dispatch = useDispatch();

    return (
        <div className="counter">
            <button className="button" onClick={()=>dispatch(decrement())}>
                -
            </button>

            <span className="value">{count}</span>

            {/* <button className="button" onClick={()=>dispatch(increment())}> */}
            <button className="button" onClick={()=>dispatch(incrementByAmount({ value: 10}))}>
               +
            </button>
        </div>
    )
}