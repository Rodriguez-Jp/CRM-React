const Error = ({ error }) => {
  return (
    <div className="font-bold text-2xl text-white bg-red-500 text-center p-2 mb-2">
      <p>{error}</p>
    </div>
  );
};

export default Error;
