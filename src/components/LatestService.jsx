import React from "react";

function LatestService() {
  return (
    <section className="bg-gray-900 py-12 px-4 sm:py-16 sm:px-6">
      <div className="max-w-5xl mx-auto text-center text-white">
        {/* Heading */}
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-warning">
          Latest Sermon
        </h2>
        <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-10 opacity-90">
          Join us in reflecting on God’s word through our most recent service. 
          We invite you to watch, be inspired, and grow in your faith journey. 
          Share this message of hope and love with family and friends.
        </p>

        {/* Video Embed */}
        <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl aspect-video">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/9Ot2nCB2vmA"
            title="Latest Sermon"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default LatestService;
