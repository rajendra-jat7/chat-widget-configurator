# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Chat Widget Configurator

## **Overview**

A React application that allows users to configure and preview a chat bot interface in real-time. Users can download and load configurations for reuse.

---

## **Setup Instructions**

## Prerequisites:

- Node.js (version 14+)
- npm or yarn

## Steps:

1. Clone the repository:
   ```bash

   ```

### git clone https://github.com/rajendra-jat7/chat-widget-configurator.git

2. Navigate to the project folder:

### cd chat-widget-configurator

3. Install dependencies:

### npm install

4. Start the applications:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

# Assumptions and Design Decisions

1. Assumptions:

#### The avatarImage and launcherImage are expected to be uploaded as Base64-encoded strings.

#### Color inputs are synchronized with a live preview in real-time

2. Design Decisions:

#### Used useState for lightweight state management.

#### Integrated Tailwind CSS for responsive design.

3. Known Issues:

#### Large images may cause rendering delays in the preview section.

# Features

#### Live preview of chat bot configuartion.

#### Configuration attributes like colors, fonts, and images.

#### Download and load configuration in JSON format.

#### Fully responsive layout for all devices.
