import img from "../../images/male.svg";
function Home() {
  let title = "first";
  if (title === "first")
    return (
      <div className="container my-5">
        <img src={img} alt="img" />
        <article>this is article</article>
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
