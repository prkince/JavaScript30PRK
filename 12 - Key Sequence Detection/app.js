const pressed = [];
const secretCode = 'yo';

document.addEventListener('keyup',
  (e) => {
    pressed.push(e.key);
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
    console.log(pressed);
    if (pressed.join('') === secretCode) {
      document.write(`<h1>CONGRATS BRO'</h1>`);
      cornify_add();
    }
  });
