import React from "react";

function Avartar({ url ,className}) {
  return (
    <img
      loading="lazy"
      className={`-mt-2 h-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110 ${className}`}
      src={url}
      alt="profile-pics"
    />
  );
}

export default Avartar;