"use client";

import { useState } from "react";
import { IconContext } from "react-icons";
import { LuSearch } from "react-icons/lu";

export default function FruitsSectionSearchForm() {
  const [search, setSearch] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { value } = e.currentTarget;
    setSearch(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto w-full max-w-96 lg:max-w-110"
    >
      <label className="flex w-full flex-row items-center gap-4 rounded-full border-2 border-white bg-zinc-900 px-6 py-2 transition-colors duration-300 has-[:focus]:bg-transparent">
        <input
          id="search"
          className="flex-grow bg-transparent text-white outline-none"
          type="text"
          placeholder="Search"
          onChange={handleChange}
          value={search}
          autoComplete="off"
        />

        <button
          className="h-fit w-fit flex-initial rounded-r-full opacity-50 transition-all duration-300 hover:opacity-100"
          type="submit"
        >
          <IconContext.Provider
            value={{
              size: "24px",
              color: "#FFFFFF",
            }}
          >
            <LuSearch />
          </IconContext.Provider>
        </button>
      </label>
    </form>
  );
}
