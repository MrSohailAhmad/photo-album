"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import "swiper/css"; // Import Swiper styles

export default function Album() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch("/api/get-images");
      const data = await response.json();
      setImages(data.resources);
    };

    fetchImages();
  }, []);

  console.log("images", images);

  return (
    <div className="flex items-start h-[80vh] w-full justify-center">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images?.map((item: { url: string }, idx) => (
          <div key={idx}>
            <Image
              width={800}
              height={800}
              className="!h-auto !w-full rounded-lg"
              src={item?.url}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
}
