import React, { useState, useEffect } from "react";

const ThemeChanger = () => {
  const [theme, setTheme] = useState("");

  const [isOpen, setIsOpen] = useState(false);

  const options = ["red", "green", "blue"];

  const handleOptionClick = (option) => {
    setTheme(option);
    setIsOpen(false);
  };
  console.log(theme);
  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = (theme) => {
    setTheme(theme);
  };

  return (
    <div className="p-4 bg-background text-text min-h-screen flex flex-col gap-8">
      <h1 className="text-2xl font-bold mb-4">
        React + Tailwind CSS Theme Changer
      </h1>
      <div className="relative">
        <button
          defaultValue={"green"}
          className="w-full text-left bg-white border border-gray-300 rounded px-4 py-2 shadow-sm"
          onClick={() => setIsOpen(!isOpen)}
        >
          {theme ? theme : "green"}
          <span className="float-right">{isOpen ? "▲" : "▼"}</span>
        </button>

        <div
          className={`absolute top-10 left-0 w-full bg-white border border-gray-300 rounded shadow-md transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {options.map((option, index) => (
            <div
              key={index}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      </div>

      <select
        className=" text-text bg-primary px-3 py-1.5 duration-700 h-10 rounded"
        name="theme"
        value={theme}
        onChange={(e) => {
          setTheme(e.target.value);
        }}
        id=""
      >
        <option className=" duration-700" value="green">
          green
        </option>
        <option className=" duration-700" value="red">
          red
        </option>
        <option className=" duration-700" value="blue">
          blue
        </option>
      </select>
      <div className=" space-x-3">
        <button
          onClick={() => {
            toggleTheme("red");
          }}
          className="px-4 py-2 bg-primary text-white rounded shadow"
        >
          Switch to red Theme
        </button>
        <button
          onClick={() => {
            toggleTheme("green");
          }}
          className="px-4 py-2 bg-primary text-white rounded shadow"
        >
          Switch to green Theme
        </button>{" "}
        <button
          onClick={() => {
            toggleTheme("blue");
          }}
          className="px-4 py-2 bg-primary text-white rounded shadow"
        >
          Switch to blue Theme
        </button>
      </div>
    </div>
  );
};

export default ThemeChanger;
