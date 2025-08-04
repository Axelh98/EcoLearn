"use client"

import categoryDataEn from "@/data/categoryData.en"
import categoryDataEs from "@/data/categoryData.es"
import { createContext, useContext, useState } from "react"
import { CategoryKey, Category } from "@/types/category"

interface CategoryContextProps {
  language: "en" | "es"
  setLanguage: (lang: "en" | "es") => void
  getCategoryById: (id: CategoryKey) => Category | undefined
}

const CategoryContext = createContext<CategoryContextProps | undefined>(undefined)

export const CategoryProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<"en" | "es">("es")

  const data = language === "en" ? categoryDataEn : categoryDataEs

  const getCategoryById = (id: CategoryKey) => {
    return data[id]
  }

  return (
    <CategoryContext.Provider value={{ language, setLanguage, getCategoryById }}>
      {children}
    </CategoryContext.Provider>
  )
}

export const useCategory = () => {
  const context = useContext(CategoryContext)
  if (!context) throw new Error("useCategory must be used within CategoryProvider")
  return context
}
