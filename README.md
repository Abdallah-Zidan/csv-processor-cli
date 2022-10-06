<br />
<div align="center">
<h3 align="center">CSV processor CLI ⚙️</h3>

  <p align="center">
    CLI app to parse CSV files and extract useful insights 👍
    <br />
</div>


<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#testing">Testing</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>


## About The Project

[![Capture.png](https://i.postimg.cc/brfpDzFt/Capture.png)](https://postimg.cc/CB7W9V0h)

A simple CLI app that receives a csv file with orders data comma seperated and calulate average of each product throught the orders and specify the most popular brand for each product and in the end writes the results to output csv files


### Built With

* [![Node.js][node-shield]][Node-url]
* [csv-parse][csv-parse-url]
* [csv-writer][csv-writer-url]
* [commander][commander-url]
* [chalk][chalk-url]
* [inquirer][inquirer-url]


## Getting Started

The app is built using Node.js and useful npm packages so in the following sections you can find how to install and use the app.

### Prerequisites

* Node.js (14+)
refer to [Node.js][Node-url] for installation instructions

* npm
```sh
npm install npm@latest -g
```

### Installation

1. Clone the repo
```shell
git clone https://github.com/Abdallah-Zidan/csv-processor-cli
```
2. Install NPM packages
```sh
npm install
```
3. if you are using linux run the following command
```sh
chmod +x app
 ```



## Usage
The applicaton is very simple to use here is how

1. from the application folder using your terminal run the following
```shell
./app test.csv -o output 
```
* where 'test.csv' is the path of input csv file and 'output' is the name of output folder
[![Capture.png](https://i.postimg.cc/RFMW3L6m/Capture.png)](https://postimg.cc/5HR4TvSK)

2. you can omit -o option and the app will default to a folder called output inside the application folder
```shell
./app test.csv
```

3. even if you forgot to provide input file as an argument the application will ask you for it
[![1.png](https://i.postimg.cc/BQv274v3/1.png)](https://postimg.cc/5jZH6cvK)



## Testing
The app use [![Vitest][vitest-shield]][vitest-url] which is an amazing testing package

1. in order to run tests you can use the following command:
````shell
npm run test 
````
2. vitest has also a great testing ui where you can view test results and other actions in your browser you can launch it with
```shell
npm run test:ui
```
[![1.png](https://i.postimg.cc/Zqpzpktt/1.png)](https://postimg.cc/B8SzfVnM)
[![2.png](https://i.postimg.cc/V6gTWmKT/2.png)](https://postimg.cc/TLyCRMMq)

## Contact

[![LinkedIn][linkedin-shield]][linkedin-url]  [![Gmail][gmail-shield]][gmail-url]

Project Link: [CSV processor CLI][repo-url]



[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555

[linkedin-url]: https://www.linkedin.com/in/abdallah-zidan/

[product-screenshot]: https://postimg.cc/nj4SsytZ
[node-shield]:https://img.shields.io/static/v1?style=for-the-badge&message=Node.js&color=339933&logo=Node.js&logoColor=FFFFFF&label=
[node-url]:https://nodejs.org/

[csv-parse-url]:https://csv.js.org/parse/

[csv-writer-url]: https://github.com/ryu1kn/csv-writer

[commander-url]:https://github.com/tj/commander.js

[chalk-url]:https://github.com/chalk/chalk

[inquirer-url]:https://github.com/SBoudrias/Inquirer.js
[vitest-shield]:https://img.shields.io/static/v1?style=for-the-badge&message=Vitest&color=6E9F18&logo=Vitest&logoColor=FFFFFF&label=
[vitest-url]:https://vitest.dev/
[gmail-shield]:https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white
[gmail-url]:mailto:eng.abdallahzidan@gmail.com
[repo-url]:https://github.com/Abdallah-Zidan/csv-processor-cli