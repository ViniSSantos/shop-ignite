//Devido ao uso de []. o [id].tsx fazer ser o nome do parâmetro esperado. Se torna um parâmetro de "porduct".
//Quando queremos criar uma rota no NextJS que receba um parâmetro slug
import { useRouter } from "next/router"

export default function Item () {
const {query} = useRouter() //Usando o Hook UseRouter do Next, no Obj "query" temos acesso as parâmetros da url

    return (
        <>
            <h1> Product: {JSON.stringify(query)}</h1>    
        </>
    )
}