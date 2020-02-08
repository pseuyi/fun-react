
function Button({label, handleClick}) {
  return e('button', {onclick: () => handleClick(label)}, label);
}
