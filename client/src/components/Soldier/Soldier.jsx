import React from "react";

function Soldier() {
  const soldiers = [
    {
      name: "Captain Saurabh Kalia",
      rank: "Captain",
      regiment: "4 JAT Regiment (Infantry)",
    },
    {
      name: "Captain Nikesh Kalia",
      rank: "Captain",
      regiment: "4 JAT Regiment (Infantry)",
    },
  ];

  return (
    <div className="grid grid-cols-1 justify-center items-center gap-5 lg:grid-cols-3">
      {soldiers.map((soldier, index) => (
        <div
          className="flex flex-col justify-center items-center bg-card p-6 rounded-md"
          key={index}
        >
          <img src="https://shorturl.at/F7rn2" className="rounded-md" />
          <h3 className="text-2xl font-semibold text-white mt-6">
            {soldier.name}
          </h3>
          <span className="text-white text-lg">{soldier.rank}</span>
          <span className="text-white">{soldier.regiment}</span>
          <button className="bg-blue-900 hover:bg-blue-500 py-2 px-8 text-white text-lg rounded-md mt-4">
            View
          </button>
        </div>
      ))}
    </div>
  );
}

export default Soldier;
