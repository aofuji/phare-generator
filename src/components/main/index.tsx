import React, { useState } from "react";

export default function Main() {
  const [list, setList] = useState([]);

  //Prefix
  const [prefix1, setprefix1] = useState("");
  //Sufix
  const [sufix1, setsufix1] = useState("");
  const [sufix2, setsufix2] = useState("");
  const [sufix3, setsufix3] = useState("");
  //accessory
  const [accessory1, setaccessory1] = useState("");
  const [accessory2, setaccessory2] = useState("");
  const [accessory3, setaccessory3] = useState("");
  const [accessory4, setaccessory4] = useState("");
  const [accessory5, setaccessory5] = useState("");
  const [accessory6, setaccessory6] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();

    const obj = [
      {
        phrase: `${prefix1} ${sufix1} ${accessory1}`,
      },
      {
        phrase: `${prefix1} ${sufix2} ${accessory2}`,
      },
      {
        phrase: `${prefix1} ${sufix3} ${accessory3}`,
      },
      {
        phrase: `${prefix1} ${sufix1} ${accessory4}`,
      },
      {
        phrase: `${prefix1} ${sufix2} ${accessory5}`,
      },
      {
        phrase: `${prefix1} ${sufix3} ${accessory6}`,
      },
    ];

    console.log(obj)

    setList([...obj]);

  };

  return (
    <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
      {/* Prefix */}
      <h1 className="w-full border-b-2 border-fuchsia-600 ">Prefix Name</h1>
      <div className="mt-2 mb-10" >
        <p>
          <input
            type="text"
            className="border-2 border-fuchsia-600 "
            placeholder="Prefix1"
            onChange={(e) => setprefix1(e.target.value)}
          />
        </p>
      </div>
      {/* Sufix */}
      <h2 className="w-full border-b-2 border-fuchsia-600 ">Sufix Name</h2>
      <div className="mb-10">
        <p>
          <input
            type="text"
            placeholder="Sufix1"
            onChange={(e) => setsufix1(e.target.value)}
          />
        </p>
        <p>
          <input
            type="text"
            placeholder="Sufix2"
            onChange={(e) => setsufix2(e.target.value)}
          />
        </p>
        <p>
          <input
            type="text"
            placeholder="Sufix3"
            onChange={(e) => setsufix3(e.target.value)}
          />
        </p>
      </div>
      {/* Acessory */}
      <h2 className="w-full border-b-2 border-fuchsia-600 ">Acessory</h2>
      <div className="mb-10">
        <p>
          <input
            type="text"
            placeholder="Acessory1"
            onChange={(e) => setaccessory1(e.target.value)}
          />
        </p>
        <p>
          <input
            type="text"
            placeholder="Acessory2"
            onChange={(e) => setaccessory2(e.target.value)}
          />
        </p>
        <p>
          <input
            type="text"
            placeholder="Acessory3"
            onChange={(e) => setaccessory3(e.target.value)}
          />
        </p>
        <p>
          <input
            type="text"
            placeholder="Acessory4"
            onChange={(e) => setaccessory4(e.target.value)}
          />
        </p>
        <p>
          <input
            type="text"
            placeholder="Acessory5"
            onChange={(e) => setaccessory5(e.target.value)}
          />
        </p>
        <p>
          <input
            type="text"
            placeholder="Acessory6"
            onChange={(e) => setaccessory6(e.target.value)}
          />
        </p>
      </div>
      <div className="w-4/5 flex justify-center mt-8">
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handleClick}
        >
          Gerar
        </button>
      </div>

      <div className="list mt-8 mb-4">

        <table className="table-auto rounded-t-lg m-5 w-full mx-auto bg-gray-200 text-gray-800">
          <thead>
            <tr className="text-left border-b-2 border-gray-300">
              <th className="px-4 py-3">Frase</th>
            </tr>
          </thead>
          <tbody>
            {list.map((res) => (
              <tr key={res.phrase} className="bg-gray-100 border-b border-gray-200">
                <td className="px-4 py-3"> {res.phrase}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
