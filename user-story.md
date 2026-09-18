# User Story Template

**Title:**
_As a user, I want to register for an account so that I can log in and access personalized features._

**Description:**
New users need a way to create an account using their email and password so they can save preferences, view order history, and leave reviews.

**Acceptance Criteria:**
1. Given a new user is on the registration page, when they submit a valid email and password, then their account is created in the database.
2. Given a user tries to register with an email that already exists, when they submit the form, then they see an error message.
3. Given a user successfully registers, when registration completes, then they are redirected to the login page.

**Priority:** High

**Story Points:** 3

**Notes:**
Password should be hashed before storing in MongoDB.
