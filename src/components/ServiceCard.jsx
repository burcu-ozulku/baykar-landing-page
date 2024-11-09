const ServiceCard = ({ icon: Icon, label, subtext }) => {
  return (
    <div className="flex xl:flex-col sm:w-[373.33px] h-[205px] sm:min-w-[350px] w-full gap-4">
      <div className="flex rounded-full">
      <Icon className="w-16 h-16 text-primary stroke-1" /> 
        
      </div>
      <h3 className="font-roboto text-lg font-medium leading-[22px] text-left">
        {label}
      </h3>
      <p className="text-secondary break-words text-slate-grayh-[87px] font-roboto text-base font-normal leading-[28.8px] text-left">
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
