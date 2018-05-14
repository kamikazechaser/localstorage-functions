function supportsLocalStorage() {
    return typeof(Storage) !== "undefined";
}

if (!supportsLocalStorage()) {
    alert("Upgrade your browser to use this service.")
} else {
    console.log("localStorage available!")
}

function pushToStore(key, value) {
    return localStorage.setItem(key, value);
}

function getFromStore(key) {
    return localStorage.getItem(key);
}

function clearStore() {
    return localStorage.clear();
}