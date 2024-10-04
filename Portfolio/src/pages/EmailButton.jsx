import { AiOutlineMail } from 'react-icons/ai'; // Import email icon from react-icons

const EmailButton = () => {
  return (
    <button
      className="btn btn-sm btn-outline-primary btn-light flex items-center space-x-2"
      onClick={() => window.location.href = 'mailto:abdellasiraje10@gmail.com'}
    >
      <span>Let's Talk</span>
      <AiOutlineMail className="text-blue-600" /> {/* Email Icon */}

    </button>
  );
};

export default EmailButton;
