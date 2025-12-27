import "./style.css";

export default function Card() {
  const travels = [
    {
      id: 1,
      place: "Paris",
      description: "The city of love and lights.",
      img: "img1paris.webp",
    },
    {
      id: 2,
      place: "New York",
      description: "The city that never sleeps.",
      img: "img2newyork.webp",
    },
    {
      id: 3,
      place: "Tokyo",
      description: "A mix of tradition and technology.",
      img: "img3tokyo.webp",
    },
    {
      id: 4,
      place: "Sydney",
      description: "Famous for the Sydney Opera House.",
      img: "img4sidney.webp",
    },
    {
      id: 5,
      place: "London",
      description: "Home of the Big Ben and historic sites.",
      img: "img5london.webp",
    },
    {
      id: 6,
      place: "Rome",
      description: "Tropical paradise with beaches and temples.",
      img: "img6rome.webp",
    },
    {
      id: 7,
      place: "Bali",
      description: "Tropical paradise with beaches and temples.",
      img: "img7bali.webp",
    },
    {
      id: 8,
      place: "Dubai",
      description: "Luxury shopping and modern architecture.",
      img: "img8dubai.webp",
    },
    {
      id: 9,
      place: "Istanbul",
      description: "City connecting Europe and Asia.",
      img: "img9is.webp",
    },
    {
      id: 10,
      place: "Machu Picchu",
      description: "Ancient Incan city in the Andes mountains.",
      img: "img10machu.webp",
    },
    {
      id: 11,
      place: "Santorini",
      description: "Greek island with white houses and blue domes.",
      img: "img11santorini.webp",
    },
    {
      id: 12,
      place: "Rio de Janeiro",
      description: "Famous for Carnival and Christ the Redeemer.",
      img: "img12tajmahal.webp",
    },


  ];

  return (
    <div>
      {/* NAVBAR */}
      <nav className="navbar">
        <h1>TravelWorld</h1>
        <ul>
          <li>Home</li>
          <li>Destinations</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>

      {/* MAIN */}
      <main className="cards-container">
        {travels.map((travel) => (
          <div className="card" key={travel.id}>
            <img src={travel.img} alt={travel.place} />
            <h2>{travel.place}</h2>
            <p>{travel.description}</p>
          </div>
        ))}
      </main>

      {/* FOOTER */}
      <footer>
        <p>© 2025 TravelWorld. All rights reserved.</p>
      </footer>
    </div>
  );
}
