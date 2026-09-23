import { useEffect, useMemo, useState } from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import { useAppContext } from './context/AppContext'
import type { Diet, Disease, Food, Nutrient, Patient, VitaminMineral } from './types'

type CatalogTab = 'Alimentos' | 'Nutrientes' | 'Vitaminas' | 'Enfermedades' | 'Dietas' | 'Pacientes'

type MutationState = {
  type: 'create' | 'edit'
  itemId?: string
}

const navItems = [
  { label: 'Dashboard', to: '/' },
  { label: 'Catálogos', to: '/catalogos' },
  { label: 'Asignación', to: '/asignacion' },
]

const defaultFood = (): Food => ({
  id: crypto.randomUUID(),
  name: '',
  definition: '',
  origin: 'Vegetal',
  functionality: '',
  macros: '',
  glycemicIndex: '',
  allergens: ['No aplica'],
})

const defaultNutrient = (): Nutrient => ({
  id: crypto.randomUUID(),
  name: '',
  definition: '',
  functionality: '',
  type: 'Macronutriente',
  subtype: 'Esencial',
  deficiencyDiseases: [],
  foodSources: [],
})

const defaultVitamin = (): VitaminMineral => ({
  id: crypto.randomUUID(),
  name: '',
  classification: 'Liposoluble',
  functions: [],
  rda: '',
  deficiencySymptoms: [],
  upperLimit: '',
})

const defaultDisease = (): Disease => ({
  id: crypto.randomUUID(),
  name: '',
  physiopathology: '',
  diagnosisCriteria: [],
  differentialDiagnosis: [],
  therapeuticTargets: [],
  contraindicatedFoods: [],
  indicatedMicronutrients: [],
})

const defaultDiet = (): Diet => ({
  id: crypto.randomUUID(),
  name: '',
  objectives: [],
  caloricIntake: '',
  macroDistribution: '',
  components: [],
  notRecommended: [],
  administrationRoute: 'Oral',
  duration: '',
  dosage: '',
  supplementation: '',
  compatibleDiseases: [],
  note: '',
})

const defaultPatient = (): Patient => ({
  id: crypto.randomUUID(),
  name: '',
  age: 0,
  weight: 0,
  height: 0,
  allergies: [],
  incompatibilities: [],
  familyHistory: [],
  associatedDiseases: [],
  diagnosis: [],
})

