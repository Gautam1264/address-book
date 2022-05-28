# address-book
API's for Address-Book are implemented in Node-JS , Express-JS and Mongo-DB database.       
JWT authentication is added.     
        
                       
Already six contacts are present in the database.     
              
To test the api's on postman you can use following test cases - 
       
<h4>First you have to use api '/get-token' -</h4>
<p>
  <ul>
  <li>Request Type - GET </li>                                           
  <li>On postman use - http://localhost:3000/get-token/  </li>                                     
  <li>Copy the token</li>
  </ul>
<p>  
<h4>For api '/add-many-contacts' - </h4> 
  <ul>
  <li>Request Type - POST</li>
  <li>On postman use - http://localhost:3000/add-many-contacts/ </li>
  <li>Data for is 'x-www-form-urlencoded' </li>
  <li>Then you can put key value pairs :</li>
   <table>
     <tr> <th>Key</th><th>Value</th> </tr>
     <tr> <td>first_name</td><td>abcde</td> </tr>
     <tr> <td>last_name</td><td>fghij</td> </tr>
     <tr> <td>phone_number</td><td>9842121788</td> </tr>
     <tr> <td>city</td><td>hoifhwekc</td> </tr>
     <tr> <td>first_name</td><td>klmnop</td> </tr>
     <tr> <td>last_name</td><td>qrstuv</td> </tr>
     <tr> <td>phone_number</td><td>7845121233</td> </tr>
     <tr> <td>city</td><td>gyuwbfjw</td> </tr>
     </table>
    </ul>
    
<h4>For api '/add-one-contact' - </h4> 
  <ul>
  <li>Request Type - POST</li>
  <li>On postman use - http://localhost:3000/add-one-contact/ </li>
  <li>Data for is 'x-www-form-urlencoded' </li>
  <li>Then you can put key value pairs :</li>
   <table>
     <tr> <th>Key</th><th>Value</th> </tr>
     <tr> <td>first_name</td><td>jbfjfj</td> </tr>
     <tr> <td>last_name</td><td>jenfk</td> </tr>
     <tr> <td>phone_number</td><td>6842591788</td> </tr>
     <tr> <td>city</td><td>yudbiew</td> </tr>
     </table>
    </ul>
    
 <h4>For api '/delete-contact' - </h4> 
  <ul>
  <li>Request Type - DELETE</li>
  <li>On postman use - http://localhost:3000/delete-contact/ </li>
  <li>Data for is 'x-www-form-urlencoded' </li>
  <li>Then you can put key value pairs :</li>
   <table>
     <tr> <th>Key</th><th>Value</th> </tr>
     <tr> <td>first_name</td><td>jbfjfj</td> </tr>
     <tr> <td>last_name</td><td>jenfk</td> </tr>
     <tr> <td>phone_number</td><td>6842591788</td> </tr>
     <tr> <td>city</td><td>yudbiew</td> </tr>
     </table>
    </ul>
    
 <h4>For api '/update-contact' - </h4> 
  <ul>
  <li>Request Type - POST</li>
  <li>On postman use - http://localhost:3000/update-contact/ </li>
  <li>Data for is 'x-www-form-urlencoded' </li>
  <li>Then you can put key value pairs :</li>
   <table>
     <tr> <th>Key</th><th>Value</th> </tr>
     <tr> <td>first_name</td><td>abcde</td> </tr>
     <tr> <td>last_name</td><td>fghij</td> </tr>
     <tr> <td>phone_number</td><td>9842121788</td> </tr>
     <tr> <td>city</td><td>hoifhwekc</td> </tr>
     <tr> <td>ufirst_name</td><td>abcde</td> </tr>
     <tr> <td>ulast_name</td><td>fghij</td> </tr>
     <tr> <td>uphone_number</td><td>9842121765</td> </tr>
     <tr> <td>ucity</td><td>brfjnkfn</td> </tr>
     </table>
    </ul>
    
  <h4>For api '/all-contacts' - </h4> 
  <ul>
  <li>Request Type - GET</li>
  <li>On postman use - http://localhost:3000/all-contacts/ </li>
  <li>Data will be printed in the console with paging</li>
  </ul>
  
  <h4>For api '/single-contact-details' - </h4> 
  <ul>
  <li>Request Type - GET</li>
  <li>On postman use - http://localhost:3000/single-contact-details/ </li>
    <table>
     <tr> <th>Key</th><th>Value</th> </tr>
     <tr> <td>first_name</td><td>abcde</td> </tr>
     <tr> <td>last_name</td><td>fghij</td> </tr>
     </table>
  <li>You should give both first_name and last_name</li>
  <li>Data will be printed in the console with full details</li>
  </ul>
    
  <h4>For api '/phase-match-results' - </h4> 
  <ul>
  <li>Request Type - GET</li>
  <li>On postman use - http://localhost:3000/phase-match-results/ </li>
    <table>
     <tr> <th>Key</th><th>Value</th> </tr>
     <tr> <td>city</td><td>Ludhiana</td> </tr>
    </table>
  <li>You should either give both first_name and last_name or phone_number or city </li>
  <li>Data will be printed in the console with full details whaich has relevant match</li>
  </ul>
