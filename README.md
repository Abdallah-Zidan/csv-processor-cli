<br />
<div align="center">
<h3 align="center">CSV processor CLI ⚙️</h3>

  <p align="center">
    CLI app to parse CSV files and extract useful insights 👍
    <br />
</div>



<!-- TABLE OF CONTENTS -->
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
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>





## About The Project

[![Capture.png](https://i.postimg.cc/yd5MGKQJ/Capture.png)](https://postimg.cc/nj4SsytZ)

A simple CLI app that receives a csv file with orders data comma seperated and calulate average of each product throught the orders and specify the most popular brand for each product and in the end writes the results to output csv files

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

* [Node.js][Node-url]
* [csv-parse][csv-parse-url]
* [csv-writer][csv-writer-url]
* [commander][commander-url]
* [chalk][chalk-url]
* [inquirer][inquirer-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>


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
   ```sh
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

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->

## Usage
@TODO

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTACT -->

## Contact

Abd Allah Zidan  - [![LinkedIn][linkedin-shield]][linkedin-url] - 	[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:eng.abdallahzidan@gmail.com?subject=[GitHub]%20Source%20CLI)

Project Link: [https://github.com/Abdallah-Zidan/csv-processor-cli](https://github.com/Abdallah-Zidan/csv-processor-cli)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555

[linkedin-url]: https://www.linkedin.com/in/abdallah-zidan/

[product-screenshot]: https://postimg.cc/nj4SsytZ

[node-url]:https://nodejs.org/

[csv-parse-url]:https://csv.js.org/parse/

[csv-writer-url]: https://github.com/ryu1kn/csv-writer

[commander-url]:https://github.com/tj/commander.js

[chalk-url]:https://github.com/chalk/chalk

[inquirer-url]:https://github.com/SBoudrias/Inquirer.js