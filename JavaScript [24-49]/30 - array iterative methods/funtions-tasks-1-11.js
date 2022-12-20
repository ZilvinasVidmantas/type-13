function round(number) {
  const remainder = number % 1;
  const whole = number - remainder;

  if (remainder <= -0.5) return whole - 1;
  else if (remainder >= 0.5) return whole + 1;

  return whole;
}
