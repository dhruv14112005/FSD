const userDOB = document.getElementById("date");
console.log(userDOB.value);

const generateage = () => {
  const output = document.getElementById("output");
  const userDOB = document.getElementById("date");
  console.log(userDOB.value);
  const currentDate = new Date();
  const userDOBvalue = new Date(userDOB.value);
  const userage = currentDate.getFullYear() - userDOBvalue.getFullYear();
  if (userDOBvalue.getMonth() > currentDate.getMonth()) userage--;
  output.innerText = `Your age is ${userage} years`;
  console.log(userage);
};
