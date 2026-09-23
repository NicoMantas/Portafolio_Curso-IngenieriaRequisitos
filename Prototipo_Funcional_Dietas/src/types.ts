export type User = {
  id: string
  name: string
  email: string
  role: 'Médico nutricionista' | 'Clínica'
  provider: 'Google'
}

export type Food = {
  id: string
  name: string
  definition: string
  origin: string
  functionality: string
  macros: string
  glycemicIndex: string
  allergens: string[]
}

export type Nutrient = {
  id: string
  name: string
  definition: string
  functionality: string
  type: string
  subtype: string
  deficiencyDiseases: string[]
  foodSources: string[]
}

export type VitaminMineral = {
  id: string
  name: string
  classification: 'Liposoluble' | 'Hidrosoluble' | 'Mineral'
  functions: string[]
  rda: string
  deficiencySymptoms: string[]
  upperLimit: string
}

export type Disease = {
  id: string
  name: string
  physiopathology: string
  diagnosisCriteria: string[]
  differentialDiagnosis: string[]
  therapeuticTargets: string[]
  contraindicatedFoods: string[]
  indicatedMicronutrients: string[]
}

export type Diet = {
  id: string
  name: string
  objectives: string[]
  caloricIntake: string
  macroDistribution: string
  components: string[]
  notRecommended: string[]
  administrationRoute: string
  duration: string
  dosage: string
  supplementation: string
  compatibleDiseases: string[]
  note: string
}

export type Patient = {
  id: string
  name: string
  age: number
  weight: number
  height: number
  allergies: string[]
  incompatibilities: string[]
  familyHistory: string[]
  associatedDiseases: string[]
  diagnosis: string[]
}

export type AuditLog = {
  id: string
  entity: string
  action: string
  user: string
  timestamp: string
  previousValue?: string
  newValue?: string
}

export type AppState = {
  user: User | null
  foods: Food[]
  nutrients: Nutrient[]
  vitamins: VitaminMineral[]
  diseases: Disease[]
  diets: Diet[]
  patients: Patient[]
  selectedPatientId: string
  audit: AuditLog[]
}
