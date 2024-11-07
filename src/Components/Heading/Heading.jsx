const Heading = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col w-full justify-center items-center my-12">
      <h1 className="text-4xl font-bold mb-4 ">{title}</h1>
      <p className="text-sm text-gray-600 text-center font-semibold">
        {subtitle}
      </p>
    </div>
  );
};

export default Heading;
