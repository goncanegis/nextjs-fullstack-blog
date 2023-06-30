import Link from "next/link";
import PaddingContainer from "../layout/padding-container";

const Navigation = () => {
  return (
    <div className="border-b sticky start-0 end-0 top-0 bg-white/90 backdrop-blur-md">
      <PaddingContainer>
        <div className="px-4 py-5 flex items-center justify-between">
          <Link href="/" className="font-bold text-lg">
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
