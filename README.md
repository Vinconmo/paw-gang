<h1 align="center">
<img src=./assets/logo.jpg alt="Paw Gang" width=300 />
</h1>

PawGang is a mobile scheduling app (Android & iOS) for visits to dog parks. It helps dog owners plan and coordinate visits, ensuring their pets can socialize, exercise, and have fun together.

## The app
<p align="center">
  <img src="./assets/app.gif" alt="Paw Gang app" height=400 />
</p>

## Getting started
1. Regularls: Make sure you have installed on your local machine `nodeJs` `v22.3+` as a runtime environment, the package manager `npm` and `git`.

2. Database: Install and start [MongoDB](https://www.mongodb.com/try/download/community) as your database service on your local machine or [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database) if you prefer a cloud-hosted database. Create a new database instance for the app.

3. Google Api: Login into our Google Console account or set one up and get your api key for [all Google Maps Platform APIs]([https://ai.google.dev/gemini-api/docs/api-key](https://console.cloud.google.com/google/maps-apis/start?utm_source=Docs_GS_Button&ref=https://developers.google.com/maps/&_gl=1*dbjcor*_ga*MjExNTg4MjQyMy4xNzIxNjUzODIw*_ga_NRWSTWS78N*MTcyNDQyOTY0OC45LjEuMTcyNDQyOTkzMS4wLjAuMA..)). Make sure afterwards to enable Geocoding and Places APIs in the Console.

## Install and run the app:

1. Fork this repo into your GitHub

2. Clone your fork onto your local machine using
   
   1. If you wish to load the project into a new directory, create one first
   
   2. In your terminal navigate into your desired directory for this project and load your forked repository to you local machine
      ```bash
      cd <your-directory-name>
      git clone <link_to_your_forked_repo>`
      ```

3. Install dependencies
   
   1. Navigate in your terminal into the `/server` directory and install dependencies from npm
      ```bash
      cd server
      npm i
      cd ..         # ! navigates back to root directory !
      ```
   
   2. Navigate in your terminal into the `/client` directory and install dependencies from npm
      ```bash
      cd client   
      npm i
      cd ..          # ! navigates back to root directory !
      ```

4. Setup environment variables
   1. Via your terminal, create a `.env` file in the `root` directory
      ```bash
      touch .env
      ```

   2. Add API key for Google Maps via the terminal
      ```bash
      echo "GOOGLE_MAPS_API_KEY='your_api_key'" >> .env      # ! replace 'your_api_key' with your key created for all Google Maps APIs via Google Console !
      ```
   
   3. Add your database connection variables via the terminal
      ```bash
      echo "MONGODB_URI='your_connection_string'" >> .env         # ! replace 'your_connection_string' with your MongoDB connection string !
      echo "DB_PASSWORD='your_password'" >> .env                  # ! replace 'your_password' with your postgreSQL password !
       ```
   4. Optional: Customize your server host address and port
      ```bash
      echo "SERVER_PORT='your_port'" >> .env                 # ! replace 'your_port' with your desired port number !
      echo "LOCAL_IP_ADDRESS='your_host'" >> .env                     # ! replace 'your_host' with your desired IP address !
      ```
 

6. Start the app
   
   1. Start your backend: 
      ```bash
      cd server   
      npm run dev       
      cd ..             # ! navigates back to root directory !
      ```
      or if you prefer nodemon and have it installed
      ```bash
      cd server   
      npm run devN      
      cd ..             # ! navigates back to root directory !
      ```
      
      **NOTE**: You should see messages logged to your console confirming your connection to the database and your server
   
   3. Start your frontend: Open a new terminal window and run the following code from your current directory (`/server`)
      ```bash
      cd ..            # ! navigates back to root directory !
      cd client
      npm run start
      ```
  
      The app is run with expo, which allows you to run the app on the web, via mobiles devices (Android & iOS) or on mobile simulators via your computer. You can change          the environment in the terminal as shown below:
  
      ![expo environment settings](./assets/starting-client.png)
  
      1. Web: Your editor should prompt you to open the app in the browser or simply enter click on the link in the terminal
      2. Mobile
         - iPhones: Scan the QR code in the terminal
         - Android: Install the expo app on your device and scan the QR code via the app.
           **Note**: If you have troubles connecting, check that your network connection is set as 'private' or use a tunnel service to connect between computer and your               device by running in your terminal `expo start --tunnel` to start the app client-side
      3. Computer
         - iOS (for iPhone): Follow the [Expo Guide](https://docs.expo.dev/workflow/ios-simulator/) to set up the iOS simulator
         - Windows (for Android): Follow the [Expo Guide](https://docs.expo.dev/workflow/android-studio-emulator/#install-watchman-and-jdk) to set up the Android simulator

      **Note**: The work was mostly done on iOS mobile, so some features may not work or fit properly in on Android or Web.

## How It Works:

- **Search for Parks**: Enter your location or use the "Locate Me" feature to find nearby dog parks.
- **View Park Details**: Check out photos, the adress, and ratings of the parks.
- **Plan Visits**: Use the "Plan visit 🐾" button to schedule your visit to the park.
- **Manage Visits**: View and manage all your planned visits in the "My Plans" section.
- **Park Schedule**: View the schedule of each park to see when other dogs will be visiting and plan accordingly.

## Key Features:

PawGang is the perfect app for dog lovers who want to ensure their pets have plenty of opportunities to socialize and play with other dogs. Plan your visits, meet other dog owners, and let your furry friends have a great time at the park!

1. **Search Nearby Dog Parks**:
   - Easily search for dog parks near your location.
   - View park details, including photos, ratings, adress.

2. **Locate Me**:
   - Use your current location to find the nearest dog parks with a single tap.

3. **Plan Your Visit**:
   - Schedule visits to dog parks at specific times and dates.
   - View the park's schedule to see when other dogs will be visiting.

4. **Manage Your Plans**:
   - Keep track of all your planned visits to different dog parks.
   - Edit or cancel your plans as needed.

5. **Interactive Calendar**:
   - View park schedules and plan your visits with an easy-to-use calendar interface.

6. **User-Friendly Navigation**:
   - Simple tab navigation for easy access to search and plan features.
   - Intuitive design ensures a seamless experience for all users.
  
## Tech Stack
- Language: TypeScript
- Frontend:
     1. React Native + Expo
     2. Cypress & Jest (testing)
- Backend:
     1. Express
     2. MongoDB + Mongoose
     3. Google Maps API
     4. Jest (testing)

## Contributors
Eugenio Navajo - [GitHub](https://github.com/eugenionavasan), [LinkedIn](https://www.linkedin.com/in/eugenio-navajo-741610306/)
Andre Amato - [GitHub](https://github.com/andre-amato), [LinkedIn](https://www.linkedin.com/in/andre-amato/)
Vincent Moser - [GitHub](https://github.com/Vinconmo), [LinkedIn](https://www.linkedin.com/in/vincent-moser/)
