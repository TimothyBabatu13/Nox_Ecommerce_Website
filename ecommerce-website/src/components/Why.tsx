import React from 'react'
import WhyCard from './WhyCard'

interface Data {
    src: string,
    title: string,
    body: string,
    link: string
}
const data: Data[] = [
    {
        src: "/customer.svg",
        title: "Effective customer support",
        body: "Easy communication, 24hrs instant response and convincing support level are all guaranteed",
        link: "/"
    },
    {
        src: "/24hours.svg",
        title: "24hrs delivery optimizatiom",
        body: "Reach to a large community of people who value the availability of your products in their doorsteps in no time. Are you surprised?",
        link: "/"
    },
    {
        src: "/person.svg",
        title: "Quality Products",
        body: "Our system functionality is enhanced to bring the right audience to your online shop outlet in your nearness",
        link: "/"
    },
    {
        src: "/tag.svg",
        title: "Organized Online Outlet",
        body: "Are you looking for the apperance for your online store? A well branded online shop outlet is available for you on marcsonic",
        link: "/"
    },
    {
        src: "/transaction.svg",
        title: "Swift transaction",
        body: "Enjoya Money-to-hand transaction, transparent sales tracking, well understandable and traceable and reliable transaction history",
        link: "/"
    },
    {
        src: "/car.svg",
        title: "Optimized Logistic Service",
        body: "Fastest delivery of your product is only a click away. Our team is available for you with our well-structured procurement system.",
        link: "/"
    }
]

const Why = () => {
  return (
    <main className='bg-[#F6F6F6] mt-[30px]'>
        <div className='w-[90%] mx-auto'>
            <h1 className='text-fiftySix font-sevenHundred text-center pt-[100px] mb-[100px]'>Why Choose MarcsonicMall?</h1>
            <div className='grid grid-cols-3 gap-[50px]'>
                {data.map((item, id)=>(
                    <WhyCard 
                        key={id}
                        src={item.src}
                        title={item.title}
                        body={item.body}
                        link={item.link}
                    />
                ))}
            </div>
        </div>
    </main>
  )
}

export default Why