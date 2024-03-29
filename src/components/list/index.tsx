import React, { useState } from "react";
import { useEffect } from "react";
import { isGeneratorFunction } from "util/types";
import ButtonCopy from "../buttonCopy";
import IconCheck from "../icons/check";
import IconError from "../icons/error";

type Phrase = {
  phrase: string;
};

type ArrayPhrase = {
  list: Array<Phrase>;
  isLoading: boolean;
  isGernerator?: any;
};

export default function ListPhrase({ list, isLoading, isGernerator }: ArrayPhrase) {
  const [buttonCopy, setButtonCopy] = useState(false);
  const [buttonIndex, setButtonIndex] = useState(0);

  const handleCopy = (val: string, index, isBUtton?: boolean) => {
    navigator.clipboard.writeText(val);
    setButtonCopy(true);
    setButtonIndex(index);
  };

  useEffect(() => {

    if (isGernerator) {
      setButtonCopy(false)
    }
  }, [isLoading]);


  if (isLoading) {

    return (
        <div className="flex flex-col justify-center">
          <div className="bg-white shadow-md rounded px-2 pt-2 pb-8 ">
            <table className="table-auto rounded-t-lg m-5 w-full mx-auto text-gray-800">
              <thead>
                <tr className="text-left border-b-2 border-gray-300">
                  <th className="px-4 py-3">Frases</th>
                  <th className="px-4 py-3 text-center">Qtd. de caracteres</th>
                  <th className="px-4 py-3 text-center">Status</th>
                  <th className="px-4 py-3 text-center">Copie as frases</th>
                </tr>
              </thead>
              <tbody>
                {list.map((res, index) => (
                  <tr key={res.phrase} className=" border-b border-gray-200">
                    <td className="px-4 py-3" id="p1">
                      {res.phrase}
                    </td>
                    <td className="px-4 py-3 text-center"> {res.phrase.length}</td>
                    <td className="px-4 py-3 text-center">
                      {res.phrase.length > 60 ? <IconError /> : <IconCheck />}
                    </td>
                    <td className="px-4 py-3 text-center">
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
                  <td className="px-4 py-3"><b>{list.length}</b> Frases geradas </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
    );
  }

  return null;
}
