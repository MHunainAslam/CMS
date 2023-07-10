
$('.sidebar-tab-heading').on('click', function () {
    $(this).toggleClass('active')
    $(this).find('.bi-chevron-down').toggleClass('active')
})
$('.sidebar-tab-content button').on('click', function () {
    $('#closebtn').click()
})
// Create the chart

// Get the canvas element
// const ctx = document.getElementById('myChart').getContext('2d');

// // Define the chart data
// const data = {
// //   labels: ['Blue'],
//   datasets: [{
//     label: 'My Dataset',
//     data: [100],
//     backgroundColor: ['blue']
//   }]
// };

// // Configure the chart
// const config = {
//   type: 'doughnut',
//   data: data,
//   options: {
//     // responsive: true,
//     plugins: {
//       legend: {
//         position: 'bottom',
//       },
//       title: {
//         display: true,
//       }
//     }
//   }
// };

// // Create the chart
// new Chart(ctx, config);

AOS.init();
$(document).ready(function() {
    $('input[name="view"]').on('change', function() {
      if ($(this).val() === 'table') {
        $('.tg-content').addClass('tablecard').removeClass('gridcard')
        console.log("hello");
      } else if ($(this).val() === 'grid') {
        $('.tg-content').addClass('gridcard').removeClass('tablecard')
        console.log("bye");
      }
    });
  });
  