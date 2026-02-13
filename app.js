let currentQuestionIndex = 0;
let correctCount = 0;
let incorrectCount = 0;
let answered = false;

// Elementos del DOM
const questionContainer = document.getElementById('question-container');
const resultsContainer = document.getElementById('results-container');
const scoreText = document.getElementById('score-text');
const restartButton = document.getElementById('restart-button');

const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options-container');
const explanationText = document.getElementById('explanation-text');
const explanationContainer = document.getElementById('explanation-container');
const nextButton = document.getElementById('next-button');

function loadQuestion() {
    // Si ya terminamos, mostramos resultados
    if (currentQuestionIndex >= questionsData.length) {
        showResults();
        return; 
    }
    
    const currentQuestion = questionsData[currentQuestionIndex];
    const totalQuestions = questionsData.length;
    answered = false; // Reiniciar la bandera al cargar nueva pregunta
    
    // 1. Configurar la vista
    questionContainer.classList.remove('hidden');
    resultsContainer.classList.add('hidden'); // Aseguramos que los resultados estén ocultos

    // MOFICICACIÓN CLAVE: Muestra el contador y el texto limpio de la pregunta
    // Se muestra: "Pregunta X de Y: Texto de la pregunta"
    questionEl.textContent = `Pregunta ${currentQuestionIndex + 1} de ${totalQuestions}: ${currentQuestion.question.replace(/^\d+\.\s*/, '')}`; 
    
    optionsEl.innerHTML = ''; 
    explanationContainer.classList.add('hidden');
    nextButton.classList.add('hidden');

    // 2. Crear los botones de opción
    for (const [key, value] of Object.entries(currentQuestion.options)) {
        const button = document.createElement('button');
        button.textContent = `${key}. ${value}`;
        button.classList.add('option-button');
        
        // Asignar el evento para la corrección instantánea
        button.addEventListener('click', () => {
            selectAnswer(key, currentQuestion.answer, currentQuestion.explanation);
        });
        optionsEl.appendChild(button);
    }
}

function selectAnswer(selectedKey, correctAnswer, explanation) {
    if (answered) return; 
    answered = true;

    const optionButtons = document.querySelectorAll('.option-button');
    let isCorrect = (selectedKey === correctAnswer);

    // 1. PUNTUACIÓN: Actualizar contadores
    if (isCorrect) {
        correctCount++;
    } else {
        incorrectCount++;
    }
    
    // 2. Deshabilitar todas las opciones y marcar colores
    optionButtons.forEach(button => {
        button.disabled = true;
        const optionKey = button.textContent.charAt(0);
        
        if (optionKey === correctAnswer) {
            button.classList.add('correct');
        }
        
        if (optionKey === selectedKey && !isCorrect) {
            button.classList.add('incorrect');
        }
    });

    // 3. Mostrar la explicación
    explanationText.textContent = `Respuesta Correcta: ${correctAnswer}. ${explanation}`;
    explanationContainer.classList.remove('hidden');
    
    // 4. Mostrar el botón Siguiente
    nextButton.classList.remove('hidden');
}

function showResults() {
    questionContainer.classList.add('hidden');
    resultsContainer.classList.remove('hidden');

    const totalQuestions = questionsData.length;
    const percentage = ((correctCount / totalQuestions) * 100).toFixed(1);

    scoreText.innerHTML = `
        <p>Has terminado el Test. Aquí están tus resultados:</p>
        <ul>
            <li>**Total de Preguntas:** ${totalQuestions}</li>
            <li>**Respuestas Correctas:** ${correctCount}</li>
            <li>**Respuestas Incorrectas:** ${incorrectCount}</li>
        </ul>
        <h3>Puntuación: ${correctCount} de ${totalQuestions} (${percentage}%)</h3>
        <p class="${percentage >= 70 ? 'pass' : 'fail'}">
            ${percentage >= 70 ? '¡Felicidades! Tienes un buen nivel.' : 'Necesitas repasar algunos temas.'}
        </p>
    `;
}

function restartTest() {
    currentQuestionIndex = 0;
    correctCount = 0;
    incorrectCount = 0;
    loadQuestion();
}

// 5. Configurar botones de navegación
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    loadQuestion();
});

restartButton.addEventListener('click', restartTest);

// Cargar la primera pregunta al inicio
loadQuestion();