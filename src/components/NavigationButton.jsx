
const NavigationButton = ({ direction, onClick }) => {
    return (
      <button
        onClick={onClick}
        className={`swiper-button ${direction === "prev" ? " group-hover:bg-white" : "hover:bg-primary"} 
          group flex justify-center items-center border border-solid border-primary w-12 h-12 transition-all duration-500 rounded-full`}
      >
        <svg
          className={`h-6 w-6 ${direction === "prev" ? "text-primary group-hover:text-white" : "text-primary group-hover:text-white"}`}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d={direction === "prev" ? "M20.9999 12L4.99992 12M9.99992 6L4.70703 11.2929C4.3737 11.6262 4.20703 11.7929 4.20703 12C4.20703 12.2071 4.3737 12.3738 4.70703 12.7071L9.99992 18" : "M3 12L19 12M14 18L19.2929 12.7071C19.6262 12.3738 19.7929 12.2071 19.7929 12C19.7929 11.7929 19.6262 11.6262 19.2929 11.2929L14 6"}
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    );
  };

  export default NavigationButton;