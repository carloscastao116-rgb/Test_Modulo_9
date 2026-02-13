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
    },
    {
        question: "¿Qué es el 'neighborhood life cycle'?",
        options: {
            A: "El tiempo que tarda una familia en mudarse",
            B: "Las fases de crecimiento, estabilidad, declive y revitalización de un barrio",
            C: "El ciclo de mantenimiento de un edificio",
            D: "La duración de los contratos de alquiler"
        },
        answer: "B",
        explanation: "Identificar en qué fase está el barrio ayuda a prever el comportamiento de la inversión."
    },
    {
        question: "¿Por qué el inversor debe analizar la 'supply and demand' a nivel micro?",
        options: {
            A: "Porque los datos nacionales siempre son correctos",
            B: "Porque el mercado inmobiliario es local y segmentado",
            C: "Porque es más fácil calcular los impuestos",
            D: "Porque elimina la necesidad de visitar el inmueble"
        },
        answer: "B",
        explanation: "Lo que ocurre en una ciudad puede no tener nada que ver con lo que ocurre en un barrio específico."
    },
    {
        question: "¿Qué papel juegan las infraestructuras de transporte en el valor del suelo?",
        options: {
            A: "Ninguno, solo importa el edificio",
            B: "Reducen el valor por el ruido",
            C: "Aumentan el valor al mejorar la conectividad y reducir tiempos de desplazamiento",
            D: "Solo afectan a locales comerciales"
        },
        answer: "C",
        explanation: "La mejora en la accesibilidad suele trasladarse directamente al precio de los activos cercanos."
    },
    {
        question: "¿Cuál es la función principal de la nota simple?",
        options: {
            A: "Fijar el precio de venta",
            B: "Informar sobre la situación jurídica, titularidad y cargas de una finca",
            C: "Sustituir a la escritura pública",
            // Corregido según PDF página 7
            D: "Acreditar la eficiencia energética"
        },
        answer: "B",
        explanation: "Es el documento básico para saber quién es el dueño y si la propiedad tiene deudas o hipotecas."
    },
    {
        question: "¿Qué diferencia hay entre la superficie útil y la superficie construida?",
        options: {
            A: "Ninguna, son conceptos iguales",
            B: "La construida incluye muros y elementos comunes; la útil es el espacio que se puede pisar",
            C: "La útil es mayor que la construida",
            D: "La construida solo se usa para el Catastro"
        },
        answer: "B",
        explanation: "Para el inversor es vital conocer ambas para calcular costes de reforma y rentabilidades reales."
    },
    {
        question: "¿Por qué es importante revisar los estatutos de la comunidad de propietarios?",
        options: {
            A: "Para conocer el nombre del administrador",
            B: "Para verificar si existen prohibiciones de usos (como el alquiler turístico)",
            C: "Para saber cuándo es la próxima reunión",
            D: "Para pagar menos comunidad"
        },
        answer: "B",
        explanation: "Determinadas actividades pueden estar limitadas o prohibidas por los estatutos vigentes."
    },
    {
        question: "¿Qué indica una 'carga' en el Registro de la Propiedad?",
        options: {
            A: "Que el inmueble es muy pesado",
            B: "Que existe una limitación al dominio o una deuda que afecta a la finca",
            C: "Que el inmueble tiene ascensor",
            D: "Que el IBI está pagado"
        },
        answer: "B",
        explanation: "Las cargas (hipotecas, embargos, servidumbres) deben ser canceladas o asumidas en la compra."
    },
    {
        question: "¿Por qué la visita técnica es fundamental antes de la compra?",
        options: {
            A: "Para conocer a los vecinos",
            B: "Para detectar patologías estructurales o vicios ocultos no visibles en fotos",
            C: "Para decidir el color de las cortinas",
            D: "Para reducir el precio de la notaría"
        },
        answer: "B",
        explanation: "Permite presupuestar reformas de forma realista y evitar sorpresas costosas tras la firma."
    },
    {
        question: "¿Cuál es el objetivo de un 'Estudio de Mercado' profesional?",
        options: {
            A: "Confirmar que nos gusta el piso",
            B: "Determinar el precio de mercado real comparando activos similares",
            C: "Aumentar el gasto del inversor",
            D: "Sustituir a la tasación bancaria"
        },
        answer: "B",
        explanation: "El análisis de 'testigos' (comparables) permite saber si el precio de oferta es adecuado."
    },
    {
        question: "¿Qué mide la Rentabilidad Bruta?",
        options: {
            A: "Los ingresos anuales divididos por el precio de compra",
            B: "El beneficio después de impuestos",
            C: "El flujo de caja mensual",
            D: "El valor de revalorización anual"
        },
        answer: "A",
        explanation: "Es un indicador rápido pero incompleto, ya que no tiene en cuenta gastos ni impuestos."
    },
    {
        question: "¿Qué es el Cash-on-Cash Return?",
        options: {
            A: "La rentabilidad sobre el valor total del inmueble",
            B: "El flujo de caja anual dividido por el capital propio invertido",
            C: "La velocidad a la que se vende un inmueble",
            D: "El dinero que queda tras pagar la reforma"
        },
        answer: "B",
        explanation: "Mide la rentabilidad real del dinero que el inversor ha puesto de su bolsillo."
    },
    {
        question: "¿Por qué el apalancamiento aumenta la rentabilidad financiera?",
        options: {
            A: "Porque el banco nos regala dinero",
            B: "Porque permite controlar un activo mayor con menos capital propio",
            C: "Porque reduce los impuestos de la compra",
            D: "Porque hace que el inmueble valga más"
        },
        answer: "B",
        explanation: "Al usar deuda, el retorno sobre nuestro capital propio se multiplica si la rentabilidad del activo es mayor que el coste de la deuda."
    },
    {
        question: "¿Qué es el Capex en inversión inmobiliaria?",
        options: {
            A: "Los gastos de comunidad mensuales",
            B: "Las inversiones en mejoras que aumentan el valor o la vida útil del activo",
            C: "El impuesto de bienes inmuebles",
            D: "La comisión de la inmobiliaria"
        },
        answer: "B",
        explanation: "A diferencia del mantenimiento ordinario (Opex), el Capex es una inversión de capital."
    },
    {
        question: "¿Cuál es la diferencia entre flujo de caja (Cash Flow) y beneficio contable?",
        options: {
            A: "No hay diferencia",
            B: "El Cash Flow es el dinero real disponible; el beneficio incluye apuntes como la amortización",
            C: "El Cash Flow siempre es mayor",
            D: "El beneficio contable es lo que se tiene en el banco"
        },
        answer: "B",
        explanation: "Un inversor vive del Cash Flow, aunque el beneficio contable sea lo que declare a Hacienda."
    },
    {
        question: "¿Qué importancia tiene la Tasa Interna de Retorno (TIR)?",
        options: {
            A: "Solo mide el alquiler del primer año",
            B: "Mide la rentabilidad anualizada teniendo en cuenta todos los flujos de caja y el tiempo",
            C: "Sirve para calcular el IBI",
            D: "Es igual a la rentabilidad bruta"
        },
        answer: "B",
        explanation: "La TIR permite comparar la inversión inmobiliaria con otros activos financieros considerando el factor tiempo."
    },
    {
        question: "¿Cuál es el principal riesgo de un apalancamiento excesivo?",
        options: {
            A: "Que el banco nos dé más préstamos",
            B: "La incapacidad de cubrir la cuota si bajan los ingresos o suben los tipos",
            C: "Que el inmueble se deteriore más rápido",
            D: "Que bajen los impuestos"
        },
        answer: "B",
        explanation: "El apalancamiento es un arma de doble filo: multiplica ganancias pero también riesgos."
    },
    {
        question: "¿Qué es el Loan-to-Value (LTV)?",
        options: {
            A: "El tipo de interés del préstamo",
            B: "El porcentaje del valor del inmueble que financia el banco",
            C: "La duración de la hipoteca",
            D: "El valor de tasación menos los impuestos"
        },
        answer: "B",
        explanation: "Un LTV del 80% significa que el banco presta el 80% y el inversor aporta el 20%."
    },
    {
        question: "¿Por qué el inversor debe prever una tasa de vacancia (vacancy rate)?",
        options: {
            A: "Para que el piso esté más limpio",
            B: "Para ser realistas sobre los periodos en los que el inmueble no generará ingresos",
            C: "Porque lo obliga la ley",
            D: "Para pagar menos al administrador"
        },
        answer: "B",
        explanation: "No considerar los tiempos entre inquilinos sobreestima la rentabilidad real del proyecto."
    },
    {
        question: "¿Qué es la 'regla del 50%' en el análisis rápido de gastos?",
        options: {
            A: "Que el 50% del tiempo el piso estará vacío",
            B: "Que aproximadamente el 50% de los ingresos brutos se irán en gastos operativos",
            C: "Que hay que pedir el 50% de hipoteca",
            D: "Que el beneficio debe ser el 50% de la inversión"
        },
        answer: "B",
        explanation: "Es una regla heurística para no subestimar los costes de mantenimiento, impuestos, seguros y gestión."
    },
    {
        question: "¿Qué diferencia el 'flipping' de la inversión en alquiler?",
        options: {
            A: "El color de la pintura",
            B: "El horizonte temporal y el objetivo: plusvalía rápida vs ingresos recurrentes",
            C: "Que el flipping no requiere reforma",
            D: "Que el alquiler no paga impuestos"
        },
        answer: "B",
        explanation: "El flipping busca comprar, reformar y vender en meses; el alquiler busca flujo de caja a años."
    },
    {
        question: "¿Por qué es vital diversificar la cartera inmobiliaria?",
        options: {
            A: "Para tener más llaves",
            B: "Para reducir el impacto de riesgos específicos (zona, tipo de activo, inquilino)",
            C: "Porque es más barato",
            D: "Para pagar una sola hipoteca"
        },
        answer: "B",
        explanation: "Tener diferentes tipos de activos en distintas zonas mitiga el riesgo de concentración."
    },
    {
        question: "¿Qué es el 'due diligence' en una operación inmobiliaria?",
        options: {
            A: "El pago de la señal",
            B: "El proceso de investigación y auditoría para confirmar los datos de la inversión",
            C: "La firma en notaría",
            D: "La mudanza del inquilino"
        },
        answer: "B",
        explanation: "Es la fase donde se comprueba que todo lo que el vendedor dice es cierto (legal, técnico, financiero)."
    },
    {
        question: "¿Cuál es la principal ventaja de la inversión en locales comerciales frente a viviendas?",
        options: {
            A: "Menor inversión inicial",
            B: "Contratos más largos y mayor estabilidad en la rentabilidad neta",
            C: "Que no requieren mantenimiento",
            D: "Que siempre están en el centro"
        },
        answer: "B",
        explanation: "Los locales suelen tener contratos de larga duración donde el inquilino asume muchos de los gastos."
    },
    {
        question: "¿Qué riesgo específico tienen los activos 'nicho' (como trasteros o parkings)?",
        options: {
            A: "Que son muy caros",
            B: "La dependencia de normativas municipales muy específicas y menor liquidez total",
            C: "Que requieren mucha limpieza",
            D: "Que el banco no da hipotecas nunca"
        },
        answer: "B",
        explanation: "Son mercados más pequeños que pueden saturarse rápido o verse afectados por cambios urbanísticos."
    },
    {
        question: "¿Por qué el inversor debe entender el ciclo de tipos de interés?",
        options: {
            A: "Para saber si hace sol",
            B: "Porque el coste de la deuda afecta directamente a la rentabilidad y al precio de los activos",
            C: "Para cambiar de banco cada mes",
            D: "Porque los tipos de interés no afectan al inmobiliario"
        },
        answer: "B",
        explanation: "Tipos altos suelen enfriar el mercado; tipos bajos suelen fomentar la subida de precios por mayor capacidad de compra."
    },
    {
        question: "¿Qué es un 'activo distress'?",
        options: {
            A: "Un inmueble con decoración moderna",
            B: "Un activo con problemas financieros, legales o físicos que se vende con descuento",
            C: "Un inmueble que se vende muy rápido",
            D: "Una vivienda de lujo"
        },
        answer: "B",
        explanation: "Suelen ser oportunidades de inversión donde el inversor aporta valor solucionando el problema."
    },
    {
        question: "¿Cuál es el papel de la psicología en las burbujas inmobiliarias?",
        options: {
            A: "Ninguno, solo importan los números",
            B: "El miedo a perderse la oportunidad (FOMO) impulsa compras irracionales",
            C: "Ayuda a elegir el color de las paredes",
            D: "Reduce el coste de las hipotecas"
        },
        answer: "B",
        explanation: "La euforia colectiva hace que se ignoren los fundamentales financieros, creando burbujas."
    },
    {
        question: "¿Por qué la inflación suele beneficiar al inversor inmobiliario?",
        options: {
            A: "Porque bajan los precios de las reformas",
            B: "Porque la deuda se licúa en términos reales y las rentas suelen actualizarse con el IPC",
            C: "Porque los impuestos desaparecen",
            D: "Porque el banco perdona la hipoteca"
        },
        answer: "B",
        explanation: "El inmobiliario se considera tradicionalmente un activo refugio contra la inflación."
    },
    {
        question: "¿Qué implica el concepto de 'escalabilidad' en un negocio inmobiliario?",
        options: {
            A: "Comprar un piso con muchas escaleras",
            B: "La capacidad de aumentar el tamaño de la cartera sin multiplicar linealmente los costes y el tiempo",
            C: "Pagar la hipoteca antes de tiempo",
            D: "Vender todos los activos a la vez"
        },
        answer: "B",
        explanation: "Sistemas, procesos y equipo permiten gestionar 10 o 50 inmuebles de forma eficiente."
    },
    {
        question: "¿Cuál es la mejor forma de protegerse contra una posible estafa inmobiliaria?",
        options: {
            A: "Solicitar una nota simple",
            B: "Proponer arras condicionadas",
            C: "Presionar para pagar de inmediato sin verificación documental",
            D: "Negociar el precio"
        },
        answer: "C",
        explanation: "La urgencia sin comprobaciones es uno de los patrones más habituales de fraude."
    },
    {
        question: "¿Qué característica distingue a una burbuja de una simple subida de precios?",
        options: {
            A: "Que el precio suba rápidamente",
            B: "Que el activo sea financiero",
            C: "Que exista una desviación grande y sostenida respecto al valor fundamental",
            D: "Que haya especulación"
        },
        answer: "C",
        explanation: "La clave es la separación persistente entre precio y valor real."
    },
    {
        question: "Según Minsky, ¿por qué los periodos de estabilidad pueden generar crisis futuras?",
        options: {
            A: "Porque reducen el crecimiento económico",
            B: "Porque incentivan una percepción de riesgo menor y más apalancamiento",
            C: "Porque eliminan la competencia",
            D: "Porque bajan los precios de los activos"
        },
        answer: "B",
        explanation: "La tranquilidad fomenta estructuras financieras cada vez más frágiles."
    },
    {
        question: "¿Por qué el caso inmobiliario chino presenta señales claras de burbuja?",
        options: {
            A: "Porque los precios han subido mucho",
            B: "Porque existe alta demanda residencial",
            C: "Porque la vivienda se ha convertido en un activo financiero desconectado de la demografía",
            D: "Porque no hay intervención estatal"
        },
        answer: "C",
        explanation: "La vivienda se ha convertido en un activo financiero desconectado de la demografía."
    }
];
