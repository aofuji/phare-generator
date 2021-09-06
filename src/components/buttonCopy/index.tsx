
type ButtonCopyTypes = {
  isCopied: boolean;
  handleCopy: any;
}

export default function ButtonCopy({ isCopied, handleCopy }: ButtonCopyTypes) {

  if (isCopied) {
    return (
      <>
        <button
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        >
          Copiado
        </button>
      </>
    )
  }

  return (
    <>
      <button
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        onClick={handleCopy}
      >
        Copie
      </button>
    </>
  )

}