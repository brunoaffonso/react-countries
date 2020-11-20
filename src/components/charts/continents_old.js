function handleContinents(continents) {
  let total = [];
  continents.find((cont) => {
    const c = cont.region;
    // console.log(c);
    total.push(c);
    // total.find((t) => {
    //   // console.log(t);
    //   if (`${c}` === t) {
    //     // console.log([`${c}`]);
    //     total.push({ [`${c}`]: +1 });
    //   } else {
    //     total.push({ [`${JSON.stringify(t)}`]: 1 });
    //   }
    //   // console.log(t);
    //   return t;
    // });
    // console.log(c);
    return c;
  });
  return total;
  // continents.map((continent) => {
  //   const n = total.find((t) => t.region === continent.region);
  //   console.log(n);
  //   if (n) {
  //     total.push({ continent: +1 });
  //   } else {
  //     total.push({ n: 1 });
  //   }

  //   // console.log(country.find((country) => country.region === 'Africa'));
  //   // total.find(continent.region);
  // });
}

export { handleContinents };
