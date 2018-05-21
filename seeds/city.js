
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cites').del()
    .then(function () {
      // Inserts seed entries
      return knex('cites').insert([
        { name: 'Anantapur', state_id: '8'},
        { name: 'Chittoor', state_id: '8'},
        { name: 'East Godavari', state_id: '8'},
        { name: 'Guntur', state_id: '8'},
        { name: 'Cuddapah', state_id: '8'},
        { name: 'Krishna', state_id: '8'},
        { name: 'Kurnool', state_id: '8'},
        {name: 'Prakasam', state_id: '8'},
        { name: 'Nellore', state_id: '8'},
        { name: 'Srikakulam', state_id: '8'},
        { name: 'Vishakhapatnam', state_id: '8'},
        { name: 'Vizianagaram', state_id: '8'},
        { name: 'West Godavari', state_id: '8'},

        { name: 'Anjaw', state_id: '9'},
        { name: 'Changlang', state_id: '9'},
        { name: 'Dibang Valley', state_id: '9'},
        { name: 'East Kameng', state_id: '9'},
        { name: 'East Siang', state_id: '9'},
        { name: 'Kra Daadi', state_id: '9'},
        { name: 'Kurung Kumey', state_id: '9'},
        { name: 'Lohit', state_id: '9'},
        { name: 'Longding', state_id: '9'},
        { name: 'Lower Dibang Valley', state_id: '9'},
        { name: 'Lower Subansiri', state_id: '9'},
        { name: 'Namsai', state_id: '9'},
        { name: 'Papum Pare', state_id: '9'},
        { name: 'Siang', state_id: '9'},
        { name: 'Tawang', state_id: '9'},
        { name: 'Tirap', state_id: '9'},
        { name: 'Upper Siang', state_id: '9'},
        { name: 'Upper Subansiri', state_id: '9'},
        { name: 'West Kameng', state_id: '9'},
        { name: 'West Siang', state_id: '9'},
        { name: 'Itanagar', state_id: '9'},
        
        { name: 'Tinsukia', state_id: '10'},
        { name: 'Dibrugarh', state_id: '10'},
        { name: 'Dhemaji', state_id: '10'},
        { name: 'Charaideo', state_id: '10'},
        { name: 'Sivasagar', state_id: '10'},
        { name: 'Lakhimpur', state_id: '10'},
        { name: 'Majuli', state_id: '10'},
        { name: 'Jorhat', state_id: '10'},
        { name: 'Biswanath', state_id: '10'},
        { name: 'Golaghat', state_id: '10'},
        { name: 'Karbi Anglong East', state_id: '10'},
        { name: 'Sonitpur', state_id: '10'},
        { name: 'Nagaon', state_id: '10'},
        { name: 'Hojai', state_id: '10'},
        { name: 'Hamren', state_id: '10'},
        { name: 'Dima Hassao', state_id: '10'},
        { name: 'Cachar', state_id: '10'},
        { name: 'Hailakandi', state_id: '10'},
        { name: 'Karimganj', state_id: '10'},
        { name: 'Morigaon', state_id: '10'},
        { name: 'Udalguri', state_id: '10'},
        { name: 'Darrang', state_id: '10'},
        { name: 'Guwahati', state_id: '10'},
        { name: 'Kamrup', state_id: '10'},
        { name: 'South Salmara', state_id: '10'},
        { name: 'Dhubri', state_id: '10'},
        { name: 'Kokrajhar', state_id: '10'},
        { name: 'KGoalpara', state_id: '10'},
        { name: 'Bongaigaon', state_id: '10'},
        { name: 'Chirang', state_id: '10'},
        { name: 'Barpeta', state_id: '10'},
        { name: 'Nalbari', state_id: '10'},
        { name: 'Baksa', state_id: '10'},


        { name: 'Araria', state_id: '11'},
        { name: 'Aurangabad', state_id: '11'},
        { name: 'Bhagalpur', state_id: '11'},
        { name: 'Banka', state_id: '11'},
        { name: 'Begusarai', state_id: '11'},
        { name: 'Bhojpur', state_id: '11'},
        { name: 'Buxar', state_id: '11'},
        { name: 'Darbhanga', state_id: '11'},
        { name: 'Champaran', state_id: '11'},
        { name: 'Gaya', state_id: '11'},
        { name: 'Gopalganj', state_id: '11'},
        { name: 'Jamui', state_id: '11'},
        { name: 'Jehanabad', state_id: '11'},
        { name: 'Katihar', state_id: '11'},
        { name: 'Khagaria', state_id: '11'},
        { name: 'Kishanganj', state_id: '11'},
        { name: 'Lakhisarai', state_id: '11'},
        { name: 'Madhepura', state_id: '11'},
        { name: 'Madhubani', state_id: '11'},
        { name: 'Muzaffarpur', state_id: '11'},
        { name: 'Nalanda', state_id: '11'},
        { name: 'Nawada', state_id: '11'},
        { name: 'Patna', state_id: '11'},
        { name: 'Purnea', state_id: '11'},
        { name: 'Rohtas', state_id: '11'},
        { name: 'Saharsa', state_id: '11'},
        { name: 'Samastipur', state_id: '11'},
        { name: 'Shiekhpura', state_id: '11'},
        { name: 'Sitamarhi', state_id: '11'},
        { name: 'Siwan', state_id: '11'},
        { name: 'Vaishali', state_id: '11'},


       
        
   
     
   
     
       
   
      
       
   
     
        
   
      
        
   
     
        
   
      
        
   
      
   
      
        
   
      
        
   
     
        
   
   
   
     
       
   
      
      
   
    
   
        

      
        
        
        
       
        
        











      ]);
    });
};
