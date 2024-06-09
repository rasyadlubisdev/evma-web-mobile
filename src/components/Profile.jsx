import defaultImage from "./../assets/images/ImageProfile.png";

const Profile = ({ image, bigger }) => {
  return (
    <div
      className="profile"
      style={{
        width: bigger ? 72 : 50,
        height: bigger ? 72 : 50,
        borderRadius: "50%",
        overflow: "hidden"
      }}
    >
      <img
        src={image}
        alt=""
        style={{
          width: "100%",
          height: "100%"
        }}
      />
    </div>
  );
};

Profile.defaultProps = {
  image: defaultImage,
  bigger: false
};

export default Profile;
