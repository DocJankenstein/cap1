import React from "react";
import Logo from "../images/Logo.png";

const Footer = () => {
return (
<footer className="footer">
<section>
<div className="company-info">
<img src={Logo} alt="Logo" className="logo" />
<p>Started in 1937 by my grandparents who were
Greek immigrants, Little Lemon became a family
legacy. Bringing authentic Greek flavor to the 
New World, we continue this tradition of family, and 
pass on the best we have to yours!</p>
</div>
<div>
<h3>Navigation</h3>
<ul>
<li><a href="/">Home</a></li>
<li><a href="/about">About</a></li>
<li><a href="/menu">Menu</a></li>
<li><a href="Reservations">Reservations</a></li>
<li><a href="/Login">Login</a></li>
</ul>
</div>
<div>
<h3>Contact</h3>
<ul>
<li>Address:204 Pine st, Chicago</li>  
<li>Phone: (123) 456-7890</li>
<li>Email:  info@littlelemon.com</li>
</ul>
</div>
<div>
<h3>Social Media</h3>
<ul>
<li><a href="#"><i className="fab fa-facebook"></i></a></li>
<li><a href="#"><i className="fab fa-twitter"></i></a></li>
<li><a href="#"><i className="fab fa-instagram"></i></a></li>
</ul>
</div>
</section>

</footer>
)

}

export default Footer;