let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span class="text-color">Desarrolladora fullstack apasionada por bases de datos, siempre aprendiendo ;)</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
