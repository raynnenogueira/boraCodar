// DOM elements
const dailyGoalInput = document.getElementById("dailyGoal");
const dailyGoalOutput = document.getElementById("dailyGoalValue");
const quantityInput = document.getElementById("dailyQuantity");
const quantityOutput = document.getElementById("quantityValue");
const startButton = document.getElementById('start');
const reminderContainer = document.querySelector('.reminderContainer');
const closeButton = document.getElementById('close');
const percentageDisplay = document.getElementById('percentage');
const goal = document.getElementById('goal');

// Variáveis adicionais
let totalGlassesTaken = 0;

// Event listeners
dailyGoalInput.addEventListener("input", handledailyGoalInput);
quantityInput.addEventListener("input", handlequantityInput);
startButton.addEventListener('click', handleStartButtonClick);
closeButton.addEventListener('click', closeModal);

// Event handlers
function handledailyGoalInput() {
  const goalInMilliliters = Number(dailyGoalInput.value);
  dailyGoalOutput.textContent = `${goalInMilliliters}ML`;
  const goalInLiters = (goalInMilliliters / 1000).toFixed(1);
  goal.textContent = `Meta: ${goalInLiters} L`;
}

function handlequantityInput() {
  quantityOutput.textContent = `${quantityInput.value}ML`;
}

function handleStartButtonClick() {
  showReminder();
}

function showReminder() {
  reminderContainer.style.display = 'block';
}

function closeModal() {
  reminderContainer.style.display = 'none';
}

// Constantes
const TIME_AWAKE_IN_MINUTES = 960; // Equivalent to 16 hours awake

// Atualizações iniciais
handledailyGoalInput();
handlequantityInput();