function App() {
  const {
    isAuthenticated,
    loginWithGoogle,
    logout,
    state,
    selectedPatient,
    setSelectedPatientId,
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
  } = useAppContext()
  const [offline, setOffline] = useState(!navigator.onLine)
  const [tab, setTab] = useState<CatalogTab>('Alimentos')
  const [foodDraft, setFoodDraft] = useState<Food>(defaultFood())
  const [nutrientDraft, setNutrientDraft] = useState<Nutrient>(defaultNutrient())
  const [vitaminDraft, setVitaminDraft] = useState<VitaminMineral>(defaultVitamin())
  const [diseaseDraft, setDiseaseDraft] = useState<Disease>(defaultDisease())
  const [dietDraft, setDietDraft] = useState<Diet>(defaultDiet())
  const [patientDraft, setPatientDraft] = useState<Patient>(defaultPatient())
  const [mutation, setMutation] = useState<Record<string, MutationState>>({})

  useEffect(() => {
    const onOnline = () => setOffline(false)
    const onOffline = () => setOffline(true)
    window.addEventListener('online', onOnline)
    window.addEventListener('offline', onOffline)
    return () => {
      window.removeEventListener('online', onOnline)
      window.removeEventListener('offline', onOffline)
    }
  }, [])

  const preparedMetrics = useMemo(() => {
    return {
      foods: state.foods.length,
      diseases: state.diseases.length,
      diets: state.diets.length,
      patients: state.patients.length,
    }
  }, [state])

  const recommendationData = useMemo(() => {
    if (!selectedPatient) return []
    return state.diets
      .filter((diet) =>
        diet.compatibleDiseases.some((diagnosis) => selectedPatient.diagnosis.includes(diagnosis)),
      )
      .map((diet) => {
        const warnings = selectedPatient.allergies.filter((item) =>
          diet.components.some((component) => component.toLowerCase().includes(item.toLowerCase())),
        )
        const incompatibilities = selectedPatient.incompatibilities.filter((item) =>
          diet.components.some((component) => component.toLowerCase().includes(item.toLowerCase())),
        )
        return {
          ...diet,
          warnings,
          incompatibilities,
          safe: warnings.length === 0 && incompatibilities.length === 0,
        }
      })
  }, [selectedPatient, state.diets])

  const parseCsv = (value: string) => value.split(',').map((item) => item.trim()).filter(Boolean)

  const renderCatalogItems = () => {
    const items = ({
      Alimentos: state.foods,
      Nutrientes: state.nutrients,
      Vitaminas: state.vitamins,
      Enfermedades: state.diseases,
      Dietas: state.diets,
      Pacientes: state.patients,
    }[tab] ?? []) as Array<Food | Nutrient | VitaminMineral | Disease | Diet | Patient>

    return items.map((item) => {
      const itemAny = item as Record<string, unknown>
      const label = String(itemAny.name ?? itemAny.id ?? 'Sin nombre')
      const context = itemAny.origin ? String(itemAny.origin) : 'Catalogado'

      return (
        <ListItem key={String(itemAny.id)}>
          <div>
            <strong>{label}</strong>
            <small>{context}</small>
          </div>
          <button
            type="button"
            onClick={() => {
              if (tab === 'Alimentos') {
                setFoodDraft(item as Food)
                setMutation((prev) => ({ ...prev, Alimentos: { type: 'edit', itemId: String(item.id) } }))
              }
              if (tab === 'Nutrientes') {
                setNutrientDraft(item as Nutrient)
                setMutation((prev) => ({ ...prev, Nutrientes: { type: 'edit', itemId: String(item.id) } }))
              }
              if (tab === 'Vitaminas') {
                setVitaminDraft(item as VitaminMineral)
                setMutation((prev) => ({ ...prev, Vitaminas: { type: 'edit', itemId: String(item.id) } }))
              }
              if (tab === 'Enfermedades') {
                setDiseaseDraft(item as Disease)
                setMutation((prev) => ({ ...prev, Enfermedades: { type: 'edit', itemId: String(item.id) } }))
              }
              if (tab === 'Dietas') {
                setDietDraft(item as Diet)
                setMutation((prev) => ({ ...prev, Dietas: { type: 'edit', itemId: String(item.id) } }))
              }
              if (tab === 'Pacientes') {
                setPatientDraft(item as Patient)
                setMutation((prev) => ({ ...prev, Pacientes: { type: 'edit', itemId: String(item.id) } }))
              }
            }}
          >
            Editar
          </button>
        </ListItem>
      )
    })
  }

  const renderEditor = () => {
    switch (tab) {
      case 'Alimentos':
        return (
          <FormCard>
            <h3>{mutation.Alimentos?.type === 'edit' ? 'Editar alimento' : 'Crear alimento'}</h3>
            <FieldGrid>
              <label>
                Nombre
                <input value={foodDraft.name} onChange={(event) => setFoodDraft({ ...foodDraft, name: event.target.value })} />
              </label>
              <label>
                Origen
                <input value={foodDraft.origin} onChange={(event) => setFoodDraft({ ...foodDraft, origin: event.target.value })} />
              </label>
              <label style={{ gridColumn: '1 / -1' }}>
                Definición
                <textarea value={foodDraft.definition} onChange={(event) => setFoodDraft({ ...foodDraft, definition: event.target.value })} />
              </label>
              <label style={{ gridColumn: '1 / -1' }}>
                Funcionalidad
                <textarea value={foodDraft.functionality} onChange={(event) => setFoodDraft({ ...foodDraft, functionality: event.target.value })} />
              </label>
              <label>
                Macros/100 g
                <input value={foodDraft.macros} onChange={(event) => setFoodDraft({ ...foodDraft, macros: event.target.value })} />
              </label>
              <label>
                Índice glucémico
                <input value={foodDraft.glycemicIndex} onChange={(event) => setFoodDraft({ ...foodDraft, glycemicIndex: event.target.value })} />
              </label>
              <label style={{ gridColumn: '1 / -1' }}>
                Alérgenos
                <input value={foodDraft.allergens.join(', ')} onChange={(event) => setFoodDraft({ ...foodDraft, allergens: event.target.value.split(',').map((item) => item.trim()).filter(Boolean) })} />
              </label>
            </FieldGrid>
            <ButtonRow>
              <PrimaryButton type="button" onClick={() => {
                if (mutation.Alimentos?.type === 'edit' && mutation.Alimentos.itemId) {
                  updateFood(mutation.Alimentos.itemId, foodDraft)
                } else {
                  addFood({ ...foodDraft, id: crypto.randomUUID() })
                }
                setFoodDraft(defaultFood())
                setMutation((prev) => ({ ...prev, Alimentos: { type: 'create', itemId: undefined } }))
              }}>Guardar</PrimaryButton>
              <SecondaryButton type="button" onClick={() => setFoodDraft(defaultFood())}>Limpiar</SecondaryButton>
            </ButtonRow>
          </FormCard>
        )
      case 'Nutrientes':
        return (
          <FormCard>
            <h3>{mutation.Nutrientes?.type === 'edit' ? 'Editar nutriente' : 'Crear nutriente'}</h3>
            <FieldGrid>
              <label>
                Nombre
                <input value={nutrientDraft.name} onChange={(event) => setNutrientDraft({ ...nutrientDraft, name: event.target.value })} />
              </label>
              <label>
                Tipo
                <input value={nutrientDraft.type} onChange={(event) => setNutrientDraft({ ...nutrientDraft, type: event.target.value })} />
              </label>
              <label>
                Subtipo
                <input value={nutrientDraft.subtype} onChange={(event) => setNutrientDraft({ ...nutrientDraft, subtype: event.target.value })} />
              </label>
              <label style={{ gridColumn: '1 / -1' }}>
                Definición
                <textarea value={nutrientDraft.definition} onChange={(event) => setNutrientDraft({ ...nutrientDraft, definition: event.target.value })} />
              </label>
              <label style={{ gridColumn: '1 / -1' }}>
                Funcionalidad
                <textarea value={nutrientDraft.functionality} onChange={(event) => setNutrientDraft({ ...nutrientDraft, functionality: event.target.value })} />
              </label>
              <label style={{ gridColumn: '1 / -1' }}>
                Enfermedades por déficit
                <input value={nutrientDraft.deficiencyDiseases.join(', ')} onChange={(event) => setNutrientDraft({ ...nutrientDraft, deficiencyDiseases: parseCsv(event.target.value) })} />
              </label>
              <label style={{ gridColumn: '1 / -1' }}>
                Fuentes alimentarias
                <input value={nutrientDraft.foodSources.join(', ')} onChange={(event) => setNutrientDraft({ ...nutrientDraft, foodSources: parseCsv(event.target.value) })} />
              </label>
            </FieldGrid>
            <ButtonRow>
              <PrimaryButton type="button" onClick={() => {
                if (mutation.Nutrientes?.type === 'edit' && mutation.Nutrientes.itemId) {
                  updateNutrient(mutation.Nutrientes.itemId, nutrientDraft)
                } else {
                  addNutrient({ ...nutrientDraft, id: crypto.randomUUID() })
                }
                setNutrientDraft(defaultNutrient())
                setMutation((prev) => ({ ...prev, Nutrientes: { type: 'create', itemId: undefined } }))
              }}>Guardar</PrimaryButton>
              <SecondaryButton type="button" onClick={() => setNutrientDraft(defaultNutrient())}>Limpiar</SecondaryButton>
            </ButtonRow>
          </FormCard>
        )
      case 'Vitaminas':
        return (
          <FormCard>
            <h3>{mutation.Vitaminas?.type === 'edit' ? 'Editar vitamina/mineral' : 'Crear vitamina/mineral'}</h3>
            <FieldGrid>
              <label>
                Nombre
                <input value={vitaminDraft.name} onChange={(event) => setVitaminDraft({ ...vitaminDraft, name: event.target.value })} />
              </label>
              <label>
                Clasificación
                <select value={vitaminDraft.classification} onChange={(event) => setVitaminDraft({ ...vitaminDraft, classification: event.target.value as VitaminMineral['classification'] })}>
                  <option value="Liposoluble">Liposoluble</option>
                  <option value="Hidrosoluble">Hidrosoluble</option>
                  <option value="Mineral">Mineral</option>
                </select>
              </label>
              <label style={{ gridColumn: '1 / -1' }}>
                Funciones
                <input value={vitaminDraft.functions.join(', ')} onChange={(event) => setVitaminDraft({ ...vitaminDraft, functions: parseCsv(event.target.value) })} />
              </label>
              <label>
                RDA
                <input value={vitaminDraft.rda} onChange={(event) => setVitaminDraft({ ...vitaminDraft, rda: event.target.value })} />
              </label>
              <label>
                Límite superior
                <input value={vitaminDraft.upperLimit} onChange={(event) => setVitaminDraft({ ...vitaminDraft, upperLimit: event.target.value })} />
              </label>
              <label style={{ gridColumn: '1 / -1' }}>
                Síntomas de deficiencia
                <input value={vitaminDraft.deficiencySymptoms.join(', ')} onChange={(event) => setVitaminDraft({ ...vitaminDraft, deficiencySymptoms: parseCsv(event.target.value) })} />
              </label>
            </FieldGrid>
            <ButtonRow>
              <PrimaryButton type="button" onClick={() => {
                if (mutation.Vitaminas?.type === 'edit' && mutation.Vitaminas.itemId) {
                  updateVitamin(mutation.Vitaminas.itemId, vitaminDraft)
                } else {
                  addVitamin({ ...vitaminDraft, id: crypto.randomUUID() })
                }
                setVitaminDraft(defaultVitamin())
                setMutation((prev) => ({ ...prev, Vitaminas: { type: 'create', itemId: undefined } }))
              }}>Guardar</PrimaryButton>
              <SecondaryButton type="button" onClick={() => setVitaminDraft(defaultVitamin())}>Limpiar</SecondaryButton>
            </ButtonRow>
          </FormCard>
        )
      case 'Enfermedades':
        return (
          <FormCard>
            <h3>{mutation.Enfermedades?.type === 'edit' ? 'Editar enfermedad' : 'Crear enfermedad'}</h3>
            <FieldGrid>
              <label style={{ gridColumn: '1 / -1' }}>
                Nombre
                <input value={diseaseDraft.name} onChange={(event) => setDiseaseDraft({ ...diseaseDraft, name: event.target.value })} />
              </label>
              <label style={{ gridColumn: '1 / -1' }}>
                Fisiopatología
                <textarea value={diseaseDraft.physiopathology} onChange={(event) => setDiseaseDraft({ ...diseaseDraft, physiopathology: event.target.value })} />
              </label>
              <label style={{ gridColumn: '1 / -1' }}>
                Criterios diagnósticos
                <input value={diseaseDraft.diagnosisCriteria.join(', ')} onChange={(event) => setDiseaseDraft({ ...diseaseDraft, diagnosisCriteria: parseCsv(event.target.value) })} />
              </label>
              <label style={{ gridColumn: '1 / -1' }}>
                Diagnósticos diferenciales
                <input value={diseaseDraft.differentialDiagnosis.join(', ')} onChange={(event) => setDiseaseDraft({ ...diseaseDraft, differentialDiagnosis: parseCsv(event.target.value) })} />
              </label>
              <label style={{ gridColumn: '1 / -1' }}>
                Dianas terapéuticas
                <input value={diseaseDraft.therapeuticTargets.join(', ')} onChange={(event) => setDiseaseDraft({ ...diseaseDraft, therapeuticTargets: parseCsv(event.target.value) })} />
              </label>
              <label style={{ gridColumn: '1 / -1' }}>
                Alimentos contraindicados
                <input value={diseaseDraft.contraindicatedFoods.join(', ')} onChange={(event) => setDiseaseDraft({ ...diseaseDraft, contraindicatedFoods: parseCsv(event.target.value) })} />
              </label>
              <label style={{ gridColumn: '1 / -1' }}>
                Micronutrientes indicados
                <input value={diseaseDraft.indicatedMicronutrients.join(', ')} onChange={(event) => setDiseaseDraft({ ...diseaseDraft, indicatedMicronutrients: parseCsv(event.target.value) })} />
              </label>
            </FieldGrid>
            <ButtonRow>
              <PrimaryButton type="button" onClick={() => {
                if (mutation.Enfermedades?.type === 'edit' && mutation.Enfermedades.itemId) {
                  updateDisease(mutation.Enfermedades.itemId, diseaseDraft)
                } else {
                  addDisease({ ...diseaseDraft, id: crypto.randomUUID() })
                }
                setDiseaseDraft(defaultDisease())
                setMutation((prev) => ({ ...prev, Enfermedades: { type: 'create', itemId: undefined } }))
              }}>Guardar</PrimaryButton>
              <SecondaryButton type="button" onClick={() => setDiseaseDraft(defaultDisease())}>Limpiar</SecondaryButton>
            </ButtonRow>
          </FormCard>
        )
      case 'Dietas':
        return (
          <FormCard>
            <h3>{mutation.Dietas?.type === 'edit' ? 'Editar dieta' : 'Crear dieta'}</h3>
            <FieldGrid>
              <label>
                Nombre
                <input value={dietDraft.name} onChange={(event) => setDietDraft({ ...dietDraft, name: event.target.value })} />
              </label>
              <label>
                Calorías
                <input value={dietDraft.caloricIntake} onChange={(event) => setDietDraft({ ...dietDraft, caloricIntake: event.target.value })} />
              </label>
              <label>
                Vía de administración
                <input value={dietDraft.administrationRoute} onChange={(event) => setDietDraft({ ...dietDraft, administrationRoute: event.target.value })} />
              </label>
              <label>
                Duración
                <input value={dietDraft.duration} onChange={(event) => setDietDraft({ ...dietDraft, duration: event.target.value })} />
              </label>
              <label style={{ gridColumn: '1 / -1' }}>
                Objetivos
                <input value={dietDraft.objectives.join(', ')} onChange={(event) => setDietDraft({ ...dietDraft, objectives: parseCsv(event.target.value) })} />
              </label>
              <label style={{ gridColumn: '1 / -1' }}>
                Distribución macro
                <input value={dietDraft.macroDistribution} onChange={(event) => setDietDraft({ ...dietDraft, macroDistribution: event.target.value })} />
              </label>
              <label style={{ gridColumn: '1 / -1' }}>
                Componentes
                <input value={dietDraft.components.join(', ')} onChange={(event) => setDietDraft({ ...dietDraft, components: parseCsv(event.target.value) })} />
              </label>
              <label style={{ gridColumn: '1 / -1' }}>
                No recomendados
                <input value={dietDraft.notRecommended.join(', ')} onChange={(event) => setDietDraft({ ...dietDraft, notRecommended: parseCsv(event.target.value) })} />
              </label>
              <label>
                Pauta
                <input value={dietDraft.dosage} onChange={(event) => setDietDraft({ ...dietDraft, dosage: event.target.value })} />
              </label>
              <label style={{ gridColumn: '1 / -1' }}>
                Suplementación
                <input value={dietDraft.supplementation} onChange={(event) => setDietDraft({ ...dietDraft, supplementation: event.target.value })} />
              </label>
              <label style={{ gridColumn: '1 / -1' }}>
                Enfermedades compatibles
                <input value={dietDraft.compatibleDiseases.join(', ')} onChange={(event) => setDietDraft({ ...dietDraft, compatibleDiseases: parseCsv(event.target.value) })} />
              </label>
              <label style={{ gridColumn: '1 / -1' }}>
                Nota clínica
                <textarea value={dietDraft.note} onChange={(event) => setDietDraft({ ...dietDraft, note: event.target.value })} />
              </label>
            </FieldGrid>
            <ButtonRow>
              <PrimaryButton type="button" onClick={() => {
                if (mutation.Dietas?.type === 'edit' && mutation.Dietas.itemId) {
                  updateDiet(mutation.Dietas.itemId, dietDraft)
                } else {
                  addDiet({ ...dietDraft, id: crypto.randomUUID() })
                }
                setDietDraft(defaultDiet())
                setMutation((prev) => ({ ...prev, Dietas: { type: 'create', itemId: undefined } }))
              }}>Guardar</PrimaryButton>
              <SecondaryButton type="button" onClick={() => setDietDraft(defaultDiet())}>Limpiar</SecondaryButton>
            </ButtonRow>
          </FormCard>
        )
      case 'Pacientes':
        return (
          <FormCard>
            <h3>{mutation.Pacientes?.type === 'edit' ? 'Editar paciente' : 'Crear paciente'}</h3>
            <FieldGrid>
              <label>
                Nombre
                <input value={patientDraft.name} onChange={(event) => setPatientDraft({ ...patientDraft, name: event.target.value })} />
              </label>
              <label>
                Edad
                <input type="number" value={patientDraft.age} onChange={(event) => setPatientDraft({ ...patientDraft, age: Number(event.target.value) })} />
              </label>
              <label>
                Peso (kg)
                <input type="number" value={patientDraft.weight} onChange={(event) => setPatientDraft({ ...patientDraft, weight: Number(event.target.value) })} />
              </label>
              <label>
                Talla (cm)
                <input type="number" value={patientDraft.height} onChange={(event) => setPatientDraft({ ...patientDraft, height: Number(event.target.value) })} />
              </label>
              <label style={{ gridColumn: '1 / -1' }}>
                Alergias
                <input value={patientDraft.allergies.join(', ')} onChange={(event) => setPatientDraft({ ...patientDraft, allergies: parseCsv(event.target.value) })} />
              </label>
              <label style={{ gridColumn: '1 / -1' }}>
                Incompatibilidades
                <input value={patientDraft.incompatibilities.join(', ')} onChange={(event) => setPatientDraft({ ...patientDraft, incompatibilities: parseCsv(event.target.value) })} />
              </label>
              <label style={{ gridColumn: '1 / -1' }}>
                Antecedentes familiares
                <input value={patientDraft.familyHistory.join(', ')} onChange={(event) => setPatientDraft({ ...patientDraft, familyHistory: parseCsv(event.target.value) })} />
              </label>
              <label style={{ gridColumn: '1 / -1' }}>
                Diagnósticos
                <input value={patientDraft.diagnosis.join(', ')} onChange={(event) => setPatientDraft({ ...patientDraft, diagnosis: parseCsv(event.target.value) })} />
              </label>
            </FieldGrid>
            <ButtonRow>
              <PrimaryButton type="button" onClick={() => {
                if (mutation.Pacientes?.type === 'edit' && mutation.Pacientes.itemId) {
                  updatePatient(mutation.Pacientes.itemId, patientDraft)
                } else {
                  addPatient({ ...patientDraft, id: crypto.randomUUID() })
                }
                setPatientDraft(defaultPatient())
                setMutation((prev) => ({ ...prev, Pacientes: { type: 'create', itemId: undefined } }))
              }}>Guardar</PrimaryButton>
              <SecondaryButton type="button" onClick={() => setPatientDraft(defaultPatient())}>Limpiar</SecondaryButton>
            </ButtonRow>
          </FormCard>
        )
      default:
        return null
    }
  }

  if (!isAuthenticated) {
    return (
      <AuthShell>
        <AuthCard>
          <Badge>Dietas al Día</Badge>
          <h1>Asistente de nutrición clínica</h1>
          <p>Registro con Google para profesionales del departamento de nutrición.</p>
          <MetaNote>Médico nutricionista</MetaNote>
          <ButtonRow>
            <PrimaryButton type="button" onClick={loginWithGoogle}>Entrar con Google</PrimaryButton>
          </ButtonRow>
          <MetaNote>Rol requerido: Médico nutricionista</MetaNote>
        </AuthCard>
      </AuthShell>
    )
  }

  return (
    <AppShell>
      <Header>
        <div>
          <Brand>Dietas al Día</Brand>
          <HeaderTitle>Gestión clínica nutricional</HeaderTitle>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <StatusPill $online={offline ? false : true}>{offline ? 'Modo offline' : 'En línea'}</StatusPill>
          <UserBadge>{state.user?.name}</UserBadge>
          <SecondaryButton type="button" onClick={logout}>Cerrar sesión</SecondaryButton>
        </div>
      </Header>

      <NavBar>
        {navItems.map((item) => (
          <NavLink key={item.to} to={item.to} style={{ textDecoration: 'none' }}>
            {({ isActive }) => <NavItem $active={isActive}>{item.label}</NavItem>}
          </NavLink>
        ))}
      </NavBar>

      <Routes>
        <Route
          path="/"
          element={
            <PageGrid>
              <MainPanel>
                <SectionTitle>Panel clínico</SectionTitle>
                <StatGrid>
                  <StatCard>
                    <span>Alimentos</span>
                    <strong>{preparedMetrics.foods}</strong>
                  </StatCard>
                  <StatCard>
                    <span>Enfermedades</span>
                    <strong>{preparedMetrics.diseases}</strong>
                  </StatCard>
                  <StatCard>
                    <span>Dietas</span>
                    <strong>{preparedMetrics.diets}</strong>
                  </StatCard>
                  <StatCard>
                    <span>Pacientes</span>
                    <strong>{preparedMetrics.patients}</strong>
                  </StatCard>
                </StatGrid>

                <SectionTitle>Paciente activo</SectionTitle>
                <PatientCard>
                  <div>
                    <strong>{selectedPatient?.name ?? 'Sin paciente seleccionado'}</strong>
                    <small>{selectedPatient ? `${selectedPatient.age} años · ${selectedPatient.weight} kg` : 'Elija un paciente'}</small>
                  </div>
                  <select value={selectedPatient?.id ?? ''} onChange={(event) => setSelectedPatientId(event.target.value)}>
                    {state.patients.map((patient) => (
                      <option key={patient.id} value={patient.id}>{patient.name}</option>
                    ))}
                  </select>
                </PatientCard>
              </MainPanel>

              <AsidePanel>
                <SectionTitle>Auditoría</SectionTitle>
                {state.audit.slice(0, 6).map((entry) => (
                  <AuditRow key={entry.id}>
                    <span>{entry.entity}</span>
                    <strong>{entry.action}</strong>
                    <small>{entry.user}</small>
                  </AuditRow>
                ))}
              </AsidePanel>
            </PageGrid>
          }
        />

        <Route
          path="/catalogos"
          element={
            <PageGrid>
              <MainPanel>
                <SectionTitle>Catálogos médicos</SectionTitle>
                <TabGroup>
                  {(['Alimentos', 'Nutrientes', 'Vitaminas', 'Enfermedades', 'Dietas', 'Pacientes'] as CatalogTab[]).map((item) => (
                    <TabButton key={item} type="button" $active={tab === item} onClick={() => setTab(item)}>
                      {item}
                    </TabButton>
                  ))}
                </TabGroup>
                <CardList>{renderCatalogItems()}</CardList>
              </MainPanel>
              <AsidePanel>{renderEditor()}</AsidePanel>
            </PageGrid>
          }
        />

        <Route
          path="/asignacion"
          element={
            <PageGrid>
              <MainPanel>
                <SectionTitle>Recomendación de dietas compatibles</SectionTitle>
                {selectedPatient ? (
                  <>
                    <AlertBox>
                      <strong>Contexto del paciente:</strong> {selectedPatient.name} · diagnóstico {selectedPatient.diagnosis.join(', ') || 'sin diagnóstico registrado'}
                    </AlertBox>
                    {recommendationData.length === 0 ? (
                      <EmptyState>No hay dietas compatibles con el diagnóstico activo del paciente.</EmptyState>
                    ) : (
                      recommendationData.map((diet) => (
                        <RecommendationCard key={diet.id} $safe={diet.safe}>
                          <h3>{diet.name}</h3>
                          <p>{diet.note}</p>
                          <InfoRow>
                            <span>Calorías</span>
                            <strong>{diet.caloricIntake}</strong>
                          </InfoRow>
                          <InfoRow>
                            <span>Componentes</span>
                            <strong>{diet.components.join(', ')}</strong>
                          </InfoRow>
                          {diet.warnings.length > 0 && (
                            <WarningBanner>
                              ⚠️ Alerta: incluye alimentos con alergias registradas: {diet.warnings.join(', ')}
                            </WarningBanner>
                          )}
                          {diet.incompatibilities.length > 0 && (
                            <WarningBanner>
                              ⚠️ Incompatibilidad: {diet.incompatibilities.join(', ')} no compatible con el historial del paciente.
                            </WarningBanner>
                          )}
                          {!diet.safe && <ConfirmMessage>Debe revisarse antes de confirmar la dieta recomendada.</ConfirmMessage>}
                          {diet.safe && <ConfirmMessage>La dieta es compatible con el paciente y puede confirmarse.</ConfirmMessage>}
                        </RecommendationCard>
                      ))
                    )}
                  </>
                ) : (
                  <EmptyState>Seleccione un paciente para consultar la recomendación clínica.</EmptyState>
                )}
              </MainPanel>
              <AsidePanel>
                <SectionTitle>Resumen del paciente</SectionTitle>
                {selectedPatient ? (
                  <>
                    <SummaryList>
                      <li><span>Alergias</span><strong>{selectedPatient.allergies.join(', ') || 'Sin alergias'}</strong></li>
                      <li><span>Incompatibilidades</span><strong>{selectedPatient.incompatibilities.join(', ') || 'Sin incompatibilidades'}</strong></li>
                      <li><span>Diagnóstico</span><strong>{selectedPatient.diagnosis.join(', ')}</strong></li>
                    </SummaryList>
                  </>
                ) : (
                  <EmptyState>No hay paciente activo.</EmptyState>
                )}
              </AsidePanel>
            </PageGrid>
          }
        />
      </Routes>
    </AppShell>
  )
}

