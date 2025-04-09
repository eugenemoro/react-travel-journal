import marker from '../assets/marker.png';

export default function Entry(props) {
  return (
    <div className="entry">
      <div className="entry-img-section">
        <img src={props.img.src} alt={props.img.alt} />
      </div>
      <div className="entry-content-section">
        <p className="entry-location">
          <img src={marker} alt="marker icon" />
          <span className="entry-location-name">{props.country}</span>
          <a href={props.googleMapsLink}>View on Google Maps</a>
        </p>
        <h1>{props.title}</h1>
        <p className="entry-dates">{props.dates}</p>
        <p className="entry-text">{props.text}</p>
      </div>
    </div>
  );
}
