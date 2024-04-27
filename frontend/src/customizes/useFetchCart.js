import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const appName = "web-assignment";
//server routes
const cartDetail = `http://localhost:80/${appName}/backend/cart/detailCart`;
const productStock = `http://localhost:80/${appName}/backend/products/quantity`; 

const useFetchCart = (id) => {
    const [data, setData] = useState([]);

    const trigger = useCallback((i = id) => {
        axios.get(cartDetail, {
            params: {
                id: i
            }
        }).then(async (res) => {
            setData(res.data);
        }).catch(err => {
            console.log(err);
        })
    }, []);

    useEffect(() => {
        trigger();
    }, [])

    return {data, trigger};
}

export default useFetchCart;