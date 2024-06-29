// Initialization
const ball2 = document.querySelector('.ball2');
const main_body = document.querySelector('.main_body');
let all_logs;

// Start Animation
setTimeout(function() {
    ball2.classList.remove('hidden');
}, 2000);
setTimeout(function() {
    ball2.classList.add('hidden');
}, 2200);
setTimeout(function() {
    ball2.classList.remove('hidden');
}, 2300);

setTimeout(function() {
    main_body.style.animation = 'fade_in 3s forwards';
}, 2400);

if (localStorage.getItem('all_logs') == null) {
    localStorage.setItem('all_logs', "Welcome to the daylogger!");

} else {
    all_logs = localStorage.getItem('all_logs');
}

// Initialization
const addlog = document.querySelector('.addlog');
const month = document.querySelector('.month');
const day = document.querySelector('.day');
const year = document.querySelector('.year');
const alltext = document.querySelector('.alltext');
const confirm_modal = document.querySelector('.confirm_modal');
const blurbg = document.querySelector('.blurbg');
const deny_button_modal = document.querySelector('.deny_button_modal');
const confirm_button_modal = document.querySelector('.confirm_button_modal');
const edit_log_area = document.querySelector('.edit_log_area');
const clear_btn = document.querySelector('.clear_btn');
const get_original_button_modal = document.querySelector('.get_original_button_modal');
const container = document.querySelector('.container');
const all_logs_viewer = document.querySelector('.all_logs_viewer');
const save_and_exit = document.querySelector('.save_and_exit');
const see_my_logs_btn = document.querySelector('.see_my_logs_btn');
const content_section = document.querySelector('.content_section');
const ok_button = document.querySelector('.ok_button')
const artificial_alert = document.querySelector('.artificial_alert')
let v2;

// Event listener for adding a log
addlog.addEventListener('click', function() {
    if (month.value !== "" && day.value !== "" && year.value !== "" && alltext.value !== "") {
        confirm_modal.classList.remove('hidden');
    blurbg.classList.remove('hidden');
    edit_log_area.value = `Date: ${month.value}/${day.value}/${year.value}
Day Content: ${alltext.value}`;
daylogsave = edit_log_area.value;
}else {
    artificial_alert.classList.remove('hidden')
}})

// For clearing inputs
clear_btn.addEventListener('click', function(){
    month.value = "";
    day.value = "";
    year.value = "";
    alltext.value = "";
})

// Bring back original in modal
get_original_button_modal.addEventListener('click', function(){
    edit_log_area.value = daylogsave;
})

// Confirm your log in the modal
confirm_button_modal.addEventListener('click', function(){
    confirm_modal.classList.add('hidden');
    blurbg.classList.add('hidden');
    all_logs += "|/|" + edit_log_area.value; // Adding the content of edit_log_area directly to all_logs
    localStorage.setItem('all_logs', all_logs); // Saving all_logs to localStorage
    month.value = "";
    day.value = "";
    year.value = "";
    alltext.value = "";
    
})

// Button that displays the see my logs modal
see_my_logs_btn.addEventListener('click', function(){
    all_logs_viewer.classList.remove('hidden');
    blurbg.classList.remove('hidden');

    content_section.innerHTML = "";
    v2 = localStorage.getItem('all_logs').split('|/|');

// loops through everything in local storage and puts log data in an array
    for (let i = 0; i < v2.length; i++) {
        if (v2[i] !== undefined && v2[i] !== "") {
            const newel = document.createElement("textarea");
            newel.classList.add('default_log');
            newel.dataset.id = i;
            newel.value = v2[i];
            newel.setAttribute('spellcheck', 'false');
            content_section.appendChild(newel); 
        }
    }
})

// Saves and exits see my logs modal after you edit or delete any logs
save_and_exit.addEventListener('click', function(){
    all_logs_viewer.classList.add('hidden');
    blurbg.classList.add('hidden');
    all_logs = ""; // Reset all_logs
    for (let i = 0; i < v2.length; i++) {
        let e1 = document.querySelector(`[data-id="${i}"]`);
        if (e1) {
            all_logs += "|/|" + e1.value; // Adding the content of each textarea to all_logs
        }
    }
    localStorage.setItem('all_logs', all_logs); // Saving all_logs to localStorage
})

// "OK" button for artificial modal
ok_button.addEventListener('click', function() {
    artificial_alert.classList.add('hidden')
})
