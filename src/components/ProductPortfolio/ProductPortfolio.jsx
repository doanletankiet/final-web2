"use client";

import React from "react";
import { Card } from "antd";
import Image from "next/image";
import "./style.scss";

const { Meta } = Card;
const CardList = [
  {
    key: "bg1",
    title: "Europe Street beat",
    description: "www.instagram.com",
    src: "https://i.imgur.com/uLmJktE.jpg",
    alt: "example",
  },
  {
    key: "bg2",
    title: "Europe Street beat",
    description: "www.instagram.com",
    src: "https://i.imgur.com/uLmJktE.jpg",
    alt: "example",
  },
  {
    key: "bg3",
    title: "Europe Street beat",
    description: "www.instagram.com",
    src: "https://i.imgur.com/uLmJktE.jpg",
    alt: "example",
  },
  {
    key: "bg4",
    title: "Europe Street beat",
    description: "www.instagram.com",
    src: "https://i.imgur.com/uLmJktE.jpg",
    alt: "example",
  },
];

const ProductPort = () => {
  return (
    <div className="card__container">
      {CardList.map((cardList) => {
        return (
          <Card
            className="card"
            key={cardList.key}
            hoverable
            style={{
              width: 240,
            }}
            cover={
              <Image
                src={cardList.src}
                alt={cardList.alt}
                width={200}
                height={200}
              />
            }
          >
            <Meta title={cardList.title} description={cardList.description} />
          </Card>
        );
      })}

      {/* <Card
        hoverable
        style={{
          width: 240,
        }}
        cover={
          <Image
            src="https://i.imgur.com/uLmJktE.jpg"
            alt="example"
            width={600}
            height={300}
          />
        }
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card> */}
    </div>
  );
};

export default ProductPort;

export async function getServerSideProps() {
  // Lấy danh sách sản phẩm từ API hoặc database
  const products = await fetchProducts();

  return {
    props: {
      products,
    },
  };
}
