import * as React from "react";
import { useForm, useFieldArray } from "react-hook-form";

import Field from "../field"

export default function TextField() {

  const { register, handleSubmit, control, watch, formState: { errors } } = useForm<any>({
    defaultValues:{
      fieldArray: [{ name: "test",}],
      fieldArray1: [{ name: "test1"}],

    },
  });

  const { fields, append } = useFieldArray({
    control,
    name: "fieldArray"
  });

  const fl = useFieldArray({
    control,
    name: "fieldArray1"
  });


  const watchFieldArray = watch("fieldArray");
  const watchFieldArray1 = watch("fieldArray1");



  const controlledFields = fields.map((field, index) => {
    return {
      ...field,
      ...watchFieldArray[index]
    };
  });


  const controlledFields1 = fl.fields.map((field, index) => {
    return {
      ...field,
      ...watchFieldArray1[index]
    };
  });


  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
  
{/* 
      <Field control={controlledFields} register={register} nameInput="fieldArray" errors={errors} />

      <Field control={controlledFields1} register={register} nameInput="fieldArray1" errors={errors} /> */}

      <div>
        <hr></hr>
        <button
          type="button"
          onClick={() =>
            append({
              name: "bill"
            })
          }
        >
          inserir0
        </button>
        <br />
        <button
          type="button"
          onClick={() =>
            fl.append({
              name: "teste"
            })
          }
        >
          inserir1
        </button>
      </div>

      <input type="submit" value="enviar" />
    </form>
  );
}