import React from "react";
import me from "../Assect/me.jpg";
import background from "../Assect/background.png";
import GitHubIcon from "@mui/icons-material/GitHub";

export const Header = () => {
  const gitHub = "https://github.com/atish-tech";
  return (
    <div style={{backgroundImage: `url(${background})`}} className="flex justify-between sm:px-10 px-1 py-10 sm:w-full w-[100vw]  ">
      <div className="flex items-center justify-center">
        <img className="w-[10rem] rounded-full px-4 py-3" src={me} />
        <p className="text-sm sm:text-4xl font-bold">Atish Kumar Thakur</p>
      </div>

      <div className="flex items-center">
        <button
          type="reset"
          onClick={() => {
            window.location.href = gitHub;
          }}
          className="flex items-center sm:gap-3  bg-[#131313] p-3 rounded-md"
        >
          <GitHubIcon />
          <p className="text-xs sm:text-xl">Follow Me on GitHub</p>
        </button>
      </div>
    </div>
  );
};
