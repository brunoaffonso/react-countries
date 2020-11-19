function numberFormatter(numero) {
  const numFormated = new Intl.NumberFormat('pt-BR').format(numero);
  return numFormated;
}

export { numberFormatter };
