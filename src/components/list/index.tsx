import React, { useState } from "react";
import ButtonCopy from "../buttonCopy";
import IconCheck from "../icons/check";
import IconError from "../icons/error";

type Phrase = {
  phrase: string;
};

type ArrayPhrase = {
  list: Array<Phrase>;
  isLoading: boolean;
};

export default function ListPhrase({ list, isLoading }: ArrayPhrase) {
  const [buttonCopy, setButtonCopy] = useState(false);
  const [buttonIndex, setButtonIndex] = useState(0);

  const handleCopy = (val: string, index) => {
    navigator.clipboard.writeText(val);
    setButtonCopy(true);
    setButtonIndex(index);
  };


  if (isLoading) {
    return (
      <div className="flex flex-col justify-center">
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
                  <td className="px-4 py-3" id="p1">
                    {res.phrase}
                  </td>
                  <td className="px-4 py-3"> {res.phrase.length}</td>
                  <td className="px-4 py-3">
                    {res.phrase.length > 60 ? <IconError /> : <IconCheck />}
                  </td>
                  <td className="px-4 py-3">
                    <ButtonCopy
                      isCopied={
                        buttonCopy && buttonIndex === index ? true : false
                      }
                      handleCopy={() => handleCopy(res.phrase, index)}
                    />
                  </td>
                </tr>
              ))}
              <tr>
                <td className="px-4 py-3">Quantidade: {list.length} </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  return null;
}
