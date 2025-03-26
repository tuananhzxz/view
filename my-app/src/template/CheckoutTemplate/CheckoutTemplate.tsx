import React, { JSX } from "react";
import { USER_LOGIN } from "../../ultil/config";
import { Navigate } from "react-router-dom";

interface PCheckout {
  children: JSX.Element;
}

const CheckoutTemplate = (props: PCheckout) => {
  if (!localStorage.getItem(USER_LOGIN)) {
    return <Navigate to={"/"} />;
  }

  return <div>{props.children}</div>;
};

export default CheckoutTemplate;
