function handleContinents(continents) {
  let africa = 0;
  let americas = 0;
  let asia = 0;
  let europe = 0;
  let oceania = 0;
  let polar = 0;

  const checkRegion = (region) => {
    switch (region) {
      case 'Africa':
        africa++;
        break;
      case 'Americas':
        americas++;
        break;
      case 'Asia':
        asia++;
        break;
      case 'Europe':
        europe++;
        break;
      case 'Oceania':
        oceania++;
        break;
      default:
        polar++;
        break;
    }
  };
  continents.find((cont) => {
    return checkRegion(cont.region);
  });

  return [
    ['COntinente', 'Quantidade'],
    ['Africa', africa],
    ['Americas', americas],
    ['Asia', asia],
    ['Europa', europe],
    ['Oceania', oceania],
    ['Polar', polar],
  ];
}

export { handleContinents };
