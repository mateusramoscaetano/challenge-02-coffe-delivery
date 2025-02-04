import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { Success } from "../pages/success";
import { DefaultLayout } from "../layouts/default-layout";
import { CheckoutFormulary } from "../pages/checkout/components/checkout-form";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<CheckoutFormulary />} />
        <Route path="/success" element={<Success />} />
      </Route>
    </Routes>
  );
}
