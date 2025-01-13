import React, { useState, useEffect } from "react";
import { Button, Form, FormControl, Modal, Table } from "react-bootstrap";
import "../styles/addProductPage.css";

function AddNewProduct() {
  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    image: null,
  });

  const [showProductModal, setShowProductModal] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  // Fetch products from the API
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        // Map API products to match our local structure
        const apiProducts = data.map((item) => ({
          title: item.title,
          price: item.price,
          description: item.description,
          category: item.category,
          image: item.image, // URL for image from API
        }));
        setProducts(apiProducts);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    if (type === "file") {
      setCurrentProduct({ ...currentProduct, [name]: e.target.files[0] });
    } else {
      setCurrentProduct({ ...currentProduct, [name]: value });
    }
  };

  const handleSaveProduct = (e) => {
    e.preventDefault();
    if (isEditMode) {
      const updatedProducts = products.map((product, index) =>
        index === editIndex ? currentProduct : product
      );
      setProducts(updatedProducts);
      setIsEditMode(false);
    } else {
      setProducts([...products, currentProduct]);
    }
    resetForm();
    setShowProductModal(false);
  };

  const deleteProduct = (index) => {
    const updatedProductList = products.filter((_, i) => i !== index);
    setProducts(updatedProductList);
  };

  const editProduct = (index) => {
    setCurrentProduct(products[index]);
    setEditIndex(index);
    setIsEditMode(true);
    setShowProductModal(true);
  };

  const resetForm = () => {
    setCurrentProduct({
      title: "",
      price: "",
      description: "",
      category: "",
      image: null,
    });
    setEditIndex(null);
  };

  return (
    <>
    <div>
    <nav className="logo-bar">
          <img src="/images/logoE-commerce.png" alt="logo"  className="logo-img"/>
      </nav>
      </div>
    <div className="main-body">
      
      <span className="header">
        <h1 className="addnewProject">Add New Product</h1>
        <Button
          className="button1"
          onClick={() => {
            setShowProductModal(true);
            setIsEditMode(false);
            resetForm();
          }}
        >
          Add New Product
        </Button>
      </span>

      <Modal show={showProductModal} onHide={() => setShowProductModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{isEditMode ? "Edit Product" : "Add Product"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSaveProduct}>
            <FormControl
              className="title"
              type="text"
              placeholder="Product Title"
              name="title"
              value={currentProduct.title}
              onChange={handleInputChange}
            />
            <FormControl
              className="price"
              type="text"
              placeholder="Product Price"
              name="price"
              value={currentProduct.price}
              onChange={handleInputChange}
            />
            <textarea
              className="form-control description"
              placeholder="Product Description"
              name="description"
              value={currentProduct.description}
              onChange={handleInputChange}
            ></textarea>
            <FormControl
              className="category"
              type="text"
              placeholder="Product Category"
              name="category"
              value={currentProduct.category}
              onChange={handleInputChange}
            />
            <FormControl
              className="image"
              type="file"
              name="image"
              onChange={handleInputChange}
            />
            <Button variant="primary" type="submit">
              {isEditMode ? "Update Product" : "Add Product"}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <div className="tableDiv">
        <Table responsive striped bordered hover className="productTable">
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Description</th>
              <th>Category</th>
              <th className="action">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td>
                  {product.image && (
                    <img
                      src={
                        typeof product.image === "string"
                          ? product.image
                          : URL.createObjectURL(product.image)
                      }
                      alt="Product"
                      width={50}
                      height={50}
                    />
                  )}
                </td>
                <td>{product.title}</td>
                <td>${product.price}</td>
                <td>{product.description}</td>
                <td>{product.category}</td>
                <td>
                  <div className="action-dis">
                  <Button
                    variant="warning"
                    className="edit"
                    onClick={() => editProduct(index)}
                  >
                    Edit
                  </Button>
                  <Button variant="danger"  className="delete" onClick={() => deleteProduct(index)}>
                    Delete
                  </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
    </>
  );
}

export default AddNewProduct;
