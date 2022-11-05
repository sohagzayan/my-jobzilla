import React from "react";

const Announcements = () => {
  return (
    <div className="md:w-[60%] w-[90%] mx-auto mt-6">
      <div className="container mx-auto">
        <div className="flex justify-end">
          <h3 className="font-semibold mb-2">Announcements 📢</h3>
        </div>
        <div className="alert bg-[#D0ECF0]">
          <div>
            <span className="text-[#306069] font-semibold">
              We are working on adding Project and internship Details. So just
              fill up profile only
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
