import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type PropsWithChildren,
} from 'react'
import { initialAppState } from '../services/mockData'
import { readStorage, writeStorage } from '../services/storage'
import type { AppState, AuditLog, Diet, Disease, Food, Nutrient, Patient, User, VitaminMineral } from '../types'

type AppContextValue = {
  state: AppState
  user: User | null
  isAuthenticated: boolean
  loginWithGoogle: () => void
  logout: () => void
  selectedPatient: Patient | undefined
  setSelectedPatientId: (id: string) => void
  addFood: (food: Food) => void
  updateFood: (id: string, food: Partial<Food>) => void
  addNutrient: (nutrient: Nutrient) => void
  updateNutrient: (id: string, nutrient: Partial<Nutrient>) => void
  addVitamin: (vitamin: VitaminMineral) => void
  updateVitamin: (id: string, vitamin: Partial<VitaminMineral>) => void
  addDisease: (disease: Disease) => void
  updateDisease: (id: string, disease: Partial<Disease>) => void
  addDiet: (diet: Diet) => void
  updateDiet: (id: string, diet: Partial<Diet>) => void
  addPatient: (patient: Patient) => void
  updatePatient: (id: string, patient: Partial<Patient>) => void
  appendAudit: (entity: string, action: string, previousValue?: string, newValue?: string) => void
}

const AppContext = createContext<AppContextValue | undefined>(undefined)

const buildAudit = (entity: string, action: string, userName: string, previousValue?: string, newValue?: string): AuditLog => ({
  id: crypto.randomUUID(),
  entity,
  action,
  user: userName,
  timestamp: new Date().toISOString(),
  previousValue,
  newValue,
})

