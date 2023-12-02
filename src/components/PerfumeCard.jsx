const PerfumeCard = ({ imgURL, changeperfumeImage, perfumeImg }) => {
  const handleClick = () => {
    if (perfumeImg !== imgURL.perfume) {
      changeperfumeImage(imgURL.perfume);
    }
  };

  return (
    <div
      className={`border-2  rounded-xl ml-6 ${
        perfumeImg === imgURL.perfume
          ? "border-dark-blue-color"
          : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          src={imgURL.thumbnail}
          alt="perfume colletion"
          width={127}
          height={103.34}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default PerfumeCard;
