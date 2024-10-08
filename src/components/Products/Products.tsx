import React from 'react';
import {productsList} from "../../Data";
import {ProductModel} from "../../models/ProductModel";
import Product from "../Product/Product";

const Products = () => {
      //console.log(productsList);
    return (
        <div>
            {
                productsList.map(({id, dimensions, reviews, rating, availabilityStatus, sku, category, discountPercentage, meta, minimumOrderQuantity, price, description, shippingInformation, warrantyInformation, stock, tags, returnPolicy, title, weight, thumbnail, brand}:ProductModel) => (<Product id={id} dimensions={dimensions} title={title} description={description} category={category} price={price} discountPercentage={discountPercentage} rating={rating} stock={stock} tags={tags} brand={brand} sku={sku} weight={weight} warrantyInformation={warrantyInformation} shippingInformation={shippingInformation} availabilityStatus={availabilityStatus} reviews={reviews} meta={meta} returnPolicy={returnPolicy} minimumOrderQuantity={minimumOrderQuantity} thumbnail={thumbnail}/>))
            }
        </div>
    );
};

export default Products;