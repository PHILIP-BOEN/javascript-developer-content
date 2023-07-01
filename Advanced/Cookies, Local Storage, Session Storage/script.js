// Web storage API that allows JavaScript to store data in the browser

// Local Storage
localStorage.setItem('name', 'John Doe')
console.log(localStorage.getItem('name'))

localStorage.removeItem('name')


/**
 * LocalStorage data is stored on the user's computer, not on the server. This means that it will persist even if the user closes the browser or clears their cookies.
 * 
 * LocalStorage data has no expiration date. This means that it will remain in the browser until the user manually deletes it.
 * 
 * LocalStorage data can store more data than cookies. The maximum size of LocalStorage data is 5 MB, while the maximum size of a cookie is 4 KB.
 * 
 * LocalStorage data is shared across all tabs and windows from the same origin. This means that if you store a value in LocalStorage in one tab, you can access it from another tab or window in the same browser.
 * 
 * Xtics
 * Key-value pairs
 * No expiration date
 * Shared across tabs
 * Limited size
 * Secure
 */


//  Session Storage
sessionStorage.setItem('name', 'Jane Doe')
console.log(sessionStorage.getItem('name'))

sessionStorage.removeItem('name')

/**
 * SessionStorage data is stored in memory, not on the user's computer. This means that it will not persist if the user closes the browser or clears their cookies.
 * 
 * SessionStorage data is cleared when the user closes the tab or window that contains it. This means that it is not shared across tabs or windows.
 * 
 * SessionStorage data can store more data than cookies. The maximum size of SessionStorage data is 5 MB, while the maximum size of a cookie is 4 KB.
 * 
 * Xtics
 * Key-value pairs
 * No expiration date
 * Not shared across tabs
 * Limited Size
 * Secure
 */


// Cookies
document.cookie = 'name=Peter Smith'
document.cookie = 'firstName=Peter; expires=' + new Date(2023, 11, 15).toUTCString()
document.cookie = `lastName=Smith; expires=${new Date(2023, 8, 15).toUTCString()}`

const now = new Date();
const fifteenMinutesLater = new Date(now.getTime() + 15 * 60 * 1000);
document.cookie = `jwtToken=7a!ty2%Qw1; expires=${new Date(fifteenMinutesLater).toUTCString()}; HttpOnly`

console.log(document.cookie)

/**
 * Authentication: Cookies can be used to authenticate users and keep them logged in to a website.
Personalization: Cookies can be used to personalize the user experience on a website, such as by remembering the user's preferences for language, font size, and other display settings.

 * Tracking: Cookies can be used to track the user's browsing activity across different websites. This information can be used to target advertising, improve the user experience, or prevent fraud.

 * Analytics: Cookies can be used to collect anonymous data about how users interact with a website. This information can be used to improve the website's design and functionality.
 */