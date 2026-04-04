import ButtonInverse from "../../../components/ButtonInverse";
import ButtonPrimary from "../../../components/ButtonPrimary";
import ProductDetailsCard from "../../../components/ProductDetailsCard";
import "./styles.css";
import * as productService from "../../../services/product-service";
import { Link, useParams } from "react-router-dom";

function ProductDetails() {
  const params = useParams();

  const product = productService.findById(Number(params.productId));

  return (
    <main>
      <section id="product-details-section" className="dsc-container">
        {product && <ProductDetailsCard product={product} />}

        <div className="dsc-btn-page-container">
          <ButtonPrimary text="Comprar" />
          <Link to={"/"}>
            <ButtonInverse text="Inicio" />
          </Link>
        </div>
      </section>
    </main>
  );
}

export default ProductDetails;
