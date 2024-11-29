# 🌐 API Testing Scripts Library

A collection of reusable **pre-request** and **post-request** scripts to automate and enhance API testing workflows. These scripts are adaptable for any API testing tool that supports JavaScript scripting.

## 🚀 Features
- **Dynamic Data:** Generate unique emails, UUIDs, and timestamps.
- **Authentication:** Handle Bearer tokens, OAuth2, and other methods.
- **Validations:** Verify response codes and schemas.
- **Utilities:** Manage environment variables and debug responses.

## 📜 Example Scripts

### Pre-request Scripts
- **Dynamic Email Generation**:
   ```javascript
   let counter = pm.environment.get('email_counter') || 1;
   pm.variables.set('email', `test${counter}@example.com`);
   pm.environment.set('email_counter', counter + 1);
