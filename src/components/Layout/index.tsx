import { Link, useLocation, useNavigate } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const showBackButton =
    location.pathname === "/forgot-password" ||
    location.pathname === "/otp" ||
    location.pathname === "/edit-resume";
  return (
    <div className="flex flex-col relative  justify-center items-center position-relative bg-[linear-gradient(209deg,#cbcbcb,#7080eb)] text-white w-[600px] h-[600px]">
      <Link to="/home" className="text-sm">
        Home
      </Link>
      <Link to="/edit-resume" className="text-sm">
        Resume
      </Link>
      {location.pathname !== "/edit-resume" && (
        <div className="flex flex-col items-center">
          <img src="./assets/2.png" width="70px" alt="snap" />
          <h1 className="text-2xl font-medium">Snap!</h1>
          <p className="text-md">You ultimate job hunting comapnion.</p>
        </div>
      )}
      {showBackButton && (
        <div className="absolute top-6 left-6">
          <button
            onClick={() => navigate(-1)}
            className="p-2 gap-2 flex rounded-full bg-blue-700 text-xs hover:bg-gray-700"
          >
            <img src="./assets/arrow-left.svg" width="15px" alt="prev" />
          </button>
        </div>
      )}

      <div className="min-h-[300px] w-full flex p-2 justify-center items-center">
        {children}
      </div>

      <h1>
        Made with ❤ by
        <a
          href="https://github.com/Ardent10"
          className="hover:underline"
          rel="noopener"
        >
          {" "}
          Zakariya
        </a>
      </h1>
    </div>
  );
}
