# # Project: Modular Website Builder with Sanity Studio

Build a Sanity Studio project for a modular website builder with these features:

---

## Core Document Types

- **Page**
  - Title
  - Slug
  - Array of ordered `sections` (see Object Types)

- **Post**
  - Title
  - Slug
  - Publish Date
  - Author (reference)
  - Categories (array)
  - Portable Text content
  - SEO (embedded object)

- **Menu**
  - Title
  - Array of `menuItem` objects (label, link, optional nested children)

- **Form**
  - Title
  - Array of form fields (label, type: text/email/textarea/select, required boolean)
  - Notification Email

- **Site Settings** (singleton)
  - Site Title
  - Logo (image)
  - Primary Color (color picker)
  - Footer Links (array of `link`)
  - Social Media Profiles (array of `socialLink`)
  - Head Scripts (text)
  - Footer Scripts (text)

---

## Object Types

- **SEO**
  - Meta Title
  - Meta Description
  - Open Graph Image
  - Twitter Card Type (select)

- **Section Types** (for modular pages)
  - Hero Section
  - Text Block
  - Feature Grid
  - Gallery
  - Testimonial Section
  - Pricing Table
  - FAQ Section
  - Form Embed Section

- **menuItem**
  - Label
  - Link (URL or internal reference)
  - Optional array of child menuItems

- **socialLink**
  - Platform (select)
  - URL

- **link**
  - Label
  - URL

---

## Optional Document Types (Commented Out / Optional Schema Files)

- **Event**
  - Title
  - Start/End Date
  - Location
  - Registration Link

- **Product**
  - Title
  - Slug
  - Price
  - Description (Portable Text)
  - Images (array)
  - Category (reference)

---

## Desk Structure

Group content types like this:

- Content
  - Pages
  - Posts
- Forms
- Navigation
- Site Settings (singleton)
- [Optional] Products
- [Optional] Events

---

## Output

Clean, consistent schema files per type/object. Ready for Sanity deploy and frontend integration.

