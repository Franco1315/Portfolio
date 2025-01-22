const CardService = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg p-6 lg:p-8 relative overflow-hidden group transition-all duration-300 ease-in-out">
      <div className="hidden lg:block absolute top-0 left-0 h-full bg-secondary w-0 group-hover:w-full transition-all duration-500 ease-in-out z-0"></div>
      <div className="relative z-10">
        <div className="bg-[#F5F5F5] rounded-full w-12 h-12 mb-3 flex items-center justify-center shadow-lg">
          <img src={icon} alt={title} />
        </div>
        <h3 className="mb-3 text-xl font-semibold text-text transition-colors duration-300">{title}</h3>
        <p className="text-text transition-colors duration-300">{description}</p>
      </div>
    </div>
  );



  

};

export default CardService;
