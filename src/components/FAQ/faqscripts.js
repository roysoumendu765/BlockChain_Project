document.addEventListener('DOMContentLoaded', function () {
    var questions = document.querySelectorAll('.faq-question');

    questions.forEach(function (question) {
        question.addEventListener('click', function () {
            var answer = this.nextElementSibling;

            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
            } else {
                var activeAnswers = document.querySelectorAll('.faq-answer');
                activeAnswers.forEach(function (activeAnswer) {
                    activeAnswer.style.maxHeight = null;
                });

                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });
});