"use client";
import "./photos.css";

import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

const Photos = () => {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    await axios
      .get(
        `//pixabay.com/api/?key=11095386-871fd43c33a92700d9bffb82d&q=travel&per_page=10&page=${page}`
      )
      .then((response) => {
        setPhotos([...photos, ...response.data.hits]);
        // setPhotos(response.data.hits);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, [page]);
  useEffect(() => {
    console.log(photos);
  }, [photos]);

  return (
    <>
      <div className="photos-container">
        <div className="top-container">
          <h1>Photos</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            dolorum eaque sequi dicta facere laborum ex numquam vel esse?
            Doloremque impedit delectus excepturi pariatur vel consequatur quas
            officiis esse quam.
          </p>
        </div>

        <div className="photo-wrapper">
          {photos.map((photo, i, k) => {
            console.log(photo.id);
            return (
              <div className="my-photo-card" key={photo.id}>
                <div className="photo-meta">
                  <h2>ID: {photo.id}</h2>
                  <p>
                    User: {photo.user} <span>{i + 1}</span>
                  </p>
                </div>
                <Image
                  className="my-single-image"
                  src={photo.webformatURL}
                  alt={photo.user}
                  height={800}
                  width={1200}
                />
              </div>
            );
          })}
        </div>

        <h3
          onClick={() => {
            setPage(page + 1);
          }}
          style={{ padding: "3rem", cursor: "pointer" }}
        >
          Load more
        </h3>
      </div>
    </>
  );
};

export default Photos;

// const [photos, setPhotos] = useState([]);

// useEffect(() => {
//   const fetchData = () => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/photos")
//       .then((response) => {
//         console.log(response);
//         setPhotos(response.data);
//         console.log(photos);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   const fetchData = async () => {
//     try {
//       const response = await axios.get(
//         "https://jsonplaceholder.typicode.com/photos"
//       );
//       setPhotos(response);
//       console.log(photos);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   fetchData();
// }, []);

// ###
// const fetchData = async () => {
//   await axios
//     .get(
//       `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`
//     )
//     .then((response) => {
//       // setPhotos([...photos, ...response.data]);
//       setPhotos((prevPhotos) =>
//         prevPhotos.concat(response.data).map((photo, i) => ({
//           key: photo.id,
//           ...photo,
//         }))
//       );
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };
