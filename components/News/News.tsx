"use client";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import newsImg from "@/assets/news.jpg";

const News = () => {
  return (
    <section id="news" className="px-4 py-8">
      <div className="mx-auto flex flex-col items-center justify-center max-w-7xl">
        <h1 className="text-3xl md:text-5xl mb-8 md:mb-12 text-primary font-bold text-center">
          Health related news
        </h1>
        <div className="w-full flex justify-center px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={
              [
                //   Autoplay({
                //     delay: 5000,
                //   }),
              ]
            }
            className="w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl"
          >
            <CarouselContent>
              {Array.from({ length: 12 }).map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card>
                      <CardHeader className="p-0">
                        <Image
                          className="rounded-ss-xl rounded-se-xl w-full"
                          src={newsImg}
                          alt="news"
                        />
                      </CardHeader>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <CardTitle className="text-xl">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit
                        </CardTitle>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default News;
