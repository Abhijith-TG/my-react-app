import React, {useContext} from 'react'
import CategoryCard from './CategoryCard';
import Carousel from 'react-bootstrap/Carousel';
import { EcommerceContext } from '../services/ApiFetchContext';


function Home() {
  const categories = [
    { name: "Electronics", image:"https://imgs.search.brave.com/v3I57PIleybtBl1OGCnZ7LUj_jWVs-hF3wZqHFT13RA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9iYWNrZ3JvdW5k/LXdpdGgtaG9tZS1h/cHBsaWFuY2VzLWhv/dXNlaG9sZC1pdGVt/cy1zYWxlLXNob3Bw/aW5nLWFkdmVydGlz/aW5nLXBvc3Rlcl8x/MTk3Nzk3LTI1OTAy/Ni5qcGc_c2VtdD1h/aXNfaHlicmlk"},
    { name: "Men's Clothing", image:"https://imgs.search.brave.com/_yj-CXJfOIUIctiHg-FhMGy3kXTLW1bHZuzXwfHf2g0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNjI2/MDg1ODY4L3Bob3Rv/L21lbnMtYWNjZXNz/b3JpZXMuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPU00UXFW/eGVVeU1lQ2hmTXFP/dWNmeHRWYVZNWjUx/ZzAwLTJ0bGNfVmdy/eDA9"},
    { name: "Women's Clothing", image:"https://imgs.search.brave.com/zxxMGyc9iQOdHn7EIHvozHx0O7zDORN_sIWWK-twSOo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9zdW1tZXItdHJl/bmR5LXdvbWFuLWNs/b3RoZXMtYWNjZXNz/b3JpZXNfNDA4Nzk4/LTY4OTQuanBnP3Nl/bXQ9YWlzX2h5YnJp/ZA"},
    { name: "Jewellery", image:"https://imgs.search.brave.com/xanvvYEPhUcuz53S4DXNNw7cXchnprKz_X5XbRk-adg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA5LzU2LzYzLzgx/LzM2MF9GXzk1NjYz/ODEyMl9COW8wbk5E/ZkRjWVhLemlKS1NQ/ZDhZb3k4NG5PZU1M/WS5qcGc"}
  ];
  const products = useContext(EcommerceContext)
  console.log(products);

  const getRandomProducts = (data, count) => {
    if (!data || data.length === 0) return [];
    const shuffled = [...data].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const topPicks = getRandomProducts(products, 6); 
  
  return (
    <>
    
      <div className="categories-container">
        {categories.map((category, index) => (
          <CategoryCard key={index} name={category.name} image={category.image} />
        ))}
      </div>

      <Carousel style={{paddingTop:"40px", paddingBottom:"20px"}}>
      <Carousel.Item interval={1500}>
      <img
          className="d-block w-100 custom-cimage"
          src={"https://img.freepik.com/premium-vector/vector-illustration-happy-holi-sale-banner-template-app-website_181203-14044.jpg?ga=GA1.1.370649366.1731832645&semt=ais_hybrid"}
          alt="First slide"
          style={{height:"300px"}}
        />
      </Carousel.Item>
      <Carousel.Item interval={1500}>
      <img
          className="d-block w-100 custom-cimage"
          src={"https://img.freepik.com/free-vector/raksha-bandhan-sale-banner-with-golden-rakhi_1017-32977.jpg?ga=GA1.1.370649366.1731832645&semt=ais_hybrid"}
          alt="First slide"
          style={{height:"300px"}}
        />
      </Carousel.Item>
      <Carousel.Item interval={1500}>
      <img
          className="d-block w-100 custom-cimage"
          src={"https://img.freepik.com/free-vector/pomegranate-cosmetic-bottles-beauty-banner_33099-2264.jpg?t=st=1732178702~exp=1732182302~hmac=4362c9f87d883031495466393925c27f4d2782fdee59c4151676acd0132e801a&w=1380"}
          alt="First slide"
          style={{height:"300px"}}
        />
      </Carousel.Item>
    </Carousel>
    <div style={{fontSize: "25px", fontStyle:"italic", marginLeft:"10px", paddingBottom:"5px"}}><b><u>Top Picks &gt;</u> </b></div>
    <section>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "30px", justifyContent:"center"}}>
          {topPicks.map((product) => (
            <div className='toppicks'
              key={product.id}
              style={{
                border: "0px solid grey",
                padding: "10px",
                width: "200px",
                textAlign: "center",
                borderRadius:"5px"
              }}
            >
              <img
                src={product.image}
                alt={product.title}
                style={{ width: "100px", height: "100px", objectFit: "contain" }}
              />
              <h3 style={{ fontSize: "16px", margin: "10px 0" }}>
                {product.title}
              </h3>
              <p style={{ fontSize: "14px", color: "green" }}>
                ${product.price}
              </p>
              <button className='addcart'>Add to Cart</button>
            </div>
          ))}
        </div>
      </section>
      <div style={{padding:"20px"}}>&nbsp;</div>
    <div className='footer'>Powered by 2024 Hexon. All Rights Reserved</div>
    </>
  )
}

export default Home