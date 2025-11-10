import React from "react";
import "/styles.scss"; // Keep your existing custom SCSS import

const ProfileSection = () => {
  return (
    <section id="profile-section" className="py-5">
      <div className="container mx-auto px-4">
        <div className="row flex flex-wrap -mx-4">
          {/* Education Card */}
          <div className="col-12 col-lg-4 col-md-6 pt-4 px-4 w-full md:w-1/2 lg:w-1/3">
            <div className="card p-6 shadow-sm education">
              <h3 className="text-white">Education</h3>
              <p className="text-white">
                <strong>2020 - 2026</strong>
              </p>
              <h5 className="text-white">Bachelor in Engineering</h5>
              <p className="text-white">
                Computer and Communication Engineering
              </p>
              <p className="text-white mt-4">
                <strong>2023 - 2025</strong>
              </p>
              <h5 className="text-white">Web Development Program</h5>
              <p className="text-white">Institute of Technology (Caltech)</p>
            </div>
          </div>

          {/* Experiences Card */}
          <div className="col-12 col-lg-4 col-md-6 pt-4 px-4 w-full md:w-1/2 lg:w-1/3">
            <div className="card p-6 shadow-sm experiences">
              <h3>Experiences</h3>
              <p>
                <strong>2021 - 2023</strong>
              </p>
              <h5>Creative Agency: Head of Design Team</h5>
              <p>
                Guiding team based on project demands and application
                requirements
              </p>
              <p className="mt-4">
                <strong>2023 - Present</strong>
              </p>
              <h5>Studio Alpha: Senior Developer</h5>
              <p>
                Leading development projects and mentoring junior developers
              </p>
            </div>
          </div>

          {/* Interests Card */}
          <div className="col-12 col-lg-4 col-md-12 pt-4 px-4 w-full md:w-full lg:w-1/3">
            <div className="card p-6 shadow-sm interests">
              <h3 className="text-white">Interests</h3>
              <p className="text-white">
                <strong>Technology</strong>
              </p>
              <h5 className="text-white">AI & Machine Learning</h5>
              <p className="text-white">
                Exploring latest advancements in AI technology
              </p>
              <p className="text-white mt-4">
                <strong>Creative</strong>
              </p>
              <h5 className="text-white">UI/UX Design & Video Editing</h5>
              <p className="text-white">
                Creating intuitive designs and editing my tutorial videos
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
