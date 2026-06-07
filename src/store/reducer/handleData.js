let cart = JSON.parse(localStorage.getItem("cart")) || [];
let wishList = JSON.parse(localStorage.getItem("wishList")) || [];

export const handleCart = (state = cart, action) => {
  const product = action.payload;
  switch (action.type) {
    case "ADDITEM": {
      const exist = state.find((x) => x.id === product.id);
      let updatedCart;
      if (exist) {
        updatedCart = state.map((x) => (x.id === product.id ? { ...x, quantity: x.quantity + 1 } : x));
      } else {
        updatedCart = [...state, { ...product, quantity: 1 }];
      }
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    }

    case "DELITEM": {
      const exist1 = state.find((x) => x.id === product.id);
      if (!exist1) return state;
      let updatedCart;
      if (exist1.quantity === 1) {
        updatedCart = state.filter((x) => x.id !== exist1.id);
      } else {
        updatedCart = state.map((x) => (x.id === product.id ? { ...x, quantity: x.quantity - 1 } : x));
      }
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    }

    case "REMOVEITEM": {
      const updatedCart = state.filter((x) => x.id !== product.id);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    }

    default:
      return state;
  }
};

export const handleWishList = (state = wishList, action) => {
  const product = action.payload;
  switch (action.type) {
    case "ADDWISH": {
      const exist = state.find((x) => x.id === product.id);
      if (exist) return state;
      const updatedWish = [...state, { ...product }];
      localStorage.setItem("wishList", JSON.stringify(updatedWish));
      return updatedWish;
    }

    case "DELWISH": {
      const exist1 = state.find((x) => x.id === product.id);
      if (!exist1) return state;
      const updatedWish = state.filter((x) => x.id !== product.id);
      localStorage.setItem("wishList", JSON.stringify(updatedWish));
      return updatedWish;
    }

    default:
      return state;
  }
};

const initialState = {
  allItems: [], // Holds the raw backend master list
  filteredItems: [], // Holds the items filtered by search
};
// 3. THE REDUCER: Pure function that safely updates state
export const searchItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH":
      const { products, keyword } = action.payload;
      console.log(products);

      // If there is a search keyword, filter through the fresh data
      if (keyword && keyword.trim().length > 0) {
        const searchKeyword = keyword.toLowerCase();

        const filtered = products.filter(
          (x) =>
            (x.title && x.title.toLowerCase().includes(searchKeyword)) ||
            (x.description &&
              x.description.toLowerCase().includes(searchKeyword)),
        );

        return {
          allItems: products,
          filteredItems: filtered,
        };
      }

      // If no keyword, return all products as the display state
      return {
        allItems: products,
        filteredItems: products,
      };

    default:
      return state;
  }
};
