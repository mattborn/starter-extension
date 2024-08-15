const link = document.createElement('link')
link.href = chrome.runtime.getURL('styles.css')
link.rel = 'stylesheet'
document.head.appendChild(link)
