import DeliveryInfoCards from "./DeliveryInfoCards"


const DeliveryInfo = () => {
  return (
    <section
        className="flex justify-between"
    >
        <DeliveryInfoCards 
            src="/fast-delivery 2.svg"
            title="Delivery"
            text="Estimated delivery time: 1 - 9 days"
        />
        <DeliveryInfoCards 
            src="/return 1.svg"
            title="7 Day Return Guarantee"
            text="For more information on the return shipping options, go to Kwek return Policy"
        />
    </section>
  )
}

export default DeliveryInfo