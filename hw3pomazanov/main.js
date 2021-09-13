"use strict"
const userName = "Yaroslav";
const age = 23;
const role = "admin";
const occupation = "CEO";

alert(userName && age > 18);
alert(!role || !occupation);
alert(occupation ?? role);
alert(userName && age > 18 || role);
alert(age || !role && userName);