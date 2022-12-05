Array.from(document.querySelectorAll('.reusable-search__result-container')).map((e) => {
    return {
        "name": e.querySelector('.entity-result__title-text .app-aware-link [aria-hidden="true"]').innerText,
        "title": e.querySelector('.linked-area [class*="primary"]').innerText,
        "location": e.querySelector('.linked-area [class*="secondary"]').innerText,
        "currentJob": ,
        "linkedinLink": 
    }
});