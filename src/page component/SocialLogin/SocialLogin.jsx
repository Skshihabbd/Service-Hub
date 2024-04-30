import { useLocation, useNavigate } from "react-router-dom";
import Custom from "../../sharedcomponent/custom/Custom";

const SocialLogin = () => {
    const { googleSignIn, githubSignIn } =Custom();
  const location = useLocation();
  const navigation = useNavigate();
  console.log(location);
  console.log(navigation);
  const handleSocialLogin = (sociallogin) => {
    sociallogin().then((result) => {
      console.log(result.user);
      if (result.user) {
        navigation(location?.state ? location.state : "/");
      }
    });
  };
  return (
    <div className="flex flex-row gap-6">
      <button
        onClick={() => handleSocialLogin(googleSignIn)}
        className="btn btn-primary"
      >
        google
      </button>
      <button
        onClick={() => handleSocialLogin(githubSignIn)}
        className="btn btn-primary"
      >
        Github
      </button>
    </div>
  );
};

export default SocialLogin;