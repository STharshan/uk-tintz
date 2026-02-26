import { FaPhoneAlt } from 'react-icons/fa'; // Ensure react-icons is installed

const FloatingCallButton = () => {
  const phoneNumber = "+447506717961"; // Your placeholder number

  return (
    <a
      href={`tel:${phoneNumber}`}
      className="fixed bottom-26 right-6 z-50 flex items-center justify-center w-16 h-16 bg-black text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-red-600 border-2 border-red-600 group"
      aria-label="Call Us"
    >
      {/* Phone Icon */}
      <FaPhoneAlt className="text-2xl group-hover:animate-shake" />
      
      {/* Tooltip (Optional) */}
      <span className="absolute right-20 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-red-600">
        Call Now
      </span>
    </a>
  );
};

export default FloatingCallButton;