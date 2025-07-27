import React from "react";
import { useNavigate } from "react-router-dom";

const platforms = [
  {
    name: "LeetCode",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png",
    external: "/e/prompt",
  },
  {
    name: "GeeksforGeeks",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/4/43/GeeksforGeeks.svg",
    external: "/e/gfg",
  },
  {
    name: "InterviewBit",
    logoUrl: "https://th.bing.com/th/id/OIP.7d_AE_xSzIoFeQBx-GjN0wAAAA?pid=ImgDetMain",
    external: "/e/interviewbit",
  },
  {
    name: "LintCode",
    logoUrl: "https://jsn.lintcode.com/static/img/logo/loading-logo.gif",
    external: "/e/lintcode",
  },
  {
    name: "BinarySearch",
    logoUrl: "https://binarysearch.com/apple-touch-icon.png",
    external: "/e/binarysearch",
  },
  {
    name: "Codeforces",
    logoUrl: "https://sta.codeforces.com/s/20922/images/codeforces-logo-with-telegram.png",
    external: "/e/codeforces",
  },
  {
    name: "AtCoder",
    logoUrl: "https://atcoder.jp/public/img/atcoder.png",
    external: "/e/atcoder",
  },
  {
    name: "HackerRank",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png",
    external: "/e/hackerrank",
  },
  {
    name: "CodeChef",
    logoUrl: "https://s3.amazonaws.com/codechef_shared/sites/all/themes/abessive/logo.svg",
    external: "/e/codechef",
  },
  {
    name: "SPOJ",
    logoUrl: "https://tse4.mm.bing.net/th/id/OIP.1LN5mWdAye9aaNHQj5gX7wHaHa?pid=ImgDetMain",
    external: "/e/spoj",
  },
];

const Edge = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-300 via-purple-300 to-indigo-400 px-4 py-8">
      <div className="flex flex-col gap-5 w-full max-w-md">
        {platforms.map(({ name, logoUrl, external }) => (
          <button
            key={name}
            onClick={() => navigate(external)}
            className="flex items-center gap-6 p-5 rounded-2xl bg-white/70 backdrop-blur-md shadow-xl transition-transform hover:scale-[1.02] hover:bg-white"
          >
            <div className="w-14 h-14 flex justify-center items-center bg-gray-100 rounded-full shadow">
              <img src={logoUrl} alt={name} className="w-8 h-8 object-contain" />
            </div>
            <span className="text-xl font-semibold text-gray-800 tracking-wide">{name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Edge;
