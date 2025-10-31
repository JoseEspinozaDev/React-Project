import React from "react";

function Footer() {
  return (
    <footer>
      <div className="container">
        <span className="text-muted"><span>&copy; {new Date().getFullYear()}</span>  Place sticky footer content here.</span>
      </div>
    </footer>
  );
}
export default Footer;
