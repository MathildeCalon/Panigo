import type { Exchange } from "../utils/types";

interface ExchangeProps {
    data: Exchange
}

export default function Exchange({data}: ExchangeProps){

    return (
        <div>
            {data.id}
        </div>
    )
}