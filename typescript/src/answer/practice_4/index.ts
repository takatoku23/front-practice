const buttonAnswer = document.querySelector('button');
const inputAnswer = document.querySelector('input');

if (button && input) {
  button.onclick = () => {
    console.log(`Input length: ${input.value.length}`);
  };
}
