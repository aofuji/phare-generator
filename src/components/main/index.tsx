import React, { Fragment, useState } from "react";
import { BeakerIcon } from '@heroicons/react/solid'
import IconCheck from '../icons/check'
import IconError from '../icons/error'


export default function Main() {
  const [list, setList] = useState([]);

  //Prefix
  const [prefix, setprefix] = useState("");
  //Sufix

  const [inputFieldsSufix, setInputFieldsSufix] = useState([{ sufix: "" }])

  //accessory
  const [inputFieldAcessory, setInputFieldAcessory] = useState([{ acessory: "" }])

  const handleSubmit = async (e) => {
    e.preventDefault();


    const prefixVal = inputFieldsSufix.findIndex((res) => res.sufix === prefix);

    const sufixListStrings = inputFieldsSufix.map((res) => res.sufix);

    const acessoryListString = inputFieldAcessory.map((res) => res.acessory);
    const listConcatStrings = [prefix, ...sufixListStrings, ...acessoryListString];

    const sufix = hasDuplicates(sufixListStrings)
    const acessory = hasDuplicates(acessoryListString)
    const allForms = hasDuplicates(listConcatStrings)


    //Verifica prefix tem no sufix
    if (prefixVal !== -1) {
      alert("existe um sufixo ou prefixo campos iguais")
      return
    }

    //Verifica se existe sufix iguais na lista  
    if (sufix) {
      alert("Existe sufix com valores iguais")
      return
    }

    if (acessory) {
      alert("Existe acessorio com valores iquais")
      return;
    }

    if (allForms) {
      alert("Existe valores iguais nos campos preenchidos");
      return;
    }

    let data: Array<any> = []

    let listAcessory: Array<any> = inputFieldAcessory
    let listInverse: Array<any> = inputFieldAcessory.reverse()

    let acessoryTwoPosition: Array<any> = []

    listInverse.forEach((inverse) => {
      listAcessory.forEach((res) => {
        if (inverse.acessory !== res.acessory) {
          acessoryTwoPosition.push([inverse.acessory + ` ` + res.acessory])
        }

      });
    });


    inputFieldAcessory.forEach(({ acessory }, indexAcessory) => {

      inputFieldsSufix.forEach(({ sufix }, index) => {

        data.push([prefix, sufix, acessory])
        //Verifica o ultimo de uma posicao do acessorio
        if (inputFieldAcessory.length === (indexAcessory + 1)) {

          acessoryTwoPosition.forEach((final) => {
            data.push([prefix, sufix, `${final[0]}`])
          });
        }

      });

    });

    const phraseList = data.map((res) => {
      return { phrase: res.join(" ") };
    })

    setList(phraseList)

  }

  const hasDuplicates = (array) => {
    return (new Set(array)).size !== array.length;
  }

  const handleInputChange = (index: number, event, nameFIeld: string) => {
    if (nameFIeld === "sufix") {
      const values = [...inputFieldsSufix]

      values[index].sufix = event.target.value
      setInputFieldsSufix(values)
    } else {
      const values = [...inputFieldAcessory]

      values[index].acessory = event.target.value
      setInputFieldAcessory(values)
    }

  }

  const handleAddFields = (nameField: string): void => {

    if (nameField === "sufix") {

      if (inputFieldsSufix.length > 19) {
        alert("Limite de 20 campos")
        return;
      }

      const values = [...inputFieldsSufix];
      values.push({ sufix: "" });
      setInputFieldsSufix(values);
    } else {

      if (inputFieldAcessory.length > 29) {
        alert("Limite de 30 campos");
        return;
      }

      const values = [...inputFieldAcessory];
      values.push({ acessory: "" });
      setInputFieldAcessory(values);
    }

  };

  const handleRemoveFields = (index: number, nameField: string): void => {

    if (nameField === "sufix") {
      const values = [...inputFieldsSufix];
      values.splice(index, 1);
      setInputFieldsSufix(values);
    } else {
      const values = [...inputFieldAcessory];
      values.splice(index, 1);
      setInputFieldAcessory(values);
    }

  };


  return (
    <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
      <form onSubmit={handleSubmit}>
        {/* Prefix */}
        <h1 className="w-full border-b-2 border-fuchsia-600 ">Prefixo</h1>
        <div className="mt-2 mb-10  w-40">
          <input
            type="text"
            className="border-2 border-fuchsia-600 "
            placeholder="Prefix1"
            onChange={(e) => setprefix(e.target.value)}
            required
          />
        </div>
        {/* Sufix */}
        <h2 className="w-full border-b-2 border-fuchsia-600 ">Sufixo</h2>

        {inputFieldsSufix.map((input, index) => (
          <Fragment key={`${input}~${index}`} >
            <div className="mt-2 w-40 flex flex-row justify-items-start">
              <input
                className="border-2 border-fuchsia-600 "
                type="text"
                value={input.sufix}
                placeholder={`sufix${index + 1}`}
                onChange={(event) => handleInputChange(index, event, "sufix")}
                required
              />
              <div className="ml-4">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={() => handleAddFields("sufix")}
                > +
                </button>
              </div>
              {index == 0 ? (<div></div>) : (<div className="ml-4">
                <button
                  className="bg-red-400 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={() => handleRemoveFields(index, "sufix")}
                > -
                </button>
              </div>)}

            </div>
          </Fragment>
        ))}

        {/* Acessory */}
        <h2 className="w-full border-b-2 border-fuchsia-600 ">Acessório</h2>
        {inputFieldAcessory.map((input, index) => (
          <Fragment key={`${input}~${index}`} >
            <div className="mt-2 w-40 flex flex-row justify-items-start">
              <input
                className="border-2 border-fuchsia-600 "
                type="text"
                value={input.acessory}
                placeholder={`sufix${index + 1}`}
                onChange={(event) => handleInputChange(index, event, "acessory")}
                required
              />
              <div className="ml-4">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={() => handleAddFields("acessory")}
                > +
                </button>
              </div>
              {index == 0 ? (<div></div>) : (<div className="ml-4">
                <button
                  className="bg-red-400 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={() => handleRemoveFields(index, "acessory")}
                > -
                </button>
              </div>)}

            </div>
          </Fragment>
        ))}
        {/* BUtton */}
        <div className="w-4/5 flex justify-center mt-8">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-9 rounded focus:outline-none focus:shadow-outline"
          >
            Gerar
          </button>
        </div>
        {/*  */}
      </form>
      {list.length > 0 ? (
        <div className="list mt-8 mb-4">
          <table className="table-auto rounded-t-lg m-5 w-full mx-auto bg-gray-200 text-gray-800">
            <thead>
              <tr className="text-left border-b-2 border-gray-300">
                <th className="px-4 py-3">Frases</th>
                <th className="px-4 py-3">Qtd</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {list.map((res) => (
                <tr
                  key={res.phrase}
                  className="bg-gray-100 border-b border-gray-200"
                >
                  <td className="px-4 py-3"> {res.phrase}</td>
                  <td className="px-4 py-3"> {res.phrase.length}</td>
                  <td className="px-4 py-3"> {res.phrase.length > 60 ? <IconError /> : <IconCheck />}</td>
                </tr>
              ))}
              <tr>
                <td>Quantidade: </td>
                <td>{list.length}</td>
              </tr>
            </tbody>

          </table>
        </div>
      ) : (
        <div>Nenhuma frase gerada</div>
      )}  
    </main>
  );
}
