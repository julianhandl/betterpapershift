// Saves options to chrome.storage
function save_options() {
    var timeformat = document.getElementById('timeformat').value;
    var minPause = document.getElementById('forced-pause').value;
    var minPauseHours = document.getElementById('forced-pause-hours').value;

    chrome.storage.sync.set({
        timeformat: timeformat,
        minPause: minPause,
        minPauseHours: minPauseHours
    }, function () {
        // Update status to let user know options were saved.
        var status = document.getElementById('status');
        status.innerHTML = '<div class="alert alert-success" role="alert">Settings were saved!</div>';
        setTimeout(function () {
            status.innerHTML = '';
        }, 1000);
    });
}

function restore_options() {
    // Use default value color = 'red' and likesColor = true.
    chrome.storage.sync.get({
        timeformat: 'decimal',
        minPause: '0',
        minPauseHours: '6'
    }, function (items) {
        document.getElementById('timeformat').value = items.timeformat;
        document.getElementById('forced-pause').value = items.minPause;
        document.getElementById('forced-pause-hours').value = items.minPauseHours;
    });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);