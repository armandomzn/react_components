import axios from "axios";
import { useAppContext } from "../context";
import { useQuery } from "@tanstack/react-query";
import { Photo } from "../interfaces/Photo";

const url = "https://api.pexels.com/v1/search";
const Gallery = () => {
  const { searchTerm, pageNumber } = useAppContext();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["images", searchTerm, pageNumber],
    queryFn: async () => {
      const { data } = await axios.get(
        `${url}?query=${searchTerm}&page=${pageNumber}`,
        {
          headers: {
            Authorization: import.meta.env.VITE_API_KEY,
          },
        }
      );
      return data;
    },
  });

  if (isLoading) {
    return (
      <div className="loading-parent">
        <div className="loading"></div>
      </div>
    );
  }
  if (isError) {
    return (
      <section style={{ textAlign: "center" }}>
        <h2>there was an error...</h2>
      </section>
    );
  }

  const photos: Photo[] = data.photos;

  if (photos.length === 0) {
    return (
      <section style={{ textAlign: "center" }}>
        <h2>No results found for {searchTerm}...</h2>
      </section>
    );
  }

  return (
    <section className="gallery">
      {photos.map((photo: Photo) => {
        return (
          <article className="gallery-photo" key={photo.id}>
            <div className="gallery-photo-container">
              <a href={photo.url} target="_blank">
                <img src={photo.src.medium} alt={photo.alt} />
              </a>
            </div>
            <div className="photo-info">
              <p className="photographer">
                Photographer: <span>{photo.photographer}</span>
              </p>
            </div>
          </article>
        );
      })}
    </section>
  );
};
export default Gallery;
