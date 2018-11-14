# Air Jordan Website Re-creation

> Project description : the purpose of the project was to build the entire item page of a popular website. Our team chose to focus on the Air Jordan website. My responsibility was to build out the right-side component consisting of the sizes table and item description. 

## Related Projects

 - https://github.com/WARP-V/shoe_name_and_colors
 - https://github.com/WARP-V/Navigation-Search-Service
 - https://github.com/WARP-V/page-footer
 - https://github.com/WARP-V/Sizing-Cart_Service
 - https://github.com/WARP-V/Review-Service

## Contributors
 - Blake Forrest https://github.com/blakef87

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

  - App component is the parent component
    - Description and Sizes are child components of App
      - Row is a child component of Sizes

## Requirements

Run the following commands when starting the project:
   
  - npm install -g webpack
  - npm install
  - npm run seed
  - npm run build
  - npm run start

## Development

  - Linter = Eslint with AirBnB style guide
  - Tester = Jest with Enzyme
  - Database = Mondodb with Mongoose
  - Server = Node with Express

## API Endpoints

  - CREATE/POST:
    - shoes/
  - READ/GET:
    - shoes/:name/sizes
    - shoes/:shoeId/sizes
    - shoes/:name/descrip
    - shoes/:shoeId/descrip
  - READ ALL/GET ALL
    - shoes/
  - UPDATE/PATCH:
    - shoes/:name
    - shoes/:shoeId
  - DELETE:
    - shoes/:name
    - shoes/:shoeId

