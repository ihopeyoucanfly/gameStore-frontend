import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Card from "../../components/ui/card/Card";
import PageTitle from "../../components/ui/pageTitle/PageTitle";

import { IProduct } from "../../utils/interfaces";

import styles from "./Category.module.scss";

const Category: FC = () => {
  let { name } = useParams();

  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getHits();
  }, []);

  const getHits = async () => {
    const res = await axios.get<IProduct[]>(
      `http://game-store12.herokuapp.com/api/products/category/${name}`
    );
    setProducts(res.data);
    setLoading(false);
  };

  return (
    <div>
      <PageTitle title={String(name)} />
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <div className={styles.products}>
          {products.map((product) => (
            <Card product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Category;
