import Footer from "../components/Footer";
import Header from "../components/Header"
import {Link} from "react-router-dom";

function Products() {
  return (
    <>
    <Header/>
    <main className="container py-4">
      <h1>Products</h1>

      <div className="card d-flex flex-row mb-4">
        <img
          src="https://images.pexels.com/photos/3907507/pexels-photo-3907507.jpeg?auto=compress&cs=tinysrgb&w=600"
          style={{ width: "30%", height: "200px", objectFit: "cover" }}
          alt="Product 1"
        />
        <div className="card-body">
          <h5 className="card-title">Product 1</h5>
          <p className="card-text">
          Description of Product 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p className="text-muted">Price: $99.99</p>
          <Link to="/products/1" className="btn btn-primary">Read More</Link>
        </div>
      </div>

      <div className="card d-flex flex-row mb-4">
        <img
          src="https://images.pexels.com/photos/1187317/pexels-photo-1187317.jpeg?auto=compress&cs=tinysrgb&w=600"
          style={{ width: "30%", height: "200px", objectFit: "cover" }}
          alt="Product 2"
        />
        <div className="card-body">
          <h5 className="card-title">Product 2</h5>
          <p className="card-text">
          Description of Product 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p className="text-muted">Price: $129.99</p>
          <Link to="/products/2" className="btn btn-primary">Read More</Link>
        </div>
      </div>

      <div className="card d-flex flex-row mb-4">
        <img
          src="https://images.pexels.com/photos/3910071/pexels-photo-3910071.jpeg?auto=compress&cs=tinysrgb&w=600"
          style={{ width: "30%", height: "200px", objectFit: "cover" }}
          alt="Product 3"
        />
        <div className="card-body">
          <h5 className="card-title">Product 3</h5>
          <p className="card-text">
          Description of Product 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p className="text-muted">Price: $79.99</p>
          <Link to="/products/3" className="btn btn-primary">Read More</Link>
        </div>
      </div>

      <div className="card d-flex flex-row mb-4">
        <img
          src="https://images.pexels.com/photos/2866796/pexels-photo-2866796.jpeg?auto=compress&cs=tinysrgb&w=600"
          style={{ width: "30%", height: "200px", objectFit: "cover" }}
          alt="Product 4"
        />
        <div className="card-body">
          <h5 className="card-title">Product 4</h5>
          <p className="card-text">
          Description of Product 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p className="text-muted">Price: $147.99</p>
          <Link to="/products/4" className="btn btn-primary">Read More</Link>
        </div>
      </div>
    </main>
    <Footer/>
    </>
  );
}

       export default Products;
