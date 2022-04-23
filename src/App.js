import { Carousel } from 'react-carousel-minimal';

function App() {
 const data = [
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
      caption: "San Francisco"
    },
    {
      image: "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      caption: "England"
    },
    {
      image: "https://images.pexels.com/photos/1446624/pexels-photo-1446624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      caption: "Paris"
    },
    {
      image: "https://images.pexels.com/photos/756688/pexels-photo-756688.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      caption: "Germany"
    },
    {
      image: "https://images.pexels.com/photos/7939873/pexels-photo-7939873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      caption: "Russia"
    },
    {
      image: "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
      caption: "Darjeeling"
    },
    {
      image: "https://images.pexels.com/photos/5589598/pexels-photo-5589598.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      caption: "Tokyo"
    },
    {
      image: "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
      caption: "Scotland"
    },
    {
      image: "https://images.pexels.com/photos/1750754/pexels-photo-1750754.jpeg?cs=srgb&dl=pexels-vincent-albos-1750754.jpg&fm=jpg",
      caption: "Toronto"
    }
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
        <h2>CS730 ASSIGNMENT TWO</h2>
        <p>Easy to use and responsive carousel for the assignment </p>
        <div style={{
          padding: "0 30px"
        }}>

<nav aria-label="breadcrumbs">
  <ol>
    <li>
      <a href="/">
        Home
      </a>
    </li>
    <li>
      <a href="/parent">
        Parent
      </a>
    </li>
    <li>
      <a
        href="/parent/current"
        aria-current="location"
      >
        Current
      </a>
    </li>
  </ol>
</nav>

          <Carousel
            data={data}
            time={3000}
            width="850px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
