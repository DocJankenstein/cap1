import React from "react";
import recipes from "../recipes";
import Swa1 from "sweetalert2";

const Menu = () => {
// console.log(recipes);
const handleOrder = (id) => {
Swal.fire({
title: "Are you sure?",
text: "You will not be able to revert this!",
icon: "warning",
showCancelButton: true,
confirmButtonColor: "#3085d6",
cancelButtonColor: "#d33",
confirmButtonText: "Yes, order it!",
}).then((result) => {
if (result.isConfirmed) {
Swal.fire("Ordered!", "Your order has been placed.", "success");
}
});
};

return (
<div className="menu-container">
<div className="menu-header">
<h2>On special this week!</h2>
<button>Order</button>
</div>

<div className="cards">
{recipes.map((recipe) => (
<div key={recipe.id} className="menu-items">
<div className="menu-item-image">
<img src={recipe.image} alt={recipe.name} />
<div className="menu-item-content">
<h5>{recipe.title}</h5>
<p>{recipe.price}</p>
</div>
<p>{recipe.description}</p>
<button className="orderbtn" onClick={() => handleOrder(recipe.id)}>Order</button>
</div>
</div>
))}
</div>
</div>
);
};

export default Menu;