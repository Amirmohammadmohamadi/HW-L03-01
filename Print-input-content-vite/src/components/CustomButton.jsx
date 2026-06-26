const CustomButton = ({ id , onClick , lable }) => {
  return (
    <button
      id={id}
      className="py-1.5 px-9 border border-fuchsia-700 text-fuchsia-700 rounded-xs cursor-pointer"
      onClick={onClick}
    >
      {lable}
    </button>
  );
};

export default CustomButton;
