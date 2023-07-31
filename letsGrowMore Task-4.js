let result = document.getElementById('result');
let expression = '';

function appendNumber(number) {
    expression += number;
    result.value = expression;
}

function appendOperator(operator) {
    if (operator === '%') {
        if (expression !== '' && !isNaN(expression[expression.length - 1])) {
            let num = eval(expression);
            num = num / 100;
            expression = num.toString();
            result.value = expression;
        }
    } else {
        if (expression !== '' && !isNaN(expression[expression.length - 1])) {
            expression += operator;
            result.value = expression;
        }
    }
}


function calculate() {
    if (expression !== '' && !isNaN(expression[expression.length - 1])) {
        try {
            expression = eval(expression).toString();
            result.value = expression;
        } catch (error) {
            result.value = 'Error';
        }
    }
}

function clearResult() {
    expression = '';
    result.value = '';
}

function deleteLast() {
    expression = expression.slice(0, -1);
    result.value = expression;
}
