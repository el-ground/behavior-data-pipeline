# behavior-data-pipeline
[![Netlify Status](https://api.netlify.com/api/v1/badges/c77a7916-6610-4ec9-a35d-e398deedba56/deploy-status)](https://app.netlify.com/sites/behavior-data-pipeline/deploys)

https://behavior-data-pipeline.netlify.app/

A deployable demo e-commerce web service implementing Google Analytics 4 with a DOM simulator to generate user behavior data, along with an internal service that can stream &amp; transform data from Google BigQuery to target destination, which allows running supervised ML tasks based on the user simulation parameters and its generated behavior data collected via GA4.

This project is a part of the [KAIST Lean Startup Camp](https://kcbstartup.kaist.ac.kr/sub0307) program, whose purpose is to create synergy between the startups in KAIST College of Business and the engineers in KAIST College of Engineering.

[Adil Botabekov](https://github.com/adilb99) and [Ayan Mukanov](https://github.com/mukanov8), KAIST College of Engineering.  
[El Ground](https://www.elground.com/), KAIST College of Business.  

The project is inspired from their service [Roout](https://roout.co.kr)


# Project structure
The project consists of four major components.

## 1. Demo app
- Create a deployable demo e-commerce web service implementing Google Tag Manager and Google Analytics 4
- Framework : React (Gatsby), Deployment : Static

### TODO 
1. Create an usable webapp interface which implements
    - [ ] search
    - [x] item lists page (both home and search results), clicking the item links to the item detail page
    - [x] item detail page, which contains add to cart / purchase button
    - [ ] sign up / login
    - [x] add to cart
    - [x] begin checkout
    - [x] purchase
    - and any features of behaviors referenced from [the GA4 documentation](https://support.google.com/analytics/answer/9268036?hl=en&ref_topic=9756175)

2. Create Google Analytics 4 and Google Tag Manager environment
    - [ ] Create GA4 environment
    - [ ] Create Google Tag Manager environemnt
    - [ ] Install Google Tag Manager to the webapp
    - [ ] Let the webapp fire events
    - [ ] Configure triggers, variables, and tags in GTM
    - [ ] Test that data is collected in GA4 correctly
    - [ ] Create Google Cloud Platform environment
    - [ ] Configure GA4 to send data to BigQuery
    - [ ] Test that data is collected in BigQuery correctly

## 2. Parameterized DOM user behavior simulator 
- Create a simulator to automatically generate analytics data. It should be able to parameterize behaviors based on user profile types / interests
- The simulator runs within the demo app. ```window.simulateUser(<parameters>)```
- We're basically creating virtual customers.

### TODO
1. Create a DOM simulation methods (The DOM structure should be agreed with step 1. (naming of ids, classes, and usage of tags))
    - [ ] scroll down item list
    - [ ] click item
    - [ ] enter search
    - [ ] submit search
    - [ ] add to cart
    - [ ] begin checkout
    - [ ] purchase
    - ...and more

2. Create abstracted user behavior methods which utilizes the DOM simulation methods
    - [ ] try to find item of their need
    - [ ] look around with no direct need
    - [ ] decide to look at the item details
    - [ ] decide to add to cart
    - [ ] decode to complete purchase
    - [ ] return to previous menu if decided not to
    - [ ] leave the page if no need was fulfilled
    - ...and more

3. Create parameterized user profiles that affects the abstracted behavior
    - [ ] define demographics : age, gender, jobs, region
    - [ ] define interests : ex) sports, cooking, traveling, k-pop, etc. Can be more detailed.
    - [ ] make defined demographics and interests affect the decision process.
 
4. Setup a headless environment to run the simulation
    - Environment : Node.js
 
## 3. Data pipeline
- Create a deployable internal service that can stream & transform data from Google BigQuery to target destination (e.g file system)
- Environment : Node.js

### TODO
1. BigQuery implements a SQL interface. Learn / research about its schema structure.
    - [ ] Get idea of GA4 generated data looks like.

2. Define how the output data schema would be.
    - [ ] will output as csv files.
    - [ ] the csv files will be fed directly to the ML part. Think about how will the data be consumed by the ML framework.
    - [ ] Decide how are we cleaning the data, choose which fields to drop, which fields to process.
    - [ ] Create a sample before -> after dataset by hand.

3. Create a stream processing service.
    - [ ] Query BigQuery
    - [ ] Stream data
    - [ ] Make modifications
    - [ ] Store to destination
    - [ ] All steps above should be implemented via stream


## 4. ML reports
- Environment : Anaconda + Jupyter notebook + Scipy

### TODO
1. Train models
    - [ ] Guess user parameters (demographics, interests, etc.) from behavior data
    - [ ] Guess the user's interests of individual items from behavior data
    - [ ] Item-Item Collaborative Filtering
    - [ ] User-Item Collaborative Filtering
    
2. Visualize the trained models
    - [ ] Gain insights on how to upgrade the webapp for our virtual customers.

3. Modify the simulator from the insights collected
    - [ ] Run the pipeline again to see those changes were productive (Increased Revenue, etc).
  
