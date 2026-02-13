const questionsData = [
    {
        question: "¿Por qué no se puede afirmar que la inversión inmobiliaria sea buena o mala en términos absolutos?",
        options: {
            A: "Porque siempre depende del ciclo económico",
            B: "Porque depende del perfil, objetivos y circunstancias del inversor",
            C: "Porque el mercado inmobiliario es impredecible",
            D: "Porque siempre requiere hipoteca"
        },
        answer: "B",
        explanation: "La adecuación de la inversión depende de factores personales como edad, riesgo, recursos y objetivos."
    },
    {
        question: "¿Cuál es una ventaja diferencial del inmobiliario frente a otros activos de inversión?",
        options: {
            A: "Su elevada liquidez",
            B: "La ausencia total de riesgo",
            C: "El alto grado de apalancamiento disponible",
            D: "La garantía de rentabilidad"
        },
        answer: "C",
        explanation: "El acceso habitual a financiación del 70-80% permite invertir grandes importes con poco capital propio."
    },
    {
        question: "¿Cuál es uno de los principales inconvenientes estructurales del inmobiliario?",
        options: {
            A: "La imposibilidad de generar ingresos",
            B: "La elevada volatilidad diaria",
            C: "La falta de control sobre el activo",
            D: "La baja liquidez del mercado"
        },
        answer: "D",
        explanation: "Vender un inmueble rápidamente suele exigir descuentos, lo que penaliza la liquidez."
    },
    {
        question: "¿Cuál es la diferencia principal entre un ahorrador inmobiliario y un inversor inmobiliario?",
        options: {
            A: "El tipo de inmueble que compra",
            B: "El nivel de riesgo que asume",
            C: "La visión estratégica y el uso activo del capital",
            D: "La cantidad de impuestos que paga"
        },
        answer: "C",
        explanation: "El inversor concibe el inmobiliario como un proceso estratégico de largo plazo, no como una compra puntual y pasiva."
    },
    {
        question: "¿Por qué la financiación bancaria actúa como filtro de acceso al mercado?",
        options: {
            A: "Porque impide invertir con hipoteca",
            B: "Porque obliga a aportar capital propio y asumir gastos iniciales",
            C: "Porque garantiza rentabilidad",
            D: "Porque elimina el riesgo"
        },
        answer: "B",
        explanation: "La necesidad de entrada, impuestos y gastos limita el acceso, pero también introduce disciplina financiera."
    },
    {
        question: "¿Cuál es una forma válida de acceder al mercado inmobiliario sin comprar un inmueble?",
        options: {
            A: "Esperar a que suban los precios",
            B: "Actuar como intermediario o mediante subarrendamiento",
            C: "Comprar solo en zonas prime",
            D: "Invertir únicamente en tu ciudad"
        },
        answer: "B",
        explanation: "Existen modelos como la intermediación o el subarrendamiento que permiten generar ingresos sin ser propietario."
    },
    {
        question: "¿Por qué el urbanismo es clave en la inversión inmobiliaria?",
        options: {
            A: "Porque fija directamente el precio de mercado",
            B: "Porque determina qué se puede y qué no se puede hacer con un inmueble",
            C: "Porque sustituye al análisis financiero",
            D: "Porque elimina el riesgo de la inversión"
        },
        answer: "B",
        explanation: "El urbanismo condiciona usos, reformas y viabilidad, afectando directamente a la rentabilidad."
    },
    {
        question: "¿Qué papel cumple el Plan General de Ordenación Urbana (PGOU)?",
        options: {
            A: "Regular exclusivamente los impuestos",
            B: "Determinar quién puede comprar un inmueble",
            C: "Actuar como manual de instrucciones de la ciudad",
            D: "Fijar los precios del alquiler"
        },
        answer: "C",
        explanation: "El PGOU define usos, edificabilidad, protecciones y desarrollo urbano."
    },
    {
        question: "¿Por qué es importante analizar Catastro, Registro y urbanismo antes de comprar?",
        options: {
            A: "Para acelerar la firma",
            B: "Para evitar pagar impuestos",
            C: "Para comprobar solo la superficie útil",
            D: "Para verificar titularidad, legalidad y compatibilidad normativa"
        },
        answer: "D",
        explanation: "Solo el análisis conjunto permite saber qué se compra realmente y qué riesgos existen."
    },
    {
        question: "¿De qué organismo depende el Catastro en España?",
        options: {
            A: "De los ayuntamientos",
            B: "Del Registro de la Propiedad",
            C: "Del Ministerio de Hacienda",
            D: "De las comunidades autónomas"
        },
        answer: "C",
        explanation: "El Catastro es un registro administrativo de carácter fiscal que depende del Ministerio de Hacienda."
    },
    {
        question: "¿Qué implica que un edificio tenga un alto grado de protección urbanística?",
        options: {
            A: "Que no puede venderse",
            B: "Que no puede alquilarse",
            C: "Que cualquier reforma está prohibida",
            D: "Que las actuaciones sobre el inmueble están limitadas por la normativa"
        },
        answer: "D",
        explanation: "Un mayor grado de protección no impide la inversión, pero sí limita reformas, usos y actuaciones permitidas."
    },
    {
        question: "¿Cuál es la diferencia principal entre la ITE y el IEE?",
        options: {
            A: "La ITE es voluntaria y el IEE no",
            B: "La ITE solo analiza eficiencia energética",
            C: "El IEE amplía la ITE incorporando accesibilidad y eficiencia energética",
            D: "El IEE sustituye al urbanismo"
        },
        answer: "C",
        explanation: "El IEE (Informe de Evaluación del Edificio) es más completo e incluye estado de conservación, accesibilidad y eficiencia energética."
    },
    {
        question: "¿Por qué es importante analizar una zona antes que un inmueble concreto?",
        options: {
            A: "Porque el inmueble siempre se puede reformar",
            B: "Porque la zona condiciona la demanda, la liquidez y el potencial de revalorización",
            C: "Porque reduce los impuestos",
            D: "Porque elimina el riesgo"
        },
        answer: "B",
        explanation: "La ubicación determina en gran medida el comportamiento del activo a largo plazo."
    },
    {
        question: "¿Qué mide el concepto de rent gap?",
        options: {
            A: "La diferencia entre alquiler y venta",
            B: "La rentabilidad neta de un inmueble",
            C: "La brecha entre el valor potencial de un barrio y su valor actual",
            D: "El coste de la rehabilitación"
        },
        answer: "C",
        explanation: "El rent gap explica por qué el capital vuelve a barrios previamente desinvertidos."
    },
    {
        question: "¿Cuál es una señal temprana de gentrificación especialmente relevante para el inversor?",
        options: {
            A: "Subida del precio de venta antes que del alquiler",
            B: "Llegada de grandes fondos directamente",
            C: "Subida del alquiler antes que del precio de venta",
            D: "Saturación turística"
        },
        answer: "C",
        explanation: "Indica que el mercado percibe potencial aún no reflejado en el precio de compra."
    }
];