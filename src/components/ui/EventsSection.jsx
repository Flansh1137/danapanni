import React, { useEffect, useRef } from "react";
import { Button } from "./Button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "./Card";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const events = [
  {
    title: "Slum Food Distribution Drive",
    image: "https://thechetna.org/wp-content/uploads/2021/07/FB_IMG_1588736839003.jpg",
  },
  {
    title: "Health Support for the Underprivileged",
    image: "https://www.hotelierindia.com/cloud/2022/08/06/HC-Pic11-1024x768-1.jpg",
  },
  {
    title: "Meals for School Children",
    image: "https://helplocal.in/blog/wp-content/uploads/2022/12/MaxPixel.net-Girls-Children-Eating-Boys-Meal-Infants-India-306610.jpg",
  },
  {
    title: "Empowering Women Through Ration Kits",
    image: "https://www.globalgiving.org/pfil/18102/ph_18102_244930.jpg",
  },
  {
    title: "Winter Blanket Distribution",
    image: "https://cfstatic.give.do/c649631c-9db0-41b5-9e38-4a3d946d167a.webp",
  },
  {
    title: "Clean Drinking Water For All",
    image: "https://www.freshwatersystems.com/cdn/shop/articles/water-storage-tank.jpg?v=1712347406&width=2309",
  },
];

const EventsSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".event-card").forEach((card, index) => {
        gsap.from(card, {
          opacity: 0,
          y: 50,
          scale: 0.95,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          delay: index * 0.1,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Our Events</h2>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon">
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <Card
              key={index}
              className="event-card relative overflow-hidden h-64 text-white"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${event.image})` }}
              ></div>
              <div className="absolute inset-0 bg-black/40"></div>
              <CardContent className="p-6 h-full flex flex-col justify-end relative z-10">
                <div className="text-lg font-semibold mb-2">{event.title}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
