export type CategoryKey =
  | "paper-cardboard"
  | "plastic"
  | "glass"
  | "metal"
  | "electronics"
  | "textiles"
  | "organic"
  | "hazardous"

export interface Category {
  title: string
  icon: string
  description: string
  acceptedItems: string[]
  rejectedItems: string[]
  preparation: string[]
  environmentalImpact: {
    energySaved: string
    waterSaved: string
    landfillDiverted: string
  }
  tips: string[]
}
