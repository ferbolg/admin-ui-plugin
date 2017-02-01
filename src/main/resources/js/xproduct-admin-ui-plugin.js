// (function ($) { // this closure helps us keep our variables to ourselves.
// // This pattern is known as an "iife" - immediately invoked function expression
// //
// //     // form the URL
//     var url = AJS.contextPath() + "/rest/xproduct-admin/1.0/";
//     var baseUrl = '123';
//
//     // wait for the DOM (i.e., document "skeleton") to load. This likely isn't necessary for the current case,
//     // but may be helpful for AJAX that provides secondary content.
//     $(document).ready(function() {
//         // request the config information from the server
//         $.ajax({
//             url: url,
//             dataType: "json"
//         }).done(function(config) { // when the configuration is returned...
//             AJS.$("#admin").submit(function(e) {
//                 console.log("response received");
//                 e.preventDefault();
//                 updateConfig();
//             });
//             $("#name").val(config.name);
//             $("#time").val(config.time);
//         });
//     });
//
//     // var baseUrl = AJS.$("meta[name='application-base-url']").attr("content");
//     //
//     // function populateForm() {
//     //     AJS.$.ajax({
//     //         url: baseUrl + "/rest/xproduct-admin/1.0/",
//     //         dataType: "json",
//     //         success: function(config) {
//     //             AJS.$("#name").attr("value", config.name);
//     //             AJS.$("#time").attr("value", config.time);
//     //         }
//     //     });
//     // }
//     function updateConfig() {
//         AJS.$.ajax({
//             url: baseUrl + "/rest/xproduct-admin/1.0/",
//             type: "PUT",
//             contentType: "application/json",
//             data: '{ "name": "' + AJS.$("#name").attr("value") + '", "time": ' +  AJS.$("#time").attr("value") + ' }',
//             processData: false
//         });
//     }
//     // populateForm();
//     //
//     // AJS.$("#admin").submit(function(e) {
//     //    alert(e);
//     //     e.preventDefault();
//     //     // console.log(e);
//     //     updateConfig();
//     // });
//
// })(AJS.$ || jQuery);
// //
// // function updateConfig() {
// //     AJS.$.ajax({
// //         url: baseUrl + "/rest/xproduct-admin/1.0/",
// //         type: "PUT",
// //         contentType: "application/json",
// //         data: '{ "name": "' + AJS.$("#name").attr("value") + '", "time": ' +  AJS.$("#time").attr("value") + ' }',
// //         processData: false
// //     });
// // }
// (function ($) {
// $(document).ready(function() {
//     // request the config information from the server
//     // $.ajax({
//     //     url: url,
//     //     dataType: "json"
//     // }).done(function(config) { // when the configuration is returned...
//     //     AJS.$("#admin").submit(function(e) {
//     //         console.log("response received");
//     //         e.preventDefault();
//     //         updateConfig();
//     //     });
//     //     $("#name").val(config.name);
//     //     $("#time").val(config.time);
//     // });
//     console.log(0)
// });
// })(AJS.$ || jQuery);

$(document).ready( function() {
    // $.post('ajax/test.html', function(data) {
    //     $('.result').html(data);
    // });
    alert(123);
    console.log("Message to console!!");
});