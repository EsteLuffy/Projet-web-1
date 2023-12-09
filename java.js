const form = document.getElementById('quiz-form');
const alertDiv = document.getElementById('alert');

alertDiv.style.display = 'none';

form.addEventListener('submit', x => {
  x.preventDefault();

  let score = 0;
  const answers = ['true', 'true', 'true'];
  const questions = document.querySelectorAll('.question-item');

  questions.forEach((question, index) => {

    if (document.querySelector(`input[name="answer-${index + 1}"]:checked`).value === answers[index]) {
      question.style.color = 'green';
      score++;
    } else {
      question.style.color = 'red';
    }

  });

  if (score === answers.length) {
    alertDiv.innerHTML = '<div class="alert-title">Congratulations!!</div>You got them all right!';
    alertDiv.style.display = 'block';
    alertDiv.style.position = 'absolute';
    alertDiv.style.top = '50%';
    alertDiv.style.left = '50%';
    alertDiv.style.padding = '20px';
    alertDiv.style.background = 'green';
    alertDiv.style.borderRadius = '10px';
    alertDiv.style.transform = 'translate(-50%, -50%)';
  } else {
    alertDiv.style.display = 'none';
  }
});