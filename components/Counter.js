
function Counter() {
  const [value, setValue] = useState(25);

	//  useEffect(() => {
	//  }, [value]);

  const updateCounter = label => {

    if (label === '+') setValue(value + 1);
    if (label === '-') setValue(value - 1);

    render();
  };

  return e(
    'h2',
    null,
    'counter: ' + value,
    e(Button, {label: '+', handleClick: updateCounter}),
    e(Button, {label: '-', handleClick: updateCounter}),
  );
}


