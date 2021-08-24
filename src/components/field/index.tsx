import Button from "../button";

export default function Field({
  fields,
  register,
  nameInput,
  label,
  errors,
  fieldControl,
}) {
  return (
    <>
      {fields.map((field, index) => {
        let classCss =
          "appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white shadow";

        if (
          errors?.[nameInput]?.[index]?.name &&
          errors?.[nameInput]?.[index]?.name.type === "required"
        ) {
          classCss =
            "appearance-none block w-full bg-gray-200 text-gray-700 border-red-500 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white";
        }

        return (
          <div key={field.id} className="w-full px-3">
            <div className="flex flex-row justify-between">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                {label}
              </label>
              <div className="">
                <Button
                  isButton={nameInput !== "fieldPrefix" ? true : false}
                  fields={fields}
                  nameInput={nameInput}
                  nameButton="buttonAdd"
                  index={index}
                  fieldControl={fieldControl}
                />
                <Button
                  isButton={nameInput !== "fieldPrefix" && fields.length > 1 ? true : false}
                  fields={fields}
                  nameInput={nameInput}
                  nameButton="buttonRemove"
                  index={index}
                  fieldControl={fieldControl}
                />
              </div>
            </div>

            <input
              className={classCss}
              {...register(`${nameInput}.${index}.name` as const, {
                required: true,
              })}
            />

            {errors?.[nameInput]?.[index]?.name &&
              errors?.[nameInput]?.[index]?.name.type === "required" && (
                <p className="text-red-500 text-xs italic">
                  Campo Obrigatório.
                </p>
              )}
          </div>
        );
      })}
    </>
  );
}
