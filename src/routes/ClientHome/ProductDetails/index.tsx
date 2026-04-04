import ButtonInverse from "../../../components/ButtonInverse";
import ButtonPrimary from "../../../components/ButtonPrimary";
import ProductDetailsCard from "../../../components/ProductDetailsCard";
import "./styles.css";
import * as productService from "../../../services/product-service";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const params = useParams();

  const product = productService.findById(Number(params.productId));

  return (
    <main>
      <section id="product-details-section" className="dsc-container">
        {product && <ProductDetailsCard product={product} />}

        <div className="dsc-btn-page-container">
          <ButtonPrimary text="Comprar" />
          <ButtonInverse text="Inicio" />
        </div>
      </section>
    </main>
  );
}

export default ProductDetails;
