import IconCheck from '../icons/check'
import IconError from '../icons/error'

export default function ListPhrase({ list }) {
  return (
    <div className="bg-white shadow-md rounded px-2 pt-2 pb-8 ">
      <table className="table-auto rounded-t-lg m-5 w-full mx-auto text-gray-800">
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
            className=" border-b border-gray-200"
          >
            <td className="px-4 py-3"> {res.phrase}</td>
            <td className="px-4 py-3"> {res.phrase.length}</td>
            <td className="px-4 py-3"> {res.phrase.length > 60 ? <IconError /> : <IconCheck />}</td>
          </tr>
        ))}
        <tr>
          <td className="px-4 py-3">Quantidade: {list.length} </td>
        </tr>
      </tbody>

    </table>
    </div>
    
  )
}