const AppShell = styled.div`
  min-height: 100vh;
  background: var(--bg);
  color: var(--text);
`

const AuthShell = styled.div`
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 24px;
  background: linear-gradient(135deg, #eff7ff 0%, #dfeefa 100%);
`

const AuthCard = styled.section`
  width: min(440px, 100%);
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 24px;
  box-shadow: var(--shadow);
  padding: 32px;
  display: grid;
  gap: 16px;
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 32px;
  background: rgba(255,255,255,0.7);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--border);
  position: sticky;
  top: 0;
  z-index: 2;
`

const Brand = styled.h2`
  font-size: 1.4rem;
`

const HeaderTitle = styled.p`
  font-size: 0.8rem;
  color: var(--muted);
`

const UserBadge = styled.span`
  background: var(--primary-soft);
  color: var(--primary);
  padding: 8px 12px;
  border-radius: 999px;
  font-weight: 600;
`

const NavBar = styled.nav`
  display: flex;
  gap: 12px;
  padding: 18px 32px 0;
`

const NavItem = styled.div<{ $active: boolean }>`
  background: ${({ $active }) => ($active ? 'var(--primary)' : '#fff')};
  color: ${({ $active }) => ($active ? '#fff' : 'var(--text)')};
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 10px 16px;
  font-weight: 600;
`

