var job1Duties = ["Turn on stove",
    "Cook White Rice","Cook Brown Rice","Wash Dishes", 
    "Unload food items in the front","Greet Customers before taking orders",
    "Fill the cups with Boba","Maintain cleanliness after serving food",
    "Clean tables","Refill White Rice"];

function showJob1Duties() {
    var numDuties = parseInt(document.getElementById("job1Input").value);
  //isNan = if it's NOT a number (value)
    if (isNaN(numDuties) || numDuties < 1) {
      document.getElementById("job1Output").innerHTML = "Please enter a number greater than 0.";
      return;
    }
  
    var index = numDuties - 1;
    if (index >= job1Duties.length) {
      index = job1Duties.length - 1;
    }
  
    var result = "";
    var counter = 1;
  
    while (index >= 0) {
      result += counter + ". " + job1Duties[index] + "<br>";
      counter++;
      index--;
    }
  
    document.getElementById("job1Output").innerHTML = result;
  }
  var job2Duties = ["Operated grills", "Operated Fryers",
    'Assembled Sandwiches', 'Took orders from customers and served orders',
    'Managed drive-throught with accurate orders', 'Handled Cash and returned changes',
    'Kept lobby clean', 'Worked with other team members during rushes','Restocked food itmes',
    'Baked cookies'
  ]
  function showJob2Duties(){
    var numDuties = parseInt(document.getElementById("job2Input").value);

    if (isNaN(numDuties) || numDuties < 1){
        document.getElementById("job2Output").innerHTML = "Please enter a number greater than 0.";
        return;
    }
    var index = numDuties - 1;
    if(index >= job2Duties.length){
        index = job2Duties.length -1;
    }
    var result = "";
    var counter = 1;
    
    while(index >=0){
        result += counter + ". " + job2Duties[index] + "<br>";
        counter++;
        index--;
    }
    document.getElementById('job2Output').innerHTML = result;

  }
function calculateSalary() {
    var wage = parseFloat(document.getElementById("wageInput").value);
    var hours = parseFloat(document.getElementById("hoursInput").value);

    if (isNaN(wage) || isNaN(hours)) {
        document.getElementById("salaryOutput").innerHTML = "Enter a valid number!";
        return;
    }

    var salary = wage * hours * 52;
    var salMessage;

    if (salary < 20000) {
        salMessage = ". The salary is too little!";
    } else if (salary >= 20000 && salary <= 25000) {
        salMessage = ". The salary is ALMOST enough.. Let's negotiate!";
    } else {
        salMessage = ". This is a great salary for me.";
    }

    document.getElementById("salaryOutput").innerHTML =
  "The salary is $" + salary.toFixed(2) + salMessage;
  }
