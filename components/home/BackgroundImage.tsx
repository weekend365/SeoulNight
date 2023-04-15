import { ACCESS_KEY } from "@/config";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type PropsType = {
  props: string;
};

function BackgroundImage({ props }: PropsType) {
  const [img, setImg] = useState("");
  const [res, setRes] = useState([]);
  const accessKey = ACCESS_KEY;
  const url = `https://api.unsplash.com/search/photos?page=1&query=${img}&client_id=${accessKey}&orientation=landscape&per_page=1`;

  const fetchRequest = async () => {
    const response = await fetch(url);
    const responseJson = await response.json();
    const result = responseJson.results;
    console.log(result);
    setRes(result);
  };

  useEffect(() => {
    setImg(props);
    fetchRequest();
  }, []);

  interface resProps {
    id: string;
    urls: {
      full: string;
    };
    alt_description: string;
  }

  return (
    <>
      {res &&
        res.map((value: resProps) => {
          return (
            <Image
              key={value.id}
              src={value.urls.full}
              alt={value.alt_description}
              fill
              className="z-10 opacity-0.5"
            />
          );
        })}
    </>
  );
}

export default BackgroundImage;
