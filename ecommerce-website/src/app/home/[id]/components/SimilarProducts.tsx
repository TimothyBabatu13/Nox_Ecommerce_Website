import Card from "../../components/Card"

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
  ]
const SimilarProducts = () => {
  return (
    <section
        className="grid grid-cols-3 gap-[100px]"
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

export default SimilarProducts