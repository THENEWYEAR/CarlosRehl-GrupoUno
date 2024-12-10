// eslint-disable-next-line no-unused-vars
import React from 'react';
import Item from "../Item/item.jsx";
import Loading from "../Loading/Loading.jsx";

// eslint-disable-next-line react/prop-types
const ItemList = ({ products, loading }) => {
    return (
        <>
            {loading ? (
                <div>
                    <Loading />
                </div>
            ) : (
                <div className="flex flex-wrap">
                    {/* eslint-disable-next-line react/prop-types */}
                    {products.map((prod) => (
                        <Item {...prod} key={prod.id} />
                    ))}
                </div>
            )}
        </>
    );
};

export default ItemList;


