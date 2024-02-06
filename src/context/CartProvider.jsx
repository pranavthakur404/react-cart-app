import { createContext, useContext, useReducer } from "react";

const cartContext = createContext();

function CartProvider({ children }) {
  function reducer(cartData, action) {
    if (action.type == "ADD_ITEM") {
      return [...cartData, action.payload];
    }

    if (action.type == "INC_QUANT") {
      return cartData.map((data) => {
        if (data.id == action.payload) {
          return { ...data, quantity: data.quantity + 1 };
        } else {
          return { ...data };
        }
      });
    }

    if (action.type == "DEC_QUANT") {
      return cartData.map((data) => {
        if (data.id == action.payload) {
          if (data.quantity > 1) {
            return { ...data, quantity: data.quantity - 1 };
          } else {
            return { ...data };
          }
        } else {
          return { ...data };
        }
      });
    }

    if (action.type == "REMOVE") {
      return cartData.filter((data) => {
        return data.id !== action.payload;
      });
    }

    return cartData;
  }
  const [cartData, dispatch] = useReducer(reducer, []);

  function addItem(newData) {
    dispatch({
      type: "ADD_ITEM",
      payload: newData,
    });
  }

  function removeItem(id) {
    dispatch({
      type: "REMOVE",
      payload: id,
    });
  }

  function increaseQuant(id) {
    dispatch({
      type: "INC_QUANT",
      payload: id,
    });
  }

  function decreaseQuant(id) {
    dispatch({
      type: "DEC_QUANT",
      payload: id,
    });
  }

  return (
    <cartContext.Provider
      value={{ addItem, cartData, removeItem, increaseQuant, decreaseQuant }}
    >
      {children}
    </cartContext.Provider>
  );
}

export function useCartContext() {
  return useContext(cartContext);
}

export default CartProvider;
