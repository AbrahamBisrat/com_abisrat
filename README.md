# Personal Website

## Hosting Environment: AWS

**Description:** This website is hosted on Amazon Web Services (AWS) and serves as a professional showcase.

## Design Usage

**Template:** If you find the design appealing and would like to use it as a template for your own website, you can easily do so.

## Data and Configuration

**Location:** All data and configuration files can be found in the `./src/data` folder.

**Privacy Considerations:** Please be aware that the `./src/data` folder contains Personally Identifiable Information (PII). Exercise caution and ensure the appropriate security measures are in place.

## Connect Section - Form Submission

**Functionality:** In the "Connect" section of the website, there is a form that allows for user submission.

**Implementation:** To achieve this, a simple AWS Lambda function has been employed. The function utilizes Amazon Simple Email Service (SES) to forward the form submissions via email.

**Source Code:** You can access the source code for this functionality in the `./src/lambda` folder. It is recommended to disable Cross-Origin Resource Sharing (CORS) as needed for your specific use case.
