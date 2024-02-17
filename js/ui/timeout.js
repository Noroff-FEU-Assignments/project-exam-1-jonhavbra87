export function redirectHome() {
    return new Promise(resolve => {
        setTimeout(() => {
            window.location.href = '/';
            resolve();
        }, 5000);
    });
}
