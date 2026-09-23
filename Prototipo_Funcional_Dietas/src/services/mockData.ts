import type { AppState, Diet, Disease, Food, Nutrient, Patient, User, VitaminMineral } from '../types'

const user: User = {
  id: 'user-google-1',
  name: 'Dra. Ana López',
  email: 'ana.lopez@clinica.example',
  role: 'Médico nutricionista',
  provider: 'Google',
}

const foods: Food[] = [
  {
    id: 'food-1',
    name: 'Manzana',
    definition: 'Fruta fresca rica en fibra y antioxidantes.',
    origin: 'Vegetal',
    functionality: 'Apoya la saciedad y aporta carbohidratos complejos.',
    macros: 'Proteínas 0.3 g / Carbohidratos 13.8 g / Grasas 0.2 g',
    glycemicIndex: '36',
    allergens: ['No aplica'],
  },
  {
    id: 'food-2',
    name: 'Salmon',
    definition: 'Pescado azul con alto contenido proteico y omega-3.',
    origin: 'Animal',
    functionality: 'Apoya la síntesis proteica y la salud cardiovascular.',
    macros: 'Proteínas 20 g / Carbohidratos 0 g / Grasas 13 g',
    glycemicIndex: '0',
    allergens: ['Pescado'],
  },
  {
    id: 'food-3',
    name: 'Leche de avena',
    definition: 'Bebida vegetal sin lactosa para sustitución del lácteo.',
    origin: 'Vegetal',
    functionality: 'Fuente de fibra y energía lenta para pacientes con intolerancia.',
    macros: 'Proteínas 1 g / Carbohidratos 7 g / Grasas 2 g',
    glycemicIndex: '42',
    allergens: ['Avena'],
  },
]

const nutrients: Nutrient[] = [
  {
    id: 'nut-1',
    name: 'Proteína',
    definition: 'Macronutriente esencial para mantenimiento y reparación tisular.',
    functionality: 'Reparación celular, síntesis de enzimas y mantención muscular.',
    type: 'Macronutriente',
    subtype: 'Esencial',
    deficiencyDiseases: ['Desnutrición proteica', 'Caquexia'],
    foodSources: ['Pescado', 'Huevos', 'Legumbres'],
  },
  {
    id: 'nut-2',
    name: 'Hierro',
    definition: 'Mineral esencial para transporte de oxígeno y síntesis de hemoglobina.',
    functionality: 'Producción de glóbulos rojos y metabolismo energético.',
    type: 'Mineral',
    subtype: 'Traza',
    deficiencyDiseases: ['Anemia ferropénica', 'Fatiga crónica'],
    foodSources: ['Carnes rojas', 'Espinacas', 'Lentillas'],
  },
  {
    id: 'nut-3',
    name: 'Omega-3',
    definition: 'Ácido graso poliinsaturado con efecto antiinflamatorio.',
    functionality: 'Apoya la salud cardiovascular y la función cognitiva.',
    type: 'Lípido',
    subtype: 'PESCADO',
    deficiencyDiseases: ['Inflamación sistémica', 'Dislipidemia'],
    foodSources: ['Sardina', 'Salmon', 'Nueces'],
  },
]

const vitamins: VitaminMineral[] = [
  {
    id: 'vit-1',
    name: 'Vitamina D',
    classification: 'Liposoluble',
    functions: ['Absorción intestinal de calcio', 'Regulación del metabolismo óseo'],
    rda: '15 µg/día',
    deficiencySymptoms: ['Osteopenia', 'Dolor óseo', 'Fatiga'],
    upperLimit: '100 µg/día',
  },
  {
    id: 'vit-2',
    name: 'Vitamina C',
    classification: 'Hidrosoluble',
    functions: ['Antioxidante', 'Síntesis de colágeno'],
    rda: '90 mg/día',
    deficiencySymptoms: ['Hemorragias gingivales', 'Fatiga', 'Debilidad'],
    upperLimit: '2000 mg/día',
  },
  {
    id: 'vit-3',
    name: 'Hierro',
    classification: 'Mineral',
    functions: [' Transporte de oxígeno', 'Producción de energía'],
    rda: '18 mg/día',
    deficiencySymptoms: ['Palidez', 'Mareos', 'Cansancio'],
    upperLimit: '45 mg/día',
  },
]

