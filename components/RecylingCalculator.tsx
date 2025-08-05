"use client"

import { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { materialIcons } from "@/data/materialIcons"
import { recyclingCalculatorTexts } from "@/data/recyclingCalculatortexts"

const impactPerKg = {
  plastic: { energy: 5.8, water: 90 },
  "paper-cardboard": { energy: 4.3, water: 140 },
  glass: { energy: 0.3, water: 50 },
  metal: { energy: 14.0, water: 200 },
  textiles: { energy: 3.5, water: 50 },
  electronics: { energy: 6.0, water: 80 },
} as const

type MaterialKey = keyof typeof impactPerKg
type Unit = "kg" | "lb"

// Aquí definís el idioma, podrías hacerlo dinámico con contexto o estado
const language: "en" | "es" = "es"
const t = recyclingCalculatorTexts[language]

export default function RecyclingCalculator() {
  const [material, setMaterial] = useState<MaterialKey>("plastic")
  const [unit, setUnit] = useState<Unit>("kg")
  const [amount, setAmount] = useState(1)

  const convertToKg = (value: number) => (unit === "kg" ? value : value * 0.453592)
  const convertLitersToGallons = (liters: number) => liters * 0.264172

  const kgAmount = convertToKg(amount)
  const energySaved = impactPerKg[material].energy * kgAmount
  const waterSavedLiters = impactPerKg[material].water * kgAmount
  const waterSavedGallons = convertLitersToGallons(waterSavedLiters)

  return (
    <Card className="shadow-lg mb-8">
      <CardHeader>
        <CardTitle className="text-green-700">{t.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          {/* Material selection */}
          <div>
            <Label htmlFor="material">{t.material}</Label>
            <Select value={material} onValueChange={(v) => setMaterial(v as MaterialKey)}>
              <SelectTrigger>
                <SelectValue placeholder={t.material} />
              </SelectTrigger>
              <SelectContent>
                {Object.keys(impactPerKg).map((key) => (
                  <SelectItem key={key} value={key}>
                    <span className="mr-2">{materialIcons[key as MaterialKey]}</span>
                    {key.replace("-", " ").toUpperCase()}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Amount input */}
          <div>
            <Label htmlFor="amount">{t.amount}</Label>
            <Input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
              min={0}
              step={0.1}
            />
          </div>

          {/* Unit selector */}
          <div>
            <Label htmlFor="unit">{t.unit}</Label>
            <Select value={unit} onValueChange={(v) => setUnit(v as Unit)}>
              <SelectTrigger>
                <SelectValue placeholder={t.unit} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="kg">{t.kg}</SelectItem>
                <SelectItem value="lb">{t.lb}</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600 mb-2">
              {energySaved.toFixed(1)} kWh
            </div>
            <p className="text-sm text-gray-600">{t.energySaved}</p>
          </div>
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600 mb-2">
              {waterSavedLiters.toFixed(0)} L
            </div>
            <p className="text-sm text-gray-600">{t.waterSavedLiters}</p>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <div className="text-2xl font-bold text-purple-600 mb-2">
              {waterSavedGallons.toFixed(1)} gal
            </div>
            <p className="text-sm text-gray-600">{t.waterSavedGallons}</p>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-gray-500 mt-4">{t.disclaimer}</p>
      </CardContent>
    </Card>
  )
}
