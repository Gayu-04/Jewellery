import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Profile = () => {
  const { loggedInUser } = useContext(UserContext);
  return (
    <div className="min-h-screen bg-[#fffaf0] p-10">

      <h1 className="text-3xl font-bold text-yellow-700 mb-8">
        My Profile
      </h1>

      <div className="w-96 bg-white p-6 rounded-lg shadow-md">

        <h2 className="text-2xl font-bold mb-4">
          User: {loggedInUser}
        </h2>

        <p className="text-gray-600 mb-2">
          Email: gayatri@example.com
        </p>

        <p className="text-gray-600 mb-2">
          Phone: +91 98765 43210
        </p>

        <p className="text-gray-600 mb-5">
          Location: Pune
        </p>

        <button className="bg-yellow-600 text-white px-5 py-2 rounded-lg">
          Edit Profile
        </button>

      </div>

    </div>
  );
};

export default Profile;
