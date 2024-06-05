import "./css/Carosual.css";
import user_1 from "../assets/carosual1.png";
import user_2 from "../assets/carosual2.png";
import user_3 from "../assets/carosual3.png";
import user_4 from "../assets/carosual4.png";
import star from "../assets/star.svg";

const Carosual = () => {
  const data = [
    {
      img: user_1,
      text: "Modern Wall Decor Framed Painting",
      price: 199.99,
      rating: 4,
    },
    {
      img: user_2,
      text: "Modern Wall Decor Framed Painting",
      price: 199.99,
      rating: 4,
    },
    {
      img: user_3,
      text: "Modern Wall Decor Framed Painting",
      price: 199.99,
      rating: 4,
    },
    {
      img: user_4,
      text: "Modern Wall Decor Framed Painting",
      price: 199.99,
      rating: 4,
    },
  ];
  return (
    <div className="carosual">
      {data.map((item, index) => (
        <div className="carosualItem" key={index}>
          <img src={item.img} alt="carosual" className="carosualImg" />
          <h1>{item.text}</h1>
          <div className="rating">
            <h2>${item.price}</h2>
            <span className="stars">
              {Array.from({ length: item.rating }, (_, i) => (
                <img
                  key={i}
                  src={star}
                  alt="Rating star"
                  className="starIcon"
                />
              ))}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carosual;
