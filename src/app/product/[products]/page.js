async function GetProduct(productId) {
  try {
    const res = await fetch(`https://api.escuelajs.co/api/v1/products/${productId}`);
    
    console.log(res); 
     

    if (!res.ok) {
      throw new Error("Failed to fetch the product details");
    }

    return res.json();
  } catch (error) {
    throw new Error(`${error.message}`);
  }
}

export async function generateStaticParams() {
  try {
    const response = await fetch(`https://api.escuelajs.co/api/v1/products/`).then((res) => res.json());

    return response.map((resp) => ({
      params: {
        productId: resp.id.toString()
      }
    }));
  } catch (error) {
    throw new Error(`${error.message}`);
  }
}

export default async function ProductDetails({ params }) {
  try {
    const prod = await GetProduct(params.productId);
    console.log(prod);

    return (
      <div>
        <nav>
          <h2>Product Details</h2>
        </nav>
        <h2>{prod.name}</h2>
        <img src={prod.title} alt={prod.name} />
      </div>
    );
  } catch (error) {
    return <div>Error: {error.message}</div>;
  }
}