export function AppProvider({ children }: PropsWithChildren) {
  const [state, setState] = useState<AppState>(() => {
    const stored = readStorage()
    return stored ?? { ...initialAppState, user: null }
  })

  useEffect(() => {
    writeStorage(state)
  }, [state])

  const loginWithGoogle = useCallback(() => {
    setState((prev) => ({
      ...prev,
      user: prev.user ?? initialAppState.user,
    }))
  }, [])

  const logout = useCallback(() => {
    setState((prev) => ({ ...prev, user: null }))
  }, [])

  const appendAudit = useCallback(
    (entity: string, action: string, previousValue?: string, newValue?: string) => {
      setState((prev) => ({
        ...prev,
        audit: [
          buildAudit(entity, action, prev.user?.name ?? 'Sistema', previousValue, newValue),
          ...prev.audit,
        ].slice(0, 12),
      }))
    },
    [],
  )

  const addFood = useCallback((food: Food) => {
    setState((prev) => ({
      ...prev,
      foods: [...prev.foods, food],
      audit: [buildAudit('Alimento', 'Crear', prev.user?.name ?? 'Sistema', undefined, food.name), ...prev.audit].slice(0, 12),
    }))
  }, [])

  const updateFood = useCallback((id: string, food: Partial<Food>) => {
    setState((prev) => {
      const previous = prev.foods.find((item) => item.id === id)
      return {
        ...prev,
        foods: prev.foods.map((item) => (item.id === id ? ({ ...item, ...food } as Food) : item)),
        audit: [buildAudit('Alimento', 'Actualizar', prev.user?.name ?? 'Sistema', previous?.name, food.name), ...prev.audit].slice(0, 12),
      }
    })
  }, [])

  const addNutrient = useCallback((nutrient: Nutrient) => {
    setState((prev) => ({
      ...prev,
      nutrients: [...prev.nutrients, nutrient],
      audit: [buildAudit('Nutriente', 'Crear', prev.user?.name ?? 'Sistema', undefined, nutrient.name), ...prev.audit].slice(0, 12),
    }))
  }, [])

  const updateNutrient = useCallback((id: string, nutrient: Partial<Nutrient>) => {
    setState((prev) => {
      const previous = prev.nutrients.find((item) => item.id === id)
      return {
        ...prev,
        nutrients: prev.nutrients.map((item) => (item.id === id ? ({ ...item, ...nutrient } as Nutrient) : item)),
        audit: [buildAudit('Nutriente', 'Actualizar', prev.user?.name ?? 'Sistema', previous?.name, nutrient.name), ...prev.audit].slice(0, 12),
      }
    })
  }, [])

  const addVitamin = useCallback((vitamin: VitaminMineral) => {
    setState((prev) => ({
      ...prev,
      vitamins: [...prev.vitamins, vitamin],
      audit: [buildAudit('Vitamina/Mineral', 'Crear', prev.user?.name ?? 'Sistema', undefined, vitamin.name), ...prev.audit].slice(0, 12),
    }))
  }, [])

  const updateVitamin = useCallback((id: string, vitamin: Partial<VitaminMineral>) => {
    setState((prev) => {
      const previous = prev.vitamins.find((item) => item.id === id)
      return {
        ...prev,
        vitamins: prev.vitamins.map((item) => (item.id === id ? ({ ...item, ...vitamin } as VitaminMineral) : item)),
        audit: [buildAudit('Vitamina/Mineral', 'Actualizar', prev.user?.name ?? 'Sistema', previous?.name, vitamin.name), ...prev.audit].slice(0, 12),
      }
    })
  }, [])

  const addDisease = useCallback((disease: Disease) => {
    setState((prev) => ({
      ...prev,
      diseases: [...prev.diseases, disease],
      audit: [buildAudit('Enfermedad', 'Crear', prev.user?.name ?? 'Sistema', undefined, disease.name), ...prev.audit].slice(0, 12),
    }))
  }, [])

  const updateDisease = useCallback((id: string, disease: Partial<Disease>) => {
    setState((prev) => {
      const previous = prev.diseases.find((item) => item.id === id)
      return {
        ...prev,
        diseases: prev.diseases.map((item) => (item.id === id ? ({ ...item, ...disease } as Disease) : item)),
        audit: [buildAudit('Enfermedad', 'Actualizar', prev.user?.name ?? 'Sistema', previous?.name, disease.name), ...prev.audit].slice(0, 12),
      }
    })
  }, [])

  const addDiet = useCallback((diet: Diet) => {
    setState((prev) => ({
      ...prev,
      diets: [...prev.diets, diet],
      audit: [buildAudit('Dieta', 'Crear', prev.user?.name ?? 'Sistema', undefined, diet.name), ...prev.audit].slice(0, 12),
    }))
  }, [])

  const updateDiet = useCallback((id: string, diet: Partial<Diet>) => {
    setState((prev) => {
      const previous = prev.diets.find((item) => item.id === id)
      return {
        ...prev,
        diets: prev.diets.map((item) => (item.id === id ? ({ ...item, ...diet } as Diet) : item)),
        audit: [buildAudit('Dieta', 'Actualizar', prev.user?.name ?? 'Sistema', previous?.name, diet.name), ...prev.audit].slice(0, 12),
      }
    })
  }, [])

  const addPatient = useCallback((patient: Patient) => {
    setState((prev) => ({
      ...prev,
      patients: [...prev.patients, patient],
      selectedPatientId: patient.id,
      audit: [buildAudit('Paciente', 'Crear', prev.user?.name ?? 'Sistema', undefined, patient.name), ...prev.audit].slice(0, 12),
    }))
  }, [])

  const updatePatient = useCallback((id: string, patient: Partial<Patient>) => {
    setState((prev) => {
      const previous = prev.patients.find((item) => item.id === id)
      return {
        ...prev,
        patients: prev.patients.map((item) => (item.id === id ? ({ ...item, ...patient } as Patient) : item)),
        selectedPatientId: prev.selectedPatientId || id,
        audit: [buildAudit('Paciente', 'Actualizar', prev.user?.name ?? 'Sistema', previous?.name, patient.name), ...prev.audit].slice(0, 12),
      }
    })
  }, [])

  const selectedPatient = state.patients.find((patient) => patient.id === state.selectedPatientId)

  const value = useMemo<AppContextValue>(
    () => ({
      state,
      user: state.user,
      isAuthenticated: Boolean(state.user),
      loginWithGoogle,
      logout,
      selectedPatient,
      setSelectedPatientId: (id: string) => setState((prev) => ({ ...prev, selectedPatientId: id })),
      addFood,
      updateFood,
      addNutrient,
      updateNutrient,
      addVitamin,
      updateVitamin,
      addDisease,
      updateDisease,
      addDiet,
      updateDiet,
      addPatient,
      updatePatient,
      appendAudit,
    }),
    [addDiet, addDisease, addFood, addNutrient, addPatient, addVitamin, appendAudit, loginWithGoogle, logout, selectedPatient, state, updateDiet, updateDisease, updateFood, updateNutrient, updatePatient, updateVitamin],
  )

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useAppContext() {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useAppContext must be used inside AppProvider')
  }

  return context
}
