import Swal from "sweetalert2";
const fetchFunction = (cart, quantity, updateCart) => {
  const UpdateProductCart = async (product, quantityUpdate) => {
    const res = await fetch(`http://localhost:8000/cart/${product.id}`);
    const dataOld = await res.json();
    const { quantity } = dataOld;
    const Update = quantity + quantityUpdate;
    const Product = {
      ...product,
      quantity: Update,
    };
    const response = await fetch(`http://localhost:8000/cart/${product.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Product),
    });
    const data = await response.json();
    console.log("Data", data);
    Swal.fire(`Product is Updated`, "Product Already into cart !", "info");
  };
  const PuttProductCart = async (product, quantity) => {
    const Product = {
      ...product,
      quantity: parseInt(quantity),
    };
    const response = await fetch("http://localhost:8000/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Product),
    });
    const data = await response.json();
    if (response.status === 200 || response.status === 201) {
      updateCart();
      const { title } = data;
      Swal.fire(
        `${title} is Add to Cart`,
        "Goto cart and checkOut ",
        "success"
      );
    } else {
      Swal.fire(
        `Product is not Add to Cart`,
        "Something Went Wrong !",
        "error"
      );
    }
  };
  const DeleteProduct = (product) => {
    const { id } = product;
    fetch(`http://localhost:8000/cart/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.status === 200) {
          Swal.fire(`Product is removed from cart`, "", "error");
        } else if (response.status === 404) {
          Swal.fire(`Product Not Found !`, "", "error");
        }
      })
      .catch((err) => console.log(err))
      .finally(() => {
        updateCart();
      });
  };
  const getProductCart = async () => {
    const res = await fetch(`http://localhost:8000/cart`);
    const data = await res.json();
    const FindProduct = data.find((cartProduct) => {
      return cartProduct.id === cart.id;
    });
    if (FindProduct === undefined) {
      if (quantity <= 0) {
        Swal.fire(
          `Product is not Add to Cart`,
          "Something Went Wrong !",
          "error"
        );
      } else {
        PuttProductCart(cart, +quantity);
      }
    } else {
      if (quantity <= 0) {
        DeleteProduct(cart);
      } else {
        UpdateProductCart(cart, +quantity);
      }
    }
  };
  getProductCart();
};
export default fetchFunction;
