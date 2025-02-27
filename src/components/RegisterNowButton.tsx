import React from "react";
import clsx from "clsx";

import { FaArrowRight } from "react-icons/fa6";

const RegisterNowButton = ({ dark }: { dark?: boolean }) => {
  return (
    <a href="#about-us">
      <button
        type="button"
        className={clsx(
          "flex items-center justify-center min-w-[205px] mt-3 px-6 h-14 rounded-full w-full sm:w-fit",
          {
            "text-white bg-foreground": dark,
            "text-foreground bg-white": !dark,
          }
        )}
      >
        <div className="-mt-1 font-sans text-xl font-semibold flex gap-2 items-center">
          Find out more <FaArrowRight />
        </div>
      </button>
    </a>
  );
};

export default RegisterNowButton;
