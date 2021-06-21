import React, { useEffect, useState } from "react";
import { Input } from "semantic-ui-react";
import { useRouter } from "next/router";
import axios from "axios";
import baseUrl from "../../utils/baseUrl";
import cookie from "js-cookie";
import catchErrors from "../../utils/catchErrors";

function AddProductToCart({ user, productId }) {
  const router = useRouter();
  const [qty, setQty] = useState(1);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    let timeout;
    if (success) {
      timeout = setTimeout(() => setSuccess(false), 3000);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [success]);

  function handleAddProductToCart() {
    try {
      setLoading(true);
      const url = `${baseUrl}/api/cart`;
      const payload = { qty, productId };

      const token = cookie.get("token");
      const headers = { headers: { Authorization: token } };

      axios.put(url, payload, headers);
      setSuccess(true);
    } catch (error) {
      catchErrors(error, window.alert);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Input
      type="number"
      min="1"
      value={qty}
      onChange={({ target }) => setQty(Number(target.value))}
      placeholder="Quantity"
      action={
        user && success
          ? {
              color: "blue",
              content: "Item added!",
              icon: "plus cart",
              disabled: true,
            }
          : user
          ? {
              color: "orange",
              content: "Add to cart",
              icon: "plus cart",
              loading,
              disabled: loading,
              onClick: handleAddProductToCart,
            }
          : {
              color: "blue",
              content: "Sign up to purchase",
              icon: "signup",
              onClick: () => router.push("/signup"),
            }
      }
    />
  );
}

export default AddProductToCart;
