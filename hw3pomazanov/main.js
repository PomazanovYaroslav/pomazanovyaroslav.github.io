"use strict"
let userName;
let age;
let role;
let occupation;

(age > 18) && !!userName;
occupation === "CEO" && role ==="Admin";
occupation ?? role;
((age > 18) && !!userName) || role === "Admin";
role != 'Admin' && !!userName && age;