import React from "react";
import Item from "./Item";

const ItemsContainer = () => {
    return (<div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
    <Item />
    <Item />
    <Item />
    <Item />
    <span>© 2024 Apply. All rights reserved.</span>
    <span>Terms. Privacy Policy</span>
    </div>
    );
};

export default ItemsContainer;