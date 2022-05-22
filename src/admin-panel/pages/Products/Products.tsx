import { FC, useEffect, useState } from "react";

import { useProducts } from "../../../hooks/useProducts";

import PaginationControl from "../../components/ui/pagination/Pagination";
import Wrapper from "../../components/ui/wrapper/Wrapper";
import AddProduct from "./addProduct/AddProduct";
import Product from "./product/Product";

import styles from "./Products.module.scss";

const AdminProducts: FC = () => {
  const { allProducts, getAllProducts, isLoading } = useProducts();

  const [page, setPage] = useState<number>(1);
  const [pageQty, setPageQty] = useState<number>(13);

  const init = Math.ceil(pageQty / 2);

  useEffect(() => {
    getAllProducts(page);
  }, [page]);

  return (
    <Wrapper title="Все продукты">
      <div className={styles.addProductBlock}>
        <AddProduct />
      </div>
      <div className={styles.header}>
        <div className={styles.headerItems}>
          <p>Информация о товаре</p>
          <div className={styles.right}>
            <p>Цена</p>
            <p>Категория</p>
          </div>
        </div>
      </div>
      <div className={styles.products}>
        {isLoading ? (
          <h1>loading...</h1>
        ) : (
          allProducts.map((product) => (
            <Product product={product} key={product._id} />
          ))
        )}
      </div>
      <div className={styles.pagination}>
        <PaginationControl count={init} page={page} setPage={setPage} />
      </div>
    </Wrapper>
  );
};

export default AdminProducts;
