'use client'

import { usePathname, useSearchParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function Search() {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const [search, setSearch] = useState('')

    // Функція для оновлення URL з пошуком
    const updateFilter = (value: string) => {
        const params = new URLSearchParams(searchParams)

        if (value) {
            params.set('search', value)
        } else {
            params.delete('search')
        }

        router.replace(`${pathname}?${params.toString()}`)
    }

    // При монтуванні компонента зчитуємо параметр з URL
    useEffect(() => {
        const params = new URLSearchParams(searchParams)
        const searchParam = params.get('search') ?? ''
        setSearch(searchParam)
    }, [])

    return (
        <div className="search">
            <form
                className="search-wrapper"
                onSubmit={(e) => {
                    e.preventDefault()
                    updateFilter(search)
                }}
            >
                <input
                    className="search-wrapper_input"
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Пошук..."
                />
            </form>

            <div className="search-btn">
                <button onClick={() => updateFilter(search)}></button>
            </div>
        </div>
    )
}
