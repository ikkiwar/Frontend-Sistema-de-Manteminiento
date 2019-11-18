//import // from 'jspdf.min.js'; 
import html2canvas from 'html2canvas.js';

function e(){

  html2canvas(document.body, {
    onrendered: function (canvas){

      var img = canvas.toDataURL("image/png");
      var doc = new e();
      doc.addImage(img, 'JPEG', 20, 20);
      doc.save('test.pdf');
  }
  
  });

}


