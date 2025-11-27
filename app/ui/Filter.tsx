'use client'

import { useSearchParams, useRouter, usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"

export default function Filter() {
    const [isOpen, setIsOpen] = useState(false)
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const catalogRef = useRef<HTMLDivElement | null>(null)

    const updateFilter = (value: string) => {
        const params = new URLSearchParams(searchParams)

        if (value) {
            params.set('category', value)
        } else {
            params.delete('category')
        }

        router.replace(`${pathname}?${params.toString()}`)
        setIsOpen(false)
    }

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if (isOpen &&
                catalogRef.current &&
                !catalogRef.current.contains(e.target as Node)
            ) {
                setIsOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClick)

        return () => document.removeEventListener("mousedown", handleClick)
    }, [isOpen])


    return (
        <div className="catalog-button" ref={catalogRef}>
            <button onClick={() => setIsOpen(!isOpen)}>
                <span className="catalog-button_burger"></span>
                <span className="catalog-button_text">Каталог</span>
            </button>

            <div className="catalog" style={{ display: isOpen ? 'block' : 'none' }}>
                <ul className="catalog-list">
                    <li onClick={() => updateFilter("Игровая приставка")}>Игровая приставка</li>
                    <li onClick={() => updateFilter("Периферия для ПК")}>Периферия для ПК</li>
                    <li onClick={() => updateFilter("Игры и софт")}>Игры и софт</li>
                </ul>
            </div>
        </div>
    )
}