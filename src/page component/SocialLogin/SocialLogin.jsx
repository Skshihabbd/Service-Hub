import { useLocation, useNavigate } from "react-router-dom";
import Custom from "../../sharedcomponent/custom/Custom";
import Swal from "sweetalert2";

const SocialLogin = () => {
    const { googleSignIn } =Custom();
  const location = useLocation();
  const navigation = useNavigate();
  console.log(location);
  console.log(navigation);
  const handleSocialLogin = (sociallogin) => {
    sociallogin().then((result) => {
      console.log(result.user);
      if (result.user) {
        Swal.fire({
          title: "login success!",
          text: " continue",
          icon: "success",
          confirmButtonText: "close",
        });
        navigation(location?.state ? location.state : "/");
      }
    });
  };
  return (
    <div className="w-full flex justify-center ">
      <button 
        onClick={() => handleSocialLogin(googleSignIn)}
        className="btn btn-secondary w-full text-2xl text-black "
      >
        google
      </button>
     
    </div>
  );
};

export default SocialLogin;