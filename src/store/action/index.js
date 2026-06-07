export const addCart=(product)=>{
    return {
        type:"ADDITEM",
        payload: product
    }
};

export const delCart=(product)=>{
    return {
        type:"DELITEM",
        payload:product
    }
};

export const removeCart=(product)=>{
    return {
        type:"REMOVEITEM",
        payload:product
    }
}

export const addWishList=(product)=>{
    return {
        type:"ADDWISH",
        payload:product
    }
};

export const removeWishList=(product)=>{
    return {
        type:"DELWISH",
        payload:product
    }
};

export const emptyCart=(product)=>{
    return {
        type:"EMPTYCART",
        payload:product
    }
};

// 1. Initial State Definition


// 2. THE ACTION CREATOR: Handles the asynchronous backend fetch
export const fetchAndSearchItems = (searchTerm="") => {
  return async (dispatch) => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json(); // It is already an array, no Object.values() needed
      console.log(data);
      // Send the fetched data along with the search keyword to the reducer
      dispatch({
        type: "SEARCH",
        payload: {
          products: data,
          keyword: searchTerm
        }
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
};