const diseases: Disease[] = [
  {
    id: 'disease-1',
    name: 'Desnutrición proteico-calórica',
    physiopathology: 'Déficit global de energía y proteínas con pérdida de tejido corporal.',
    diagnosisCriteria: ['IMC < 18.5', 'Pérdida involuntaria de peso', 'Diminución de masa muscular'],
    differentialDiagnosis: ['Sarcoidosis', 'Enfermedad celiaca', 'Malabsorción intestinal'],
    therapeuticTargets: ['Aumentar ingesta calórica', 'Mejorar síntesis proteica', 'Corregir micronutrientes'],
    contraindicatedFoods: ['Alimentos ultraprocesados', 'Exceso de sodio'],
    indicatedMicronutrients: ['Proteína', 'Zinc', 'Vitamina D'],
  },
  {
    id: 'disease-2',
    name: 'Diabetes tipo 2',
    physiopathology: 'Resistencia a la insulina con alteración del control glucémico.',
    diagnosisCriteria: ['HbA1c ≥ 6.5%', 'Glucosa basal ≥ 126 mg/dL'],
    differentialDiagnosis: ['Diabetes tipo 1', 'Síndrome metabólico'],
    therapeuticTargets: ['Estabilizar glucosa', 'Reducir peso corporal'],
    contraindicatedFoods: ['Refrescos azucarados', 'Pastelería industrial'],
    indicatedMicronutrients: ['Magnesio', 'Fibra', 'Omega-3'],
  },
]

const diets: Diet[] = [
  {
    id: 'diet-1',
    name: 'Dieta hipocalórica equilibrada',
    objectives: ['Control ponderal', 'Mejorar sensibilidad a la insulina'],
    caloricIntake: '1800 kcal/día',
    macroDistribution: '50% carbohidratos / 25% proteínas / 25% grasas',
    components: ['Manzana', 'Salmon', 'Avena', 'Verduras de hoja'],
    notRecommended: ['Bebidas azucaradas', 'Snacks salados'],
    administrationRoute: 'Oral',
    duration: '8 semanas',
    dosage: '3 comidas principales + 2 colaciones',
    supplementation: 'Omega-3 y vitamina D si está deficiente',
    compatibleDiseases: ['Diabetes tipo 2'],
    note: 'Estructura adecuada para pacientes con riesgo cardiovascular y sobrepeso.',
  },
  {
    id: 'diet-2',
    name: 'Dieta hiperproteica de recuperación',
    objectives: ['Recuperación de masa muscular', 'Corregir desnutrición'],
    caloricIntake: '2200 kcal/día',
    macroDistribution: '30% carbohidratos / 40% proteínas / 30% grasas',
    components: ['Salmon', 'Huevos', 'Legumbres', 'Yogur griego'],
    notRecommended: ['Bebidas gaseosas', 'Alimentos ultraprocesados'],
    administrationRoute: 'Oral',
    duration: '6 semanas',
    dosage: '5 ingestas diarias',
    supplementation: 'Vitamina D y hierro si analítica lo indica',
    compatibleDiseases: ['Desnutrición proteico-calórica'],
    note: 'Incluye proteína de alta calidad y calorías orientadas a recuperación.',
  },
]

const patients: Patient[] = [
  {
    id: 'patient-1',
    name: 'María García',
    age: 47,
    weight: 72,
    height: 164,
    allergies: ['Pescado'],
    incompatibilities: ['Lácteos', 'Gluten'],
    familyHistory: ['Diabetes tipo 2'],
    associatedDiseases: ['Diabetes tipo 2'],
    diagnosis: ['Diabetes tipo 2'],
  },
  {
    id: 'patient-2',
    name: 'Luis Pérez',
    age: 61,
    weight: 58,
    height: 170,
    allergies: ['Avena'],
    incompatibilities: ['Frutos secos'],
    familyHistory: ['Desnutrición'],
    associatedDiseases: ['Desnutrición proteico-calórica'],
    diagnosis: ['Desnutrición proteico-calórica'],
  },
]

export const initialAppState: AppState = {
  user,
  foods,
  nutrients,
  vitamins,
  diseases,
  diets,
  patients,
  selectedPatientId: patients[0].id,
  audit: [
    {
      id: 'audit-1',
      entity: 'Sistema',
      action: 'Carga inicial',
      user: user.name,
      timestamp: new Date().toISOString(),
      newValue: 'Catálogos inicializados',
    },
  ],
}
