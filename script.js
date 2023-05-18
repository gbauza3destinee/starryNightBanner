
// To run this effect in loop set 'loop' to true
const instance = new Typewriter('#typewriter', {
    loop: true

});


instance.typeString("Hi All!")
    .pauseFor(1000)
    .deleteAll()
    .typeString('I am Des G - Bauza')
    .pauseFor(1000)
    .deleteChars(24)
    .typeString('and I am an aspiring <br> Software Engineer.')
    .pauseFor(1000)
    .deleteChars(41)
.typeString('I am Two Spirit <br> and use they/them pronouns :)')
    .pauseFor(1000)
    .deleteChars(50)
    .typeString('Currently, I am learning <br> Backend Development <br> and Java')
    .pauseFor(1000)
    .deleteAll()
    .typeString('Check out my work at <br> github.com/gbauza3destinee')
    .pauseFor(1000)
    .deleteAll()
    .start();


window.addEventListener("load", typewriter);
