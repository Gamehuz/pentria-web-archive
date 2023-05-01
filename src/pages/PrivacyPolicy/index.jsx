import Button from "../../components/Button";

const PrivacyPolicy = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Coming Soon</h1>
      <p className="text-gray-600 mb-8">
        Our website is under construction. Stay tuned for updates.
      </p>
      <div className="flex space-x-4">
        <Button text="Subscribe" to="/partners" />
      </div>
    </div>
  );
};

export default PrivacyPolicy;
