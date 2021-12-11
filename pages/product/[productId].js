import ProductDetailPage from "../../components/product/product";
import { getProductById, getTrendingProducts } from "../../helpers/api-util";

function ProductPageDetail(props) {
  const product = props.product;
  if (!product) {
    <div>
      <p>Loading...</p>
    </div>;
  }
  return (
    <section>
      <ProductDetailPage product={product} />
    </section>
  );
}
export async function getStaticProps(context) {
  const id = context.params.productId;
  const product = await getProductById(id);
  return {
    props: {
      product: product,
    },
  };
}
export async function getStaticPaths() {
  const products = await getTrendingProducts();
  const path = products.map((product) => ({
    params: { productId: product.id },
  }));
  return {
    paths: path,
    fallback: true,
  };
}
export default ProductPageDetail;
