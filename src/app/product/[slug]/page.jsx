const ProductDetails = ({ product }) => {
  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetails;

export async function getServerSideProps({ params }) {
  // Lấy dữ liệu sản phẩm từ API hoặc database dựa trên params.id
  const product = await fetchProductById(params.id);

  return {
    props: {
      product,
    },
  };
}
