import Link from "next/link";
import React from "react";
import { FaGithubSquare } from "react-icons/fa";

function Github() {
  return (
    <>
      <Link target="blank" href="https://github.com/Yopax">
        <FaGithubSquare className="w-7 h-7" />
      </Link>
    </>
  );
}

export default Github;