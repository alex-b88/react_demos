import React, {useEffect, useState} from 'react';
import {ProductModel} from "../../models/ProductModel";


const ProductList = () => {

    const [productsList, setProductsList] = useState<ProductModel[]>([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products?limit=1')
            .then(res => res.json())
            .then(response => {
                setProductsList(response.products);
            })
            .catch(err => {
                console.log('fetching error', err);
            });
    }, []);

    return (
        <div>
            {
                productsList.map(product => (
                    <div key={product.id}>
                        <h2>{product.title}</h2>
                        <img src={product.thumbnail} alt={product.title}/>
                        <p>{product.description}</p>
                        <p>{product.category}</p>
                        <p>Price: ${product.price}</p>
                        <p>Discount %: {product.discountPercentage}</p>
                        <p>Rating: {product.rating}</p>
                        <p>In stock: {product.stock}</p>
                        <p>Returns: {product.returnPolicy}</p>
                        <p>Min in order: {product.minimumOrderQuantity}</p>
                        <div>
                            <h4>tags:</h4>
                            {
                                product.tags.map(tag => (<span> {tag}</span>))
                            }
                        </div>
                        <p>Brand: {product.brand} </p>
                        <p>SKU: {product.sku} </p>
                        <p>Weight: {product.weight}</p>
                        <p>Warranty: {product.warrantyInformation}</p>
                        <p>Shipping: {product.shippingInformation}</p>
                        <p>Weight: {product.weight}</p>
                        <p>Availability: {product.availabilityStatus}</p>
                        <div>
                            <h4>Dimensions:</h4>
                            <ul>
                                <li>Width: {product.dimensions.width}</li>
                                <li>Height: {product.dimensions.height}</li>
                                <li>Depth: {product.dimensions.depth}</li>
                            </ul>
                        </div>
                        <div>
                            <h4>reviews:</h4>
                            {product.reviews.map(review => (
                                <div><p>Date: {review.date}</p>
                                    <p>Rating: {review.rating}</p>
                                    <p>Name: {review.reviewerName}</p>
                                    <p>Contact: {review.reviewerEmail}</p>
                                    <p>Review: {review.comment}</p>
                                    <hr/>
                                </div>
                            ))}
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default ProductList;