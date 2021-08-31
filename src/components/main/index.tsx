import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";

import Loading from "../loading";

import Field from "../field";
import ListPhrase from "../list";

export default function Main() {
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);

  const[reset, setReset] = useState(false)  


  const onHandleDuplicates = (array) => {
    return new Set(array).size !== array.length;
  };

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<any>({
    defaultValues: {
      fieldPrefix: [{ name: "Prefixo" }],
      fieldSufix: [{ name: "Sufixo" }],
      fieldAcessory: [{ name: "Acessory" }],
    },
  });

  const fieldPrefix = useFieldArray({
    control,
    name: "fieldPrefix",
  });

  const fieldSufix = useFieldArray({
    control,
    name: "fieldSufix",
  });

  const fieldAcessory = useFieldArray({
    control,
    name: "fieldAcessory",
  });

  const watchFieldPrefix = watch("fieldPrefix");
  const watchFieldSufix = watch("fieldSufix");
  const watchFieldAcessory = watch("fieldAcessory");

  const controlledFieldPrefix = fieldPrefix.fields.map((field, index) => {
    return {
      ...field,
      ...watchFieldPrefix[index],
    };
  });

  const controlledFieldsSufix = fieldSufix.fields.map((field, index) => {
    return {
      ...field,
      ...watchFieldSufix[index],
    };
  });

  const controlledFieldsAcessory = fieldAcessory.fields.map((field, index) => {
    return {
      ...field,
      ...watchFieldAcessory[index],
    };
  });

  type IField = {
    name: string;
  };

  type IArray = {
    fieldAcessory: Array<IField>;
    fieldPrefix: Array<IField>;
    fieldSufix: Array<IField>;
  };

  const onSubmit = (data: IArray, e) => {

    e.preventDefault();

    setReset(true)

    setLoading(true);


    verifyFieldDuplicate(data);

    if (verifyFieldDuplicate(data)) {
      toast.warn("Existem valores duplicados", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      // onHandleFieldErrPosition(data)
      return;
    }

    const listAcessoryTwoPosition = concatFieldAcessory(data);

    const list = verifylist(data, listAcessoryTwoPosition);

    const listPhrase = list.map((res) => {
      return { phrase: res.join(" ") };
    });

    const listSort = onHandleSortList(listPhrase)

    setTimeout(() => {
      setList(listSort);
      setLoading(false);
    }, 400);
  };

  const onHandleSortList = (arr: Array<any>):Array<any> => {
    const listArr = arr.sort((a, b) => {


      if (a.phrase.length === 60)
        return -2

      if (a.phrase.length < 60 && a.phrase.length > b.phrase.length)
        return -1


      if (a.phrase.length > 60)
        return 1;

      return 0
    })

    return listArr;

  }

  const verifyFieldDuplicate = (data: IArray): boolean => {
    const arrPrefix = data.fieldPrefix.map((res) => res.name);
    const arrSufixo = data.fieldSufix.map((res) => res.name);
    const arrAcessory = data.fieldAcessory.map((res) => res.name);

    const arrConcat = [...arrPrefix, ...arrSufixo, ...arrAcessory];

    return onHandleDuplicates(arrConcat);
  };

  const onHandleFieldErrPosition = (data: IArray) => {
    console.log(data);
    const arrPrefix = data.fieldPrefix.map((res) => res.name);
    const arrSufixo = data.fieldSufix.map((res) => res.name);
    const arrAcessory = data.fieldAcessory.map((res) => res.name);

    // const compare = arrSufixo.filter((res) => arrAcessory.filter((acessory) => acessory.name === res.name).length)

    // console.log(JSON.stringify(compare))

    // const positionsufixo = arrSufixo.findIndex((res, index) => {
    //   if (res.name === compare[0].name) {

    //     return res.index =index

    //   }
    //   return null
    // })

    // console.log(positionsufixo)

    console.log("Match found: " + findMatch(arrSufixo, arrAcessory));
    console.log("Match found1: " + findMatch(arrAcessory, arrSufixo));

    function findMatch(array_1_small, array2_large) {
      var positions = Array.from(array2_large.entries()).reduce((acc, t) => {
        var index = t[0];
        var element = t[1];
        if (!acc.hasOwnProperty(element)) {
          acc[element] = [];
        }
        acc[element].push(index);
        return acc;
      }, {});
      var result = new Set();
      array_1_small.forEach((x) => {
        if (positions[x] === undefined) {
          return;
        }
        positions[x].forEach((index) => result.add(index));
      });
      return Array.from(result);
    }
  };

  const verifylist = (formArray: IArray, acessoryTwoPosition: Array<any>) => {
    const listAcessory = formArray.fieldAcessory;
    const listSufix = formArray.fieldSufix;
    const prefix = formArray.fieldPrefix[0];

    let data: Array<any> = [];

    listAcessory.forEach((acessory, indexAcessory) => {
      listSufix.forEach((sufix, index) => {
        data.push([prefix.name, sufix.name, acessory.name]);
        //Verifica o ultimo de uma posicao do acessorio
        if (listAcessory.length === indexAcessory + 1) {
          acessoryTwoPosition.forEach((final) => {
            data.push([prefix.name, sufix.name, `${final[0]}`]);
          });
        }
      });
    });

    return data;
  };

  const concatFieldAcessory = (list: IArray): Array<any> => {
    const listAcessory: Array<IField> = [...list.fieldAcessory];
    const listInverse: Array<IField> = [...listAcessory.reverse()];

    let data: Array<any> = [];

    listInverse.forEach((inverse) => {
      listAcessory.forEach((res) => {
        if (inverse.name !== res.name) {
          data.push([inverse.name + ` ` + res.name]);
        }
      });
    });

    return data;
  };

  return (
    <div className="flex flex-col justify-center bg-gray-50">
      <main className="p-9">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          {/* Prefix */}
          <div className="flex flex-wrap -mx-3 mb-6">
            <Field
              fields={controlledFieldPrefix}
              register={register}
              nameInput="fieldPrefix"
              label="Prefix"
              fieldControl={fieldPrefix}
              errors={errors}
            />
          </div>

          <div className="flex flex-row justify-between">
            {/* Sufix */}
            <div className="w-full -mx-3 mb-6 mr-2">
              <Field
                fields={controlledFieldsSufix}
                register={register}
                nameInput="fieldSufix"
                label="Sufix"
                fieldControl={fieldSufix}
                errors={errors}
              />
            </div>

            {/* Acessory */}
            <div className="w-full -mx-3 mb-6">
              <Field
                fields={controlledFieldsAcessory}
                register={register}
                nameInput="fieldAcessory"
                label="Acessorio"
                fieldControl={fieldAcessory}
                errors={errors}
              />
            </div>
          </div>

          {/* Button */}
          <div className="flex flex-wrap -mx-3 mb-6 ml-1">
            <button
              type="submit"
              className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            >
              Gerar
            </button>
          </div>
        </form>

        <Loading value={loading} />
        <ListPhrase list={list} isLoading={!loading} isGernerator={reset} />
      </main>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ToastContainer />
    </div>
  );
}
