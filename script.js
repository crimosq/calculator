const buttons = document.querySelectorAll('button')
const screenDisplay = document.querySelector('.display')

let calculation = []
let accumCalc


function calculate(button) {
    const value = button.textContent;
  
    if (value === 'AC') {
      calculation = [];
      accumCalc = '';
      screenDisplay.textContent = '0';
    } else if (value === 'DEL') {
      // Remove the last character from accumCalc and update calculation array
      accumCalc = accumCalc.slice(0, -1); 
      calculation.pop();
      screenDisplay.textContent = accumCalc || '0'; // Display 0 if accumCalc is empty
    } else if (value === '=') {
      try {
        const result = eval(accumCalc);
        if (!isFinite(result)) {
          throw new Error('Error'); // Throw an error for Infinity
        }
        screenDisplay.textContent = result;
      } catch (error) {
        screenDisplay.textContent = 'Error';
      }
    } else {
      calculation.push(value);
      accumCalc = calculation.join('');
      screenDisplay.textContent = accumCalc;
    }
  }
  


buttons.forEach(button => button.addEventListener('click', () => calculate(button)) ) 