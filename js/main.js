var age = 24
var gender = "Female"



if (age >= 18) {
  if (gender == "Male") {
    console.log("You're "+ age +" and above the age limit, you're also a dude")
  } else if (gender == "Female") {
    console.log("You're "+ age +" and above the age limit, you're also a chick")
  } else {
    console.log("You're "+ age +" and above the age limit, but what the fuck are you?")
  }
}
if (age <= 18) {
  if (gender == "Male") {
    console.log("You're "+ age +" and below the age limit dude")
  } else if (gender == "Female") {
    console.log("You're "+ age +" and below the age limit, you're also a chick, it's ok if you're Clinton")
  } else {
    console.log("You're an unidentified "+ age +" year old minor")
  }
}
