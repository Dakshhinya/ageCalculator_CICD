function calculateAge(birthYear, birthMonth, birthDay) {
  const today = new Date();
  const birthDate = new Date(birthYear, birthMonth - 1, birthDay);

  if (birthDate > today) return null; // Future date check

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  return { years, months, days };
}

module.exports = calculateAge;
