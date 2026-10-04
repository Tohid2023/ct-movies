import { Search, Bell, Menu, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Header({ setSidebarOpen }) {
  const [searchText, setSearchText] = useState("");
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  const navigate = useNavigate();

  function handleSearch(event) {
    if (event.key === "Enter" && searchText.trim() !== "") {
      navigate(`/search?query=${searchText}`);
    }
  }

  return (
    <header className="relative flex h-[72px] items-center justify-between border-b border-[#292929] bg-[#171717] px-5 md:px-8 lg:px-10">
      {/* Mobile Menu */}
      <button
        onClick={() => setSidebarOpen(true)}
        className="text-gray-300 lg:hidden"
      >
        <Menu size={22} />
      </button>

      {/* Navigation */}
      <nav className="hidden items-center gap-7 md:flex">
        <a
          href="/"
          className="border-b-2 border-[#f5c400] pb-2 text-sm text-[#f5c400]"
        >
          All
        </a>

        <a href="#" className="text-sm text-gray-300 hover:text-white">
          Movie
        </a>

        <a href="#" className="text-sm text-gray-300 hover:text-white">
          Series
        </a>

        <button className="text-sm text-gray-300 hover:text-white">
          Genres
        </button>
      </nav>

      {/* Right Side */}
      <div className="ml-auto flex items-center gap-4">
        {/* Search */}
        <div className="hidden h-10 w-[260px] items-center rounded-full bg-[#0d0d0d] px-4 md:flex">
          <Search size={17} className="text-gray-400" />
          <input
            type="text"
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
            onKeyDown={handleSearch}
            placeholder="Search movies..."
            className="ml-2 min-w-0 flex-1 bg-transparent text-xs text-white outline-none placeholder:text-gray-600"
          />
        </div>

        <button
          onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
          className="text-gray-300 md:hidden"
        >
          {mobileSearchOpen ? <X size={20} /> : <Search size={20} />}
        </button>

        {/* Notification */}
        <button className="relative text-gray-300 hover:text-white">
          <Bell size={20} />

          <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-red-500" />
        </button>

        {/* Profile */}
        <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#f5c400] bg-[#333] text-xs font-bold">
          TL
        </div>
      </div>
      {mobileSearchOpen && (
    <div className="absolute left-0 top-[72px] z-40 w-full border-b border-[#292929] bg-[#171717] p-4 md:hidden">
        <div className="flex h-10 items-center rounded-full bg-[#0d0d0d] px-4">
            <Search size={17} className="text-gray-400" />
            <input
                autoFocus
                type="text"
                value={searchText}
                onChange={(event) => setSearchText(event.target.value)}
                onKeyDown={handleSearch}
                placeholder="Search movies..."
                className="ml-2 min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-gray-600"
            />
        </div>
    </div>
)}
    </header>
  );
}

export default Header;
