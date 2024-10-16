import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";


const Contact = () => {
 

  return (
    <>
 

    {/* map */}
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-black text-center mb-12" data-aos="fade-up">
          Contact Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Address */}
          <div
            className="bg-white border border-gray-200 p-6 rounded-lg shadow-lg flex items-start space-x-4"
            data-aos="fade-right"
          >
            <FaMapMarkerAlt className="text-4xl text-blue-600" />
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Our Address</h3>
              <p className="text-gray-700">Pti Mor, Bogura, Bangladesh</p>
            </div>
          </div>
          
          {/* Phone */}
          <div
            className="bg-white border border-gray-200 p-6 rounded-lg shadow-lg flex items-start space-x-4"
            data-aos="fade-up"
          >
            <FaPhoneAlt className="text-4xl text-green-600" />
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Call Us</h3>
              <p className="text-gray-700">01793324222</p>
            </div>
          </div>
          
          {/* Email */}
          <div
            className="bg-white border border-gray-200 p-6 rounded-lg shadow-lg flex items-start space-x-4"
            data-aos="fade-left"
          >
            <FaEnvelope className="text-4xl text-red-600" />
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Email Us</h3>
              <p className="text-gray-700">rongonhasan2@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>

        <div className="mt-8">
          <iframe
            className="w-full h-96 rounded-lg"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=bogura+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
    </>
   
  );
}

export default Contact;