import landingVid from "/landing.mp4";

function LandingVideo() {
  return (
    <div className="w-9/12 overflow-hidden m-auto rounded-t-2xl my-4 px-4x bg-gray-400x flex justify-center items-center">
      <video autoPlay loop playsInline>
        <source src={landingVid} type="video/mp4" />
      </video>
    </div>
  );
}

export default LandingVideo;
