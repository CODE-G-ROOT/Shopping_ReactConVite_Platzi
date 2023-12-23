import { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import Card from "../../components/Card";
import ProcutDetail from "../../components/ProductDetail";

const url = 'https://api.escuelajs.co/api/v1/products';

function Home() {

    const [items, setItems] = useState(null);

    const fetchData = async () => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            setItems(data);
        } catch (error) {
            throw (error)
        }
    };

    useEffect(() => {
        fetchData()
    }, []);

    return (
        <>
            <Layout>
                <div className="w-3/5 h-100 flex flex-wrap gap-5 justify-center">
                    {items ? (
                        <>
                            {items.map((element, key) => (<Card key={key} data={element} />))}
                        </>
                    )
                        : <div>not found</div>
                    }
                </div>

                <ProcutDetail />
            </Layout>

        </>
    )
};

export default Home;