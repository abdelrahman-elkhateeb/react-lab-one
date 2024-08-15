import img1 from "../../images/home (1).jpg";
import img2 from "../../images/home (2).jpg";
import img3 from "../../images/home (3).jpg";
function Home() {
  let title = "first";
  if (title === "first")
    return (
      <div className="container my-5">
        <div className="row">
          <div className="col-md-4">
            <img src={img1} alt="img1" className="w-100" />
          </div>
          <div className="col-md-4">
            <img src={img2} alt="img1" className="w-100" />
          </div>
          <div className="col-md-4">
            <img src={img3} alt="img1" className="w-100" />
          </div>
        </div>
        <article className="text-center">
          <p className="my-2 fw-bold">this is article</p>
        </article>
      </div>
    );
  else if (title === "second")
    return (
      <div className="container my-5">
        <p>this is paragraph only</p>
      </div>
    );
}

export default Home;
