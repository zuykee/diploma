<?php
$msgs = [];
  
     
      if ($msgs) {
      echo json_encode($msgs);
      die;
    } else {
      $msgs['success'] = MSGSSUCCESS;
    }

    