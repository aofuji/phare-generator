import { ToastContainer, toast } from 'react-toastify';

type ButtonTypes = {
  fields?: any;
  fieldControl: any;
  nameButton: string;
  index: number;
  nameInput: any;
}

export default function Button({ fields, fieldControl, nameButton, index, nameInput }: ButtonTypes) {
  const addField = (field:any): void => {

    if (nameInput === "fieldSufix" && fields.length > 19) {
      toast.warn('Limite de 20 campos!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return
    } else if (nameInput === "fieldAcessory" && fields.length > 29) {
      toast.warn('Limite de 30 campos!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return
    }

    field.append({
      name: "",
    });
  };

  if (nameButton === "buttonAdd") {
    return (
      <button
        className="bg-green-400 hover:bg-green-500 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow mb-2"
        onClick={() => addField(fieldControl)}
      >
        +

      </button>

    );
  }

  return (
    <button
      className="bg-red-600 hover:bg-red-500 text-white font-semibold py-2 px-5 border border-gray-400 rounded shadow mb-2 ml-2"
      onClick={() => fieldControl.remove(index)}
    >
      -
    </button>
  );
}
