import Pen from "../images/pen.png";

function Hero() {
  return (
    <div className="text-white">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <div className="p-6">
          <h1 className="text-4xl mb-4 leading-normal">
            Revolutionize writing with Techscribe smart pens.
          </h1>
          <p className="text-xl mb-4">A New Era of Writing</p>
          <button className="btn-primary">See Features</button>
        </div>
        <div className="p-6">
          <img src={Pen} alt="smart-pen" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
