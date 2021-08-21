import { useRef, useState } from "react";
import IconCheck from "../icons/check";
import IconError from "../icons/error";

export default function ListPhrase({ list }) {



  const [buttonCopy, setButtonCopy] = useState(false);
  const [buttonIndex,setButtonIndex ] = useState(0);

  const handleCopy = (val: string, index) => {

    navigator.clipboard.writeText(val)
    setButtonCopy(true)
    setButtonIndex(index)
  };

  return (
    <div className="bg-white shadow-md rounded px-2 pt-2 pb-8 ">
      <table className="table-auto rounded-t-lg m-5 w-full mx-auto text-gray-800">
        <thead>
          <tr className="text-left border-b-2 border-gray-300">
            <th className="px-4 py-3">Frases</th>
            <th className="px-4 py-3">Qtd</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">Ação</th>
          </tr>
        </thead>
        <tbody>
          {list.map((res, index) => (
            <tr key={res.phrase} className=" border-b border-gray-200">
              <td className="px-4 py-3" id="p1" >
                {res.phrase}
              </td>
              <td className="px-4 py-3"> {res.phrase.length}</td>
              <td className="px-4 py-3">
                {res.phrase.length > 60 ? <IconError /> : <IconCheck />}
              </td>
              <td className="px-4 py-3">
                {buttonCopy && buttonIndex === index ? ( <button
                  className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                >
                  Copiado
                </button>) : (<button
                  className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                  onClick={() => handleCopy(res.phrase, index)}
                >
                  Copia
                </button>)
                }


              </td>
            </tr>
          ))}
          <tr>
            <td className="px-4 py-3">Quantidade: {list.length} </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
