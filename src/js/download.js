document.addEventListener('DOMContentLoaded', function() {
    const downloadBtn = document.querySelector('.download-icon');
    
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            const icon = this.querySelector('i');
            const originalIcon = icon.className;
            icon.className = 'fas fa-spinner fa-spin';
            
            // Оптимальные настройки для html2canvas
            const opt = {
                scale: 2, // Оптимальный баланс качества и размера
                useCORS: true,
                backgroundColor: '#ffffff',
                scrollX: 0,
                scrollY: 0,
                logging: false,
                allowTaint: true,
                letterRendering: true,
                ignoreElements: (element) => {
                    return element.classList.contains('edit-form') || 
                           element.classList.contains('download-icon');
                }
            };
            
            // Добавляем временный класс для печати
            document.body.classList.add('printing');
            
            setTimeout(() => {
                html2canvas(document.querySelector('.resume'), opt).then(canvas => {
                    const { jsPDF } = window.jspdf;
                    const pdf = new jsPDF('p', 'mm', 'a4');
                    
                    // Рассчитываем размеры с учетом отступов
                    const pageWidth = pdf.internal.pageSize.getWidth() - 25;
                    const pageHeight = pdf.internal.pageSize.getHeight() - 35;
                    
                    const imgWidth = pageWidth;
                    const imgHeight = (canvas.height * imgWidth) / canvas.width;
                    
                    // Добавляем изображение с отступами
                    pdf.addImage(canvas, 'PNG', 10, 10, imgWidth, imgHeight);
                
                
                    
                    pdf.save('Resume.pdf');
                    icon.className = originalIcon;
                    document.body.classList.remove('printing');
                }).catch(error => {
                    console.error('Error generating PDF:', error);
                    icon.className = originalIcon;
                    document.body.classList.remove('printing');
                });
            }, 300);
        });
    }
});