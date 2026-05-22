
//for spinner buttons  

$(function ($) {
       $('#handleCounter1').handleCounter({
    minimum: 1,
    maximize: 100,
   
           
    })
          
        $('#handleCounter2').handleCounter({
    minimum: 1,
    maximize: 100,
             
           })
       
     
       
       });
      
   

//for datepicker

addEventListener('DOMContentLoaded', function () {
	

   
    
	pickmeup('.range', {
		mode : 'range',
        separator: '    to   ',
        position :'bottom',
//        hide_on_select : true,
        format: 'd b-y',
      
	});
//pickmeup('.range').show();


    
});



















// image slider main
$(document).ready(function(){
    
 
                $('.single').slick({
                autoplay : true,
                  pauseOnFocus : false,
                    pauseOnHover : false,
                 arrows : false,
                    draggable : false,
                         });
              
                $('.left').click(function(){
                  $('.single').slick('slickPrev');
                })

                $('.right').click(function(){
                  $('.single').slick('slickNext');
                })
                
                
                
                 
                $('.room').slick({
                autoplay : false,
                  slidesToShow :3,
                  pauseOnFocus : true,
                
                 arrows : false,
                    draggable : true,
                 swipeToSlide : true,
                  });
    
                
                $('.review').slick({
                    
                autoplay : true,
                    autoplaySpeed : 6000,
                  pauseOnFocus : true,
                 pauseOnHover : false,
                 arrows : false,
                    draggable : true,
             
                    
                         });
    
    
    
    
   
        });



//scrolltotop
 
   $(function () {
  $.scrollUp({
    scrollName: 'scrollUp', // Element ID
    topDistance: '600' , // Distance from top before showing element (px)
    topSpeed: 300 , // Speed back to top (ms)
    animation: 'fade', // Fade, slide, none
    animationInSpeed: 500, // Animation in speed (ms)
    animationOutSpeed: 500, // Animation out speed (ms)
  scrollText: '^',
    activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
  });
});



// Custom Booking Logic
$(document).ready(function() {
    function updateSummary() {
        var roomSelect = $('#b_room');
        var pricePerNight = parseInt(roomSelect.val());
        var roomName = roomSelect.find('option:selected').data('name');
        var guests = $('#b_guests').val();
        
        // Very basic night calculation based on pickmeup input
        var datesStr = $('#b_dates').val() || "";
        var nights = 1;
        if(datesStr.indexOf('to') !== -1) {
            // Rough estimation, assuming they picked 2 dates
            // Real calc would parse the dates, but for this mockup, we generate a random nights or just set it based on selection
            // Let's just make it visually update
            nights = 2; 
        }
        
        $('#s_room').text(roomName);
        $('#s_guests').text(guests);
        $('#s_nights').text(nights);
        
        var total = pricePerNight * nights;
        $('#s_total').text(total);
        $('#m_total').text(total);
    }

    $('#b_room, #b_guests').on('change', updateSummary);
    
    // Listen to pickmeup change
    $('#b_dates').on('pickmeup-change', function() {
        updateSummary();
    });

    $('#btnProceed').click(function(e) {
        e.preventDefault();
        
        if($('#b_name').val() === "" || $('#b_email').val() === "") {
            alert("Lütfen ad ve e-posta alanlarını doldurun.");
            return;
        }
        
        $('#paymentModal').css('display', 'flex');
    });

    $('#btnPay').click(function(e) {
        e.preventDefault();
        $('#paymentModal').hide();
        $('#successModal').css('display', 'flex');
    });
});


// Custom Booking Logic for Old Style
$(document).ready(function() {
    function updateSummaryOld() {
        var roomSelect = $('#b_room');
        var pricePerNight = parseInt(roomSelect.val());
        var roomName = roomSelect.find('option:selected').data('name');
        
        var guests = parseInt($('#number2').val()) || 1;
        var roomCount = parseInt($('#number1').val()) || 1;
        
        // --- NEW LOGIC: Adjust rooms based on guests ---
        // 1 room = 2 guests max
        var minRooms = Math.ceil(guests / 2);
        if (roomCount < minRooms) {
            roomCount = minRooms;
            $('#number1').val(roomCount); // Update the input
        }
        
        var datesStr = $('#b_dates').val() || "";
        var nights = 1;
        if(datesStr.indexOf('to') !== -1) {
            nights = 2; // Mock calculation
        }
        
        if (roomName) {
            $('#dynamicSummary').fadeIn(200);
            $('#s_room').text(roomName);
            $('#s_room_count').text(roomCount);
            $('#s_guests').text(guests);
            $('#s_nights').text(nights);
            
            var total = pricePerNight * nights * roomCount;
            $('#s_total').text(total);
            $('#m_total').text(total);
        }
    }

    // Bind to the old inputs
    $('#b_room').on('change', updateSummaryOld);
    
    // For handleCounter, we need to bind to the buttons
    $('.counter-minus, .counter-plus').click(function() {
        setTimeout(updateSummaryOld, 100);
    });
    
    $('#b_dates').on('pickmeup-change', function() {
        setTimeout(updateSummaryOld, 100);
    });

    $('#btnProceedOld').click(function(e) {
        e.preventDefault();
        
        if($('#b_name').val() === "" || $('#b_email').val() === "") {
            alert("Lütfen ad ve e-posta alanlarını doldurun.");
            return;
        }
        
        // Show modal instead of submitting
        $('#paymentModal').css('display', 'flex');
    });

    $('#btnPay').click(function(e) {
        e.preventDefault();
        $('#paymentModal').hide();
        $('#successModal').css('display', 'flex');
    });
});
