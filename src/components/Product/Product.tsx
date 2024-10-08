import React, {FC} from 'react';
import {ProductModel} from "../../models/ProductModel";

const Product: FC<ProductModel> = ({id, reviews, rating, availabilityStatus, sku, category, dimensions, discountPercentage, meta, minimumOrderQuantity, price, description, shippingInformation, warrantyInformation, stock, tags, returnPolicy, title, weight, thumbnail, brand}) => {

    return (
        <>
            {id} {reviews} {rating} {availabilityStatus} {sku} {category} {dimensions} {description} {discountPercentage} {meta} {minimumOrderQuantity} {price} {shippingInformation} {warrantyInformation} {stock} {tags} {returnPolicy} {title} {weight} {thumbnail} {brand}
        </>
    );
};

export default Product;