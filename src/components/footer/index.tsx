
export default function Footer() {
    return (
        <footer className="bg-indigo-600 items-center w-full h-24 border-t flex flex-col justify-center">
            <div className="w-1/3 flex justify-center">
                <img className="object-contain " width={80}
                    height={80} src="https://gruporgm.com.br/wp-content/uploads/2021/09/qr-code-pix-gerador-frases.png" alt="" />
                <p className="w-13 text-lg text-white ml-3 mt-3 ">
                    Gostou? Se quiser ajudar doe para manter o <br />
                    projeto sempre funcionando e atualizado. Obrigado!
                </p>
            </div>
        </footer>
    )
}