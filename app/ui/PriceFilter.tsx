"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useState } from "react";

export default function PriceFilter() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const [min, setMin] = useState(searchParams.get("minPrice") || "");
    const [max, setMax] = useState(searchParams.get("maxPrice") || "");
    const [sale, setSale] = useState(searchParams.get("sale") === "true");

    const updateParams = (newValue: { min?: string; max?: string; sale?: boolean }) => {
        const params = new URLSearchParams(searchParams);

        if (newValue.min !== undefined) {
            if (newValue.min) {
                params.set("minPrice", newValue.min);
            } else {
                params.delete("minPrice");
            }
        }

        if (newValue.max !== undefined) {
            if (newValue.max) {
                params.set("maxPrice", newValue.max);
            } else {
                params.delete("maxPrice");
            }
        }

        if (newValue.sale !== undefined) {
            if (newValue.sale) {
                params.set("sale", "true");
            } else {
                params.delete("sale");
            }
        }

        router.replace(`${pathname}?${params.toString()}`);
    };

    return (
        <>
            <div className="filter-price">
                <div className="filter-price_title">Цена</div>

                <form>
                    <div className="filter-price_range">
                        <div className="filter-price_input-wrapper">
                            <label htmlFor="min" className="filter-price_label">
                                от
                            </label>
                            <input
                                id="min"
                                className="filter-price_input"
                                value={min}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    setMin(value);
                                    updateParams({ min: value });
                                }}
                            />
                        </div>

                        <div className="filter-price_input-wrapper">
                            <label htmlFor="max" className="filter-price_label">
                                до
                            </label>
                            <input
                                id="max"
                                className="filter-price_input"
                                value={max}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    setMax(value);
                                    updateParams({ max: value });
                                }}
                            />
                        </div>
                    </div>
                </form>
            </div>

            <div className="filter-check">
                <label className="filter-check_label">
                    <input
                        type="checkbox"
                        className="filter-check_checkbox"
                        checked={sale}
                        onChange={() => {
                            const newSale = !sale;
                            setSale(newSale);
                            updateParams({ sale: newSale });
                        }}
                    />
                    <span
                        className={`filter-check_checkmark ${sale ? "checked" : ""}`}
                    ></span>
                    <span className="filter-check_label-text">Акция</span>
                </label>
            </div>
        </>
    );
}
