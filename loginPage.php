<?php
include_once 'connection/php/location(dbConnect.php)';
?>
<html>
<head>
<title>Online PHP Script Execution</title>
</head>
<body>
<?php
   $sql="query";
   $result=mysqli_query($conn, $sql);
   $reusltCheck=mysqli_num_rows($result);
   if($reusltCheck>0){
      while($row=mysqli_fetch_assoc($result){
          echo $row[];
      }
       
   }
?>
</body>
</html>