import Button from "../../components/Button";
import HomeNavbar from "../../components/HomeNavbar";

const TermOfUse = () => {
  return (
    <>
      <HomeNavbar />
      <div className="h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Coming Soon</h1>
        <p className="text-gray-600 mb-8">
          This page is under construction. Stay tuned for updates.
        </p>
        <div className="flex space-x-4">
          <Button text="Subscribe" to="/partners" />
        </div>
      </div>
    </>
  );
};

export default TermOfUse;
