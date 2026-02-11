export function GallerySection() {
  const images = [
    "img/gallery1.jpg",
    "img/gallery2.png",
    "img/gallery3.png",
    "img/gallery4.jpg",
    "img/gallery5.jpg",
    "img/gallery6.png",
  ];
  return (
    <section className="gallery">
      <div className="gallery__grid">
        {images.map((item) => (
          <img src={item} />
        ))}
      </div>
    </section>
  );
}
