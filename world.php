<?php
$host = 'localhost';
$username = 'lab5_user';
$password = 'password123';
$dbname = 'world';
$context='holder';

$conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
$country=$_GET['country'];
$context=$_GET['cities'];
htmlspecialchars($country);

if($context != "cities")
{
  $stmt = $conn->query("SELECT * FROM countries WHERE name LIKE '%$country%'");
  
}
else
{
  $stmt= $conn->query("SELECT cities.district, cities.population, cities.name FROM countries INNER JOIN cities ON 
  countries.code = cities.country_code WHERE countries.name LIKE '%$country%'");
}

$results = $stmt->fetchAll(PDO::FETCH_ASSOC);
header('Access-Control-Allow-Origin: *');
?>
<table>
<?php if ($context != "cities"){
 print"<tr>
  <th>Name</th>
  <th>Continent</th>
  <th>Indepence</th>
  <th>Head of State</th>
</tr>";

 foreach ($results as $row):?>
<tr><?= "<td>".$row['name']."</td>"."<td>". $row['continent']."</td>"."<td>".$row['independence_year']."</td>"."<td>" . $row['head_of_state']. "</td>";?></tr>
<?php endforeach;
     }?>

   </table>
<table>
   <?php if ($context == "cities"){
 print"<tr>
  <th>Name</th>
  <th>District</th>
  <th>Population</th>
</tr>";

 foreach ($results as $row):?>
<tr><?= "<td>".$row['name']."</td>"."<td>". $row['district']."</td>"."<td>".$row['population']."</td>";?></tr>
<?php endforeach;
     }?>
</table>