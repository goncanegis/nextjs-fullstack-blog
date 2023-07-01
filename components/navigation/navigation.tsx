import Link from "next/link";
import PaddingContainer from "../layout/padding-container";

const Navigation = () => {
  return (
    <div className="sticky end-0 start-0 top-0 z-20 border-b bg-white/90 backdrop-blur-md">
      <PaddingContainer>
        <div className="flex items-center justify-between px-4 py-5">
          <Link href="/" className="text-lg font-bold">
            Explorer
          </Link>
          {/* Category Links */}
          <nav className="">
            <ul className="flex items-center gap-4 text-neutral-600">
              <li>
                <Link href="/cities">Cities</Link>
              </li>
              <li>
                <Link href="/experiences">Experiences</Link>
              </li>
            </ul>
          </nav>
        </div>
      </PaddingContainer>
    </div>
  );
};

export default Navigation;
