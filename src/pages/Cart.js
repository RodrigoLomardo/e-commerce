import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem.js";
import { ToastContainer, toast } from "react-toastify";
import StripeCheckout from "react-stripe-checkout";

const Cart = () => {
  const productData = useSelector((state) => state.bazar.productData);
  const userInfo = useSelector((state) => state.bazar.userInfo);
  const [totalAmt, setTotalAmt] = useState("");
  const [payNow, setPayNow] = useState(false);

  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    setTotalAmt(price.toFixed(2));
  }, [productData]);

  const handleCheckout = () => {
    if (userInfo) {
      setPayNow(true);
    } else {
      toast.error("Please sign in to checkout");
    }
  };
  return (
    <div>
      <div className="max-w-screen-xl mx-auto py-20 flex">
        <CartItem />
        <div className="w-1/3 bg-[#fafafa] py-6 px-4">
          <div className="flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
            <h2 className="text-2xl font-medium">total do carrinho</h2>
            <p className="flex item-center gap-4 text-base">
              Subtotal{" "}
              <span className="font-titleFont font-bold text-lg">
                R$ {totalAmt}
              </span>
            </p>
            <p className="flex items-start gap-4 text-base">
              Entrega <span>Gratis!</span>
            </p>
          </div>

          <p className="font-titleFont font-semibold flex justify-between mt-6">
            Total <span className="text-xl font-bold">R$ {totalAmt}</span>
          </p>
          <button
            onClick={handleCheckout}
            className="text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300"
          >
            seguir para pagamento
          </button>
          {payNow && (
            <div className="w-full mt-6 flex items-center justify-center">
              <StripeCheckout
                stripeKey="pk_test_51PG2cXIDqi7nOLFl7CiDuJ7cxK58mo5SyLkDe0hXwulPOgSbaomU0Ofg9PVl8tphqaMzd86aFfOfg2Us9CJoGOq8004KwWXEx4"
                name="e-commerce"
                amount={totalAmt * 100}
                label="Pay to e-commerce"
                description={`Your payment amount is ${totalAmt}`}
                // token={payment}
                email={userInfo.email}
              />
            </div>
          )}
        </div>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Cart;
