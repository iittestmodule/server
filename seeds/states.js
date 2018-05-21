
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('states').del()
    .then(function () {
      
      return knex('states').insert([
        {id:'1', name: 'Andaman and Nicobar Islands'},
        {id:'2', name: 'Chandigarh'},       
        {id:'3', name: 'Dadra and Nagar Haveli'},
        {id:'4', name: 'Daman & Diu'},
        {id:'5', name: 'Delhi'},
        {id:'6', name: 'Lakshadweep'},
        {id:'7', name: 'Puducherry'},
        
        {id:'8', name: 'Andhra Pradesh'},
        {id:'9', name: 'Arunachal Pradesh'},
        {id:'10', name: 'Assam'},
        {id:'11', name: 'Bihar'},
        {id:'12', name: 'Chhattisgarh'},
        {id:'13', name: 'Goa'},
        {id:'14', name: 'Gujarat'},
        {id:'15', name: 'Haryana'},
        {id:'16', name: 'Himachal Pradesh'},
        {id:'17', name: 'Jammu & Kashmir'},
        {id:'18', name: 'Jharkhand'},
        {id:'19', name: 'Karnataka'},
        {id:'20', name: 'Kerala'},
        {id:'21', name: 'Madhya Pradesh'},
        {id:'22', name: 'Maharashtra'},
        {id:'23', name: 'Manipur'},
        {id:'24', name: 'Meghalaya'},
        {id:'25', name: 'Mizoram'},
        {id:'26', name: 'Nagaland'},
        {id:'27', name: 'Odisha'},
        {id:'28', name: 'Punjab'},
        {id:'29', name: 'Rajasthan'},
        {id:'30', name: 'Sikkim'},
        {id:'31', name: 'Tamil Nadu'},
        {id:'32', name: 'Telangana'},
        {id:'33', name: 'Tripura'},
        {id:'34', name: 'Uttarakhand'},
        {id:'35', name: 'Uttar Pradesh'},
        {id:'36', name: 'West Bengal'}

        //or
// const state = [
//   {
//     id: 1,
//     name: Goa,
//     date: new Date()
//   },
//   {
//     id: 2,
//     name: Assam,
//     date: new Date()
//   },
// ];
// return knex('states').insert(state);

      ]);
    });
};



