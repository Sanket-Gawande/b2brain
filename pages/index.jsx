import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaAlignLeft } from "react-icons/fa";
import Header from "../components/Header";
import MainComponent from "../components/MainComponent";
import SearchResult from "../components/SearchResult";
import Sidebar from "../components/Sidebar";
export default function Home({ accounts }) {
  const [searching, setSearching] = useState(false);
  const [toggle, setToggle] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  // showing  acccounts on search
  const [searchResult, setSearchResult] = useState([]);
  //  getting accounts on search
  const searchAcc = async (query) => {
    setSearchResult([]);
    const req = await fetch(
      `https://staging.staging.b2brain.com/search/autocomplete_org_all?q=${query}`
    );
    const res = await req.json();
    setSearchResult(res);
  };

  useEffect(() => {
    if (window.innerWidth < 768) {
      setToggle(false);
    }
    // handling sidebar
    window.onresize = () => {
      if (window.innerWidth > 768) {
        setToggle(true);
      }
    };
  }, []);
  return (
    <div className="w-full h-screen flex " >
      {/* menu on snmall screen */}
      <span
        className="h-[50px] bg-white px-4 absolute md:hidden flex items-center"
        onClick={() => setToggle(!toggle)}
      >
        <FaAlignLeft className="text-gray-800" />
      </span>
      {toggle && <Sidebar setToggle={setToggle} />}
      <section className="min-h-screen w-full ">
        <Header
          searchAcc={searchAcc}
          setToggle={setToggle}
          searching={searching}
          setSearching={setSearching}
          setSearchTerm={setSearchTerm}
          searchTerm={searchTerm}
        />

        {/* main content */}
        {searching ? (
          <SearchResult data={!searchTerm ? accounts : searchResult} />
        ) : (
          <MainComponent />
        )}
      </section>
    </div>
  );
}


export async function getStaticProps() {
  const req = await fetch(
    "https://staging.staging.b2brain.com/search/autocomplete_org_all"
  );
  const accounts = await req.json();
  return {
    props: {
      accounts,
    },
  };
}
