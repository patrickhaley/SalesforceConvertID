# Salesforce ID Converter

This project was inspired by https://www.adminbooster.com/tool/15to18, but I didn't want to copy and paste a bunch of IDs between the browser and Google Sheets to manipulate data. This project provides a Google Sheets custom function, SALESFORCE_18, that converts 15-character Salesforce IDs into their corresponding 18-character case-insensitive format. The function is designed to streamline the process of preparing Salesforce data for import, ensuring accurate record identification.

## Features
- **Easy Conversion:** Quickly convert 15-character Salesforce IDs to 18-character IDs directly within Google Sheets.
- **Custom Function:** Use the function seamlessly in your spreadsheets without needing external tools.
- **Open Source:** Licensed under the MIT License, allowing for modification and redistribution.

## Usage
To use the function, simply enter `=SALESFORCE_18(A1)` in a cell, where `A1` contains the 15-character ID you wish to convert.

## Installation
1. Open your Google Sheet.
2. Navigate to Extensions > Apps Script.
3. Copy and paste the provided script from `SalesforceIDConverter.js` into the Apps Script editor `code.gs`.
4. Save the script and refresh your Google Sheet.

You can now use the `SALESFORCE_18` function in your spreadsheet.