const PageGrid = styled.main`
  display: grid;
  grid-template-columns: 1.8fr 0.9fr;
  gap: 24px;
  padding: 24px 32px 40px;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`

const MainPanel = styled.section`
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 24px;
  padding: 24px;
  box-shadow: var(--shadow);
`

const AsidePanel = styled.aside`
  background: var(--panel-alt);
  border: 1px solid var(--border);
  border-radius: 24px;
  padding: 24px;
`

const SectionTitle = styled.h3`
  font-size: 1.15rem;
  margin-bottom: 18px;
`

const Badge = styled.span`
  display: inline-flex;
  align-self: start;
  background: var(--primary-soft);
  color: var(--primary);
  border-radius: 999px;
  padding: 6px 12px;
  font-size: 0.8rem;
  font-weight: 700;
`

const MetaNote = styled.p`
  color: var(--muted);
  font-size: 0.82rem;
`

const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(100px, 1fr));
  gap: 16px;
  margin-bottom: 24px;
  @media (max-width: 600px) {
    grid-template-columns: repeat(2, minmax(120px, 1fr));
  }
`

const StatCard = styled.div`
  background: #f6fbff;
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 18px;
  display: grid;
  gap: 8px;
  span { color: var(--muted); font-size: 0.82rem; }
  strong { font-size: 1.8rem; }
