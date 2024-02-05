import "./index.css";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { remove, updateAmount } from "./slice";
import { Fragment } from "react";

import { CartItem } from './item'

export function CartList() {
    const { value, list } = useSelector((state: RootState) => ({
        value: state.counter.value,
        list: state.cart.list,
    }));

    const dispatch = useDispatch();

    return (
        <div className="list">
            <div className="list__title">Cart</div>

            <div className="list__content">
                {list.map((item)=> (
                    <Fragment key={item.id}>
                        <CartItem {...item} onAmountChange={(amount)=>dispatch(updateAmount({amount, id: item.id}))
                        }
                        onRemove={()=>dispatch(remove({id: item.id}))}
                        />
                    </Fragment>
                    ))
                }

            </div>
        </div>
    )
}