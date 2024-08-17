
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import ellipse from"../assets/Ellipse.png"
import star from"../assets/Star.png"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "../../src/custom-swiper-bullet.css";

// import required modules
import { Keyboard, Navigation,} from 'swiper/modules';


const reviews = [
  {
    name: "John Doe",
    stars: 4,
    image: ellipse,
    review: "This product is really impressive! It exceeded my expectations and performed well in all areas. The design is sleek, and it's easy to use. I was a bit skeptical at first, but after trying it out, I’m happy with my purchase. Would recommend it to others."
  },
  {
    name: "Jane Smith",
    stars: 5,
    image: ellipse,
    review: "I couldn’t be happier with this purchase! From the moment I used it, I could tell it was made with quality in mind. It works flawlessly, and I’m thoroughly impressed. The experience has been great, and I’d highly recommend it to anyone looking for something reliable."
  },
  {
    name: "Michael Johnson",
    stars: 3,
    image: ellipse,
    review: "The product is good, but there are areas where it could be improved. Some features didn’t work as well as I hoped, but overall, it gets the job done. For the price, it’s decent, but I expected a bit more in terms of quality and functionality."
  },
  {
    name: "Emily Davis",
    stars: 5,
    image: ellipse,
    review: "Everything about this product is perfect! From the packaging to the performance, I’ve had no issues at all. It works exactly as described and has been a pleasure to use. I’m very satisfied with my purchase, and it’s been a fantastic addition to my daily routine."
  },
  {
    name: "Robert Brown",
    stars: 2,
    image: ellipse,
    review: "I was disappointed with this product. It didn’t live up to my expectations, and I found it lacking in several key areas. The design could be better, and it didn’t perform as advertised. I’d suggest looking for an alternative if you’re considering this purchase."
  },
  {
    name: "Sophia Williams",
    stars: 4,
    image: ellipse,
    review: "This is a very good product, and I was pleasantly surprised by its overall performance. It’s easy to use and does what it’s supposed to do. While there are a few minor flaws, it’s still a solid choice. I would recommend it to friends and family."
  },
  {
    name: "Daniel Martinez",
    stars: 3,
    image: ellipse,
    review: "It’s a decent product for the price, but I’ve encountered better options in the past. The build quality isn’t the best, and some features feel underdeveloped. That said, it does the job and is functional, though I might not choose it again if given the chance."
  },
  {
    name: "Ava Garcia",
    stars: 5,
    image: ellipse,
    review: "This product provided an amazing experience from start to finish! It’s clear that attention to detail was put into every aspect. I’ve been thoroughly impressed, and it’s worth every penny. The quality and performance have made me a happy customer. Highly recommended!"
  }
];

const ClientSays = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-[#F5F5F5]">
      <div className="w-full h-[10%] flex justify-center">
        <p className="2xl:text-[4rem] xl:text-[4rem] lg:text-[3rem] md:text-[2rem] font-bold">
          WHAT CLIENT SAYS?
        </p>
      </div>

      <div className="w-[90%] h-[70%]">
        <Swiper
          slidesPerView={2}
          spaceBetween={-50}
          slidesPerGroupSkip={1}
          keyboard={{ enabled: true }}
          breakpoints={{
            769: {
              slidesPerView: 2,
              slidesPerGroup: 1,
            },
          }}
          navigation={true}
          pagination={{ clickable: true }}
          modules={[Keyboard, Navigation]} // Removed Scrollbar if not used
          className="mySwiper w-[100%] h-full"
        >
          {reviews.map((item, index) => (
            <SwiperSlide key={index} className="flex justify-center items-center h-[80%] self-center">
              <div className="border-2 w-[75%] h-[72%] flex flex-col items-center gap-6 justify-center p-[5%] border-[#D7D7D7] shadow-md rounded-md">
                <div className="flex items-center w-full h-[25%] gap-2">
                  <div className="w-[13%] h-[100%]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <p className="text-[#444444] 2xl:text-[1.5rem] xl:text-[1.25rem] lg:text-[1.1rem] md:text-[0.7rem] font-semibold uppercase">
                      {item.name}
                    </p>
                    <div className="flex gap-1 w-[20%] h-[8%]">
                      {Array(item.stars).fill().map((_, starIndex) => (
                        <img key={starIndex} src={star} alt="star" className="w-full h-full" />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="px-2">
                  <p className="2xl:text-[1.1rem] xl:text-[1rem] lg:text-[0.9rem] md:text-[0.7rem]">{item.review}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
 
export default ClientSays

   