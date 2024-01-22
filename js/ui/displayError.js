export function displayError(messageType ="error", message = ""){
    return `<div class="error" ${messageType}>${message}</div>`;
}