document.querySelectorAll('.nav-icon').forEach(icon => {
    icon.addEventListener('mouseover', () => {
      icon.style.backgroundColor = '#FFD700';
    });
    icon.addEventListener('mouseout', () => {
      icon.style.backgroundColor = '#3e3e3e';
    });
  });
  

  document.getElementById('download-cv').addEventListener('click', function() {
    var link = document.createElement('a');
    link.href = './files/Resume.pdf';  // Replace with the path to your CV file
    link.download = 'Mahmudul Hasan Abin CV';  
    link.style.display = 'none';  
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});