import React from "react";
import { ProductsData } from "../../data/products";
import { useParams } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";

const ProductDetail = (props) => {
  const { name } = useParams();
  const product = ProductsData.find((p) => p.name === name);

  return (
    <>
      <Header />
      <Hero />
      <div className="container mt-5 pt-5">
        <div className="d-flex justify-content-center">
          <div
            class="card rounded-lg"
            style={{
              width: "600px",
              backgroundImage:
                "linear-gradient(135.74deg, #0bb5ff 14.09%, #6dd3fe 83.81%)",
            }}
          >
            <div className="card-body">
              <div className="row">
                <div className="col-sm-12">
                  <h1 className="d-flex justify-content-center font-weight-bold">
                    {product.name}
                  </h1>
                </div>
                <div className="col-sm-12 d-flex justify-content-center mt-5">
                  <img
                    src={product.img}
                    alt={product.name}
                    class="card-img-top img-fluid"
                    style={{ width: "250px" }}
                  />
                </div>
                <div className="col-sm-12 d-flex justify-content-center mt-4">
                  <h3>{product.detail}</h3>
                </div>
                <div className="col-sm-12 d-flex justify-content-center mt-4">
                  <h4 className="font-weight-bold">{product.price}.000IDR</h4>
                </div>

                <div className="col-sm-12"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProductDetail;
