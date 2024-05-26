import Card from "./Card"

interface dataType {
  img: string,
  text: string,
  price: number,
  discountPrice: number,
  noOfReviews: number
}
const data: dataType[] = [
  {
    img: "/best1.svg",
    text: "Women's fashion Shiny High Heels",
    price: 35,
    discountPrice: 25,
    noOfReviews: 6
  },
  {
    img: "/best1.svg",
    text: "Women's fashion Shiny High Heels",
    price: 35,
    discountPrice: 25,
    noOfReviews: 6
  },
  {
    img: "/best1.svg",
    text: "Women's fashion Shiny High Heels",
    price: 35,
    discountPrice: 25,
    noOfReviews: 6
  },
  {
    img: "/best1.svg",
    text: "Women's fashion Shiny High Heels",
    price: 35,
    discountPrice: 25,
    noOfReviews: 6
  },
  {
    img: "/best1.svg",
    text: "Women's fashion Shiny High Heels",
    price: 35,
    discountPrice: 25,
    noOfReviews: 6
  },
  {
    img: "/best1.svg",
    text: "Women's fashion Shiny High Heels",
    price: 35,
    discountPrice: 25,
    noOfReviews: 6
  }
]

const MoreToLikeCards = () => {
  return (
    <section
    className="grid md:grid-cols-2 lg:grid-cols-3 gap-[80px]"
  >
    {
      data.map((item, id) => (
        <Card 
          img={item.img}
          text={item.text}
          price={item.price}
          discountPrice={item.discountPrice}
          noOfReviews={item.noOfReviews}
          key={id}
          id={id.toString()}
        />
      ))
    }
  </section>
  )
}

export default MoreToLikeCards