import NavbarComp from '../components/Login/NavbarComp'

const VideoPage = () => {
  return (
    <>
<NavbarComp/>
      <div className="videoContainer">
        <video
          className="videoWatch"
          controls
          autoplay
          name="media"
          src="https://firebasestorage.googleapis.com/v0/b/netflix-9e61f.appspot.com/o/braElManhg.mp4?alt=media&token=7e334bcc-f474-42b8-8090-a575b7f70570"
        ></video>
      </div>
    </>
  );
};

export default VideoPage;
