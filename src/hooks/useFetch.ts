import {useEffect, useState} from "react";
import {FeatureProductType} from "../components";
import {makeRequest} from "../makeRequest";
import {CategoriesType} from "../pages";

export const useFetch = (url: string) => {
    const [data, setData] = useState<FeatureProductType | FeatureProductType[] | CategoriesType[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
            const getData = async () => {
                try {
                    setLoading(true)
                    const data = (await makeRequest(url)).data.data
                    setData(data)
                } catch (error) {
                    setError((error as Error).message)
                }
                setLoading(false)
            }
            getData()
        },
        [url]
    )

    return [data, loading, error]
}