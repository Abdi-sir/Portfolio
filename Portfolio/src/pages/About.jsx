function About() {
  return (
    <section id='about' className='min-h-screen bg-gray-100 flex items-center py-16'>
      <div className='container mx-auto px-6'>
        <div className='text-center mb-12'>
          <h1 className='text-5xl font-bold text-gray-900 mb-4'>About Me</h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {/* Personal Info Section */}
          <div className='bg-white p-6 rounded-lg shadow-lg'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>Personal Info</h2>
            <ul className='space-y-4 text-gray-700'>
              <li><strong>First Name:</strong> Abdella</li>
              <li><strong>Last Name:</strong> Siraje</li>
              <li><strong>Age:</strong> 24 Years</li>
              <li><strong>Nationality:</strong> Ethiopian</li>
              <li><strong>Freelance:</strong> Available</li>
              <li><strong>Address:</strong> Addis Abeba</li>
              <li><strong>Phone:</strong> +251953202827</li>
              <li><strong>Email:</strong> abdellasiraje00@mail.com</li>
              <li><strong>Languages:</strong> Amharic, English</li>
            </ul>
          </div>

          {/* Resume & Achievements Section */}
          <div className='bg-white p-6 rounded-lg shadow-lg'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>Resume & Achievements</h2>
            <div className='grid grid-cols-2 gap-6 mb-6'>
              <div className='text-center'>
                <h3 className='text-5xl font-bold text-blue-600'>12</h3>
                <p className='text-gray-600'>Years of Experience</p>
              </div>
              <div className='text-center'>
                <h3 className='text-5xl font-bold text-blue-600'>97</h3>
                <p className='text-gray-600'>Completed Projects</p>
              </div>
              <div className='text-center'>
                <h3 className='text-5xl font-bold text-blue-600'>81</h3>
                <p className='text-gray-600'>Happy Customers</p>
              </div>
              <div className='text-center'>
                <h3 className='text-5xl font-bold text-blue-600'>53</h3>
                <p className='text-gray-600'>Awards Won</p>
              </div>
            </div>
            <div className='flex justify-center space-x-4'>
              <a
                href='/path-to-your-resume.pdf' // Adjust the path to your resume
                className='inline-block px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300'
                download
              >
                Download Resume
              </a>
              <a
                href='/path-to-your-cv.pdf' // Adjust the path to your CV
                className='inline-block px-6 py-3 bg-green-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-green-700 transition duration-300'
                download
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
