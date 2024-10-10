import { AiOutlineMail } from 'react-icons/ai'; // Import email icon from react-icons

const EmailButton = () => {
  return (
      <button
        className="btn btn-sm flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors duration-300 bg-[#05263B] text-white border-2 border-[#52688f] hover:bg-[#52688f] hover:text-[#bbc8de] hover:border-[#192e41]"
        onClick={() => window.location.href = 'mailto:abdellasiraje10@gmail.com'}
      >
        <span>Let's Talk</span>
        <AiOutlineMail className="text-white" /> {/* Email Icon */}
      </button>


  );
};

export default EmailButton;
