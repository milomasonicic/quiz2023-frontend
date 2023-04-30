# QUIZ2023

This is a simple quiz application. The frontend part is made using HTML, CSS, and JS. The backend part is made using PHP and MySQL.

# Backend, admin side
* github link https://github.com/milomasonicic/quiz2023-backend.git (master branche)
* start Apache and MySQL in XAMP Control Panel
* import quiz.sql
* run php -S localhost:8099

## Details 
   * admin e-mail: admin@admin.com
   * password: topsecret

## API structure
   * "http://localhost:8099/api/questions" - get request to get questions
   * "http://localhost:8099/api/answers" - get request to get answers
   * "http://localhost:8099/api/answersCorrect + "?id=" + resArr[i]" - get correct answers based on the id of a choosen answer

