var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        
        
        datasets: [{
            
            
            data: [ 40000000000, 70000000000, 40000000000],
            backgroundColor: [
                ' #2a2a72',
                'green',
                'blue'
               
            ],
            
          
            
           
            
        }]
    },
  
});
Chart.defaults.global.elements.rectangle.borderColor = '#000';
