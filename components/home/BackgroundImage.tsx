import { ACCESS_KEY } from "@/config";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function BackgroundImage() {
  const [img, setImg] = useState("");
  const [res, setRes] = useState([]);
  const accessKey = ACCESS_KEY;
  const url = `https://api.unsplash.com/search/photos?page=1&query=${img}&client_id=${accessKey}&orientation=landscape&per_page=20`;

  const fetchRequest = async () => {
    const response = await fetch(url);
    const responseJson = await response.json();
    const result = responseJson.results;
    console.log(result);
    setRes(result);
  };

  useEffect(() => {
    fetchRequest();
  }, []);

  const submit = () => {
    fetchRequest();
    setImg("");
  };

  interface resProps {
    id: string;
    thumb: string;
    alt_description: string;
  }

  return (
    <div>
      <div>
        <div>
          <input
            type="text"
            value={img}
            onChange={(event) => setImg(event.target.value)}
            placeholder="Searching Anything..."
          />
          <button type="submit" onClick={submit}>
            Search
          </button>
        </div>
        <div>
          {res &&
            res.map((value: resProps) => {
              return (
                <Image
                  key={value.id}
                  src={value.urls.thumb}
                  alt={value.alt_description}
                  width={300}
                  height={300}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default BackgroundImage;
