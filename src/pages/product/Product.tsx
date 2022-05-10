import React, { FC, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import styles from "./product.module.scss";

import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

import { IProduct } from "../../utils/interfaces";

import small1 from "../../assets/images/product/small1.png";
import small2 from "../../assets/images/product/small2.png";
import small3 from "../../assets/images/product/small3.png";

import axios from "axios";

const Product: FC = () => {
  const { id } = useParams<string>();

  const [product, setProduct] = useState<IProduct>({} as IProduct);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchProduct();
  }, []);

<<<<<<< HEAD
	async function fetchProduct() {
		try {
			const response = await axios.get<IProduct>(`http://game-store12.herokuapp.com/api/products/product/${id}`)
			setProduct(response.data)
		} catch (e) {
			console.log(e)
		}
	}
	const addToFavorites = (): void => {
		console.log('add to favorites')
	}

	console.log(product)
	return (
		<div className={styles.product}>
			<div className={styles.header}>
				<NavLink to="/" className={styles.leftArrow}><ChevronLeftOutlinedIcon color="disabled" fontSize="medium" /></NavLink> <h2 className={styles.title}>{product.title}</h2>
			</div>
			<div className={styles.content}>
				<div className={styles.productImg}>
					<div className={styles.large}>
						<img src={product.urlImg} alt="productImage" />
					</div>
					<div className={styles.small}>

						<div><img src={''} alt="small" /></div>


					</div>
				</div>
				<div className={styles.body}>
					<div className={styles.subtitle}>{product.desc}</div>
					<div className={styles.price}>
						<span>{product.price} ₽  </span>
						<span onClick={addToFavorites} className={styles.heartIcon}><FavoriteBorderOutlinedIcon /></span>
					</div>
				</div>
			</div>
			<div className={styles.desc}>
				<div className={styles.title}>{product.title}</div>
				<div className={styles.body}>{product.characteristic}</div>
			</div>
		</div >);
=======
  async function fetchProduct() {
    try {
      const response = await axios.get<IProduct>(
        `http://game-store12.herokuapp.com/api/products/product/${id}`
      );
      setProduct(response.data);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  }
  return loading ? (
    <h1>loading</h1>
  ) : (
    <div className={styles.product}>
      <div className={styles.header}>
        <NavLink to="/" className={styles.leftArrow}>
          <ChevronLeftOutlinedIcon color="disabled" fontSize="medium" />
        </NavLink>{" "}
        <h2 className={styles.title}>{product.title}</h2>
      </div>
      <div className={styles.content}>
        <div className={styles.productImg}>
          <div className={styles.large}>
            <img src={product.urlImages[0]} alt="productImage" />
          </div>
          <div className={styles.small}>
            <div>
              <img src={small1} alt="small" />
            </div>
            <div>
              <img src={small2} alt="small" />
            </div>
            <div>
              <img src={small3} alt="small" />
            </div>
          </div>
        </div>
        <div className={styles.body}>
          <div className={styles.subtitle}>{product.desc}</div>
          <div className={styles.price}>
            <span>{product.price} ₽ </span>
            <span className="heartIcon">
              <FavoriteBorderOutlinedIcon />
            </span>
          </div>
        </div>
      </div>
      <div className={styles.desc}>
        <div className={styles.title}>{product.title}</div>
        <div className={styles.body}>{product.characteristic}</div>
      </div>
    </div>
  );
>>>>>>> 4d1bafe687a2a04a70c6bda722d62c139c69750b
};

export default Product;
