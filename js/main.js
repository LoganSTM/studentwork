// Определяем текущую страницу и подсвечиваем её в меню
var page = window.location.pathname.split('/').pop() || 'index.html';
var links = document.querySelectorAll('.nav a');

links.forEach(function (link) {
    if (link.getAttribute('href') === page) {
        link.classList.add('active');
    }
});

// Фильтр расписания по дням недели
var dayFilter = document.getElementById('day-filter');

if (dayFilter) {
    dayFilter.addEventListener('change', function () {
        var days = document.querySelectorAll('.day');
        var selectedDay = dayFilter.value;

        days.forEach(function (day) {
            var isVisible = selectedDay === 'all' || day.getAttribute('data-day') === selectedDay;
            day.classList.toggle('hidden', !isVisible);
        });
    });
}

// Считаем средний балл по оценкам в таблице
var grades = document.querySelectorAll('[data-grade-row]');
var average = document.getElementById('average-value');

if (grades.length && average) {
    var total = 0;
    var count = 0;

    grades.forEach(function (row) {
        var grade = Number(row.getAttribute('data-grade'));
        total += grade;
        count += 1;
    });

    average.textContent = (total / count).toFixed(2);
}

