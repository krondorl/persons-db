# Task Description

## EXPECTED TECHNOLOGY

- Spring 5
- Spring Boot 2
- Preferred: React, TypeScript, but any frontend is acceptable
- PostgreSQL database
- Docker

## FRONTEND

- React GUI
- A form for entering personal information:
  - Name
  - Date and place of birth
  - Mother's maiden name
  - Social security number (TAJ)
  - Tax identification number
  - Email address
  - Addresses (postal code, city, street, house number, etc.) (multiple addresses should be allowed)
  - Phone numbers (multiple phone numbers should be allowed)
- Validate the data (basic checks, e.g., email address without @)
- A listing screen with an editable table (data should be updatable here) (A person's addresses and phone numbers should be displayed in an internal list (multi-level table))
- There should be an option to delete personal data upon a GDPR request (depersonalization: only the data that can identify the person needs to be corrupted or removed)
- Unit tests
- Nice to have: design (padding, colors, anything, but don't spend too much time on this)

## BACKEND

- Java, Spring Boot backend
- REST API to handle traffic from the frontend
- Communicate with the database (Hibernate)
- Build the database with version control (e.g., Liquibase)
- Unit tests

## DOCKER

- Build the application's components into Docker images:
  - Database
  - Backend
  - Frontend
- A short README.md file for starting the application
