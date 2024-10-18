import React from "react";
import bannerImage from "../images/restauranfood.jpg";

const Header = () => {
return (
<header className="header">
<section>
<div className="banner">
<h2>Little Lemon</h2>
<h3>Chicago</h3>    
<p>The Little Lemon specializes in traditional Mediterranean cuisine with a modern flair. 
Come join us for a taste of the Old World, from our family to yours. </p>
<Link to="/booking">
<button aria-label="On Click">Reserve a table</button>
</Link>
</div>
<div className="banner-img">
<img src={bannerImg} alt=""/>
</div>
</section>
</header>
);
};

export default Header;