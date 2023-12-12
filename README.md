# CSRF

CSRF demo

## Description
CSRF demo

## Getting Started

### Dependencies

* To run the project, you need to have Nodejs in your machine
* Or yoy can install in this kink: <https://nodejs.org/en>

### Installing

* 1/ Clone the project by using command:

```
git clone https://github.com/s223518483/csrf.git
```

* 2/ Go to csrf Folder
* 3/ Open the Terminal/Command Line inside the folder location
* 4/ open the file (index.html). We can see this 2 line:
*  //await fetch('http://localhost:8080/api/create-checkout-session', {
    await fetch('http://localhost:3000/proxy', {
*  the first one [ await fetch('http://localhost:8080/api/create-checkout-session', { ] is for method 1.
*  the second one [ 'http://localhost:3000/proxy', { ] for the second method.
*  To execute the first method just uncomment the first line and comment the other [ await fetch('http://localhost:3000/proxy', {]
*  To execute the second method just uncomment the second line and comment the other [ http://localhost:8080/api/create-checkout-session', { ]

### Executing program

* 1/ Run the program:

```
node index.js
```

## Help

Any advise for common problems or issues.

* If have any problem in running 
```
npm install express express-http-proxy cors
```

## Authors

s223518483

## Version History

* 1.0
  * First initial  Release

## License

This project is licensed under the Education Purpose

