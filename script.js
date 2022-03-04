// const example1Span = document.querySelector('#example-1 span');
// example1Span.textContent = localStorage.getItem('example-1-number') ?? 0;
// document.querySelector('#example-1 button').addEventListener('click', function() {
//    example1Span.textContent++;
//    localStorage.setItem('example-1-number', example1Span.textContent);
// });
// const example2Span = document.querySelector('#example-2 span');
// example2Span.textContent = localStorage.getItem('example-2-number') ?? 1000;
// document.querySelector('#example-2 button').addEventListener('click', function() {
//    example2Span.textContent--;
//    localStorage.setItem('example-2-number', example2Span.textContent);
// });


// const example2Input = document.querySelector('#example-2 input');
// example2Input.value = localStorage.getItem('example-2-input');
// example2Input.addEventListener('input', function() {
//    localStorage.setItem()
// });


// const darkTheme = document.querySelector('input[type=checkbox]');

// darkTheme.checked = + localStorage.getItem('dark-theme');
// document.body.classList.toggle('dark-theme', darkTheme.checked);

// darkTheme.addEventListener('change', function() {
//    localStorage.setItem('dark-theme', +darkTheme.checked);
//    document.body.classList.toggle('dark-theme');
// });



const timeoutExample = setTimeout(function() {
   document.querySelector('span').textContent = "Hello";
}, 3000);
document.querySelector('button').addEventListener('click', function() {
   clearTimeout(timeoutExample);
});


const timeoutExample = setTimeout(function() {
   document.querySelector('span').textContent = "Hi";
});