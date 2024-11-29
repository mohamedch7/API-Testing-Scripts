// Get the current counter
let counter = pm.environment.get('email_counter') || 1;

// Create a unique email
let email = `test${counter}@test.com`;

// Use the email in the request
pm.variables.set('email', email);

// Increment the counter for the next request
pm.environment.set('email_counter', counter + 1);
