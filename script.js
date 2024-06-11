const { initDropDown } = require('basic-dropdown-component')

// const { JSDOM } = require('jsdom');

// // Create a basic HTML document
// const html = `
// <!DOCTYPE html>
// <html>
// <head></head>
// <body></body>
// </html>
// `;

// // Create a virtual DOM environment
// const dom = new JSDOM(html);

// // Extract the document and window objects from the virtual DOM
// const { window } = dom;
// const { document } = window;

// // Assign the document and window objects to the global scope
// global.document = document;
// global.window = window;



// // Array of dropdown items
const dropdownItems = [
  { href: '#create', iconClass: 'bx bx-plus-circle', text: 'Create New' },
  { href: '#draft', iconClass: 'bx bx-book', text: 'All Drafts' },
  { href: '#move', iconClass: 'bx bx-folder', text: 'Move to' },
  { href: '#profile', iconClass: 'bx bx-user', text: 'Profile Settings' },
  { href: '#notification', iconClass: 'bx bx-bell', text: 'Notification' },
  { href: '#settings', iconClass: 'bx bx-cog', text: 'Settings' }
];

initDropDown('body',dropdownItems);