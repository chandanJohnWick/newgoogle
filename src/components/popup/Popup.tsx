const Popup = ({ onSignIn }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded shadow-md text-center">
        <h2 className="text-xl mb-4">You are not logged in</h2>
        <button
          onClick={onSignIn}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Popup;
