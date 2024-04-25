import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const appName = "BKooler";
//server routes
const cartDetail = `http://localhost:80/${appName}/backend/cart/detailCart`;
const productStock = `http://localhost:80/${appName}/backend/products/quantity`; 

const useFetchCart = (id) => {
    const [data, setData] = useState([]);
    const [stock, setStock] = useState([]);

    const trigger = useCallback((i = id) => {
        axios.get(cartDetail, {
            params: {
                id: i
            }
        }).then(async (res) => {
            console.log(res.data);
            setData(res.data);
            const stock = await Promise.all(res.data.map(async (data) => {
                const result = await axios.get(productStock, {
                    params: {
                        id: data.product_id
                    }
                })
                return result.data[0];
            }));
            setStock(stock);
        }).catch(err => {
            console.log(err);
        })
    }, []);

    useEffect(() => {
        trigger();
    }, [])

    return {data, stock, trigger};
}

export default useFetchCart;