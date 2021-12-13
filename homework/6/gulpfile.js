//Подключаем локальные пакеты
var gulp = require("gulp");
var sass = require("gulp-sass")(require("sass"));
var print = require("gulp-print");

//Определение задачи по умолчанию в GULP
// gulp.task("default", function () {
//   return gulp.src("package.json").pipe(
//     print(function () {
//       return "HTTP Server Started";
//     })
//   );
// });

//Определение новой задачи в GULP для SCSS и SASS
gulp.task("scss", function () {
  return gulp
    .src("./samples/styles/main.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./samples"));
});

//Отслеживание изменений
// gulp.task("scss:watch", function () {
//   //Находим папку и отмечаем, за каким файлом необходимо наблюдать, если он найден - выполняем задание "scss"
//   gulp.watch(["./samples/**/*.scss", "./samples/**/*.sass"], ["scss"]);
// });

gulp.task("watch", function () {
  gulp.watch("./samples/**/*.scss", gulp.series("scss"));
});

gulp.task("default", gulp.series(gulp.parallel("watch")));
