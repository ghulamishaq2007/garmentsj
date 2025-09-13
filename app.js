
document.addEventListener('contextmenu', function(e) {
 e.preventDefault();
 });

 Common shortcuts
document.addEventListener('keydown', function(e) {
  // F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
  if (e.key === 'F12' ||
      (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) ||
      (e.ctrlKey && (e.key === 'u' || e.key === 'U'))) {
    e.preventDefault();
    // alert('Inspecting disabled.');
  }
});

