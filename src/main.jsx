import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { FilterProvider } from "./Context/FilterContext.jsx";
import { ProductProvider } from "./Context/ProductContext.jsx";
import { FirebaseProvider } from "./Context/Firebase.jsx";
import { CartProvider } from "./Context/CartContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FirebaseProvider>
      <ProductProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductProvider>
    </FirebaseProvider>
  </React.StrictMode>
);
