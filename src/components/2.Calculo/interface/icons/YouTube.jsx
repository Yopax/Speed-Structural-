import Link from "next/link";
import React from "react";
import { FaYoutubeSquare } from "react-icons/fa";

function YouTube() {
  return (
    <>
      <Link href="https://www.youtube.com/channel/UC_EYFEDjOPBJa5XNC8_B9Iw">
        <FaYoutubeSquare className="w-7 h-7" />
      </Link>
    </>
  );
}

export default YouTube;