`

const PatientCard = styled.div`
  border: 1px solid var(--border);
  border-radius: 18px;
  background: #fff;
  padding: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  select { min-width: 220px; }
`

const AuditRow = styled.div`
  display: grid;
  gap: 4px;
  padding: 10px 0;
  border-bottom: 1px solid var(--border);
  span { color: var(--muted); font-size: 0.8rem; }
  strong { font-size: 0.9rem; }
`

const TabGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
`

const TabButton = styled.button<{ $active: boolean }>`
  background: ${({ $active }) => ($active ? 'var(--primary)' : '#fff')};
  color: ${({ $active }) => ($active ? '#fff' : 'var(--text)')};
  border: 1px solid var(--border);
  border-radius: 999px;
  padding: 8px 14px;
  font-weight: 600;
`

const CardList = styled.div`
  display: grid;
  gap: 12px;
  margin-bottom: 20px;
`

const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  border: 1px solid var(--border);
  border-radius: 14px;
  background: #fafdff;
  div { display: grid; }
  button { min-width: 92px; }
  small { color: var(--muted); }
`

const FormCard = styled.div`
  border: 1px solid var(--border);
  background: white;
  border-radius: 18px;
  padding: 20px;
  display: grid;
  gap: 18px;
`

const FieldGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(160px, 1fr));
  gap: 14px;
  label {
    display: grid;
    gap: 8px;
    font-size: 0.83rem;
    color: var(--muted);
    font-weight: 600;
  }
  input, textarea, select {
    width: 100%;
    border-radius: 10px;
    border: 1px solid var(--border);
    padding: 10px 12px;
    background: #fbfdff;
    color: var(--text);
  }
  textarea { min-height: 94px; resize: vertical; }
  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`

const ButtonRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`

const PrimaryButton = styled.button`
  border: none;
  background: var(--primary);
  color: white;
  border-radius: 10px;
  padding: 10px 18px;
  font-weight: 700;
`

const SecondaryButton = styled.button`
  border: 1px solid var(--border);
  background: white;
  color: var(--text);
  border-radius: 10px;
  padding: 10px 18px;
  font-weight: 700;
`

const AlertBox = styled.div`
  background: var(--primary-soft);
  border-left: 4px solid var(--primary);
  border-radius: 12px;
  padding: 14px 16px;
  margin-bottom: 18px;
`

const RecommendationCard = styled.article<{ $safe: boolean }>`
  border: 1px solid ${({ $safe }) => ($safe ? '#cfead8' : '#f7d0d0')};
  background: ${({ $safe }) => ($safe ? '#f5fff8' : '#fff8f8')};
  border-radius: 18px;
  padding: 18px;
  margin-bottom: 16px;
  display: grid;
  gap: 12px;
  h3 { font-size: 1.1rem; }
  p { color: var(--muted); }
`

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  font-size: 0.9rem;
  span { color: var(--muted); }
`

const WarningBanner = styled.div`
  background: #fff3d7;
  border-left: 4px solid var(--warning);
  border-radius: 10px;
  padding: 10px 12px;
  color: #8a4b00;
  font-weight: 600;
`

const ConfirmMessage = styled.div`
  color: var(--success);
  font-weight: 700;
`

const EmptyState = styled.div`
  padding: 20px;
  background: #f6fbff;
  border: 1px dashed var(--border);
  border-radius: 12px;
  color: var(--muted);
`

const SummaryList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 12px;
  li { display: grid; gap: 4px; }
  span { color: var(--muted); font-size: 0.8rem; }
  strong { font-size: 0.92rem; }
`

const StatusPill = styled.span<{ $online: boolean }>`
  background: ${({ $online }) => ($online ? '#dff6ea' : '#fff0d9')};
  color: ${({ $online }) => ($online ? '#1b6a45' : '#8a4b00')};
  border-radius: 999px;
  padding: 8px 12px;
  font-size: 0.75rem;
  font-weight: 700;
`

export default App
