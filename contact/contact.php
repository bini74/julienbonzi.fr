<?php 
    require_once(__DIR__ . '/vendor/autoload.php');
    use \Mailjet\Resources;
    define('API_PUBLIC_KEY', '3dcc873dde6afbbd8125fd147a4886e5');
    define('API_PRIVATE_KEY', '3efc03730e3e1b425d3c838c3497d10f');
    $mj = new \Mailjet\Client(API_PUBLIC_KEY, API_PRIVATE_KEY,true,['version' => 'v3.1']);


    if(!empty($_POST['surname']) && !empty($_POST['firstname']) && !empty($_POST['email']) && !empty($_POST['message'])){
        $surname = htmlspecialchars($_POST['surname']);
        $firstname = htmlspecialchars($_POST['firstname']);
        $email = htmlspecialchars($_POST['email']);
        $message = htmlspecialchars($_POST['message']);

        if(filter_var($email, FILTER_VALIDATE_EMAIL)){
        $body = [
            'Messages' => [
            [
                'From' => [
                'Email' => "contact@bini.black",
                'Name' => "Mail bini.black"
                ],
                'To' => [
                [
                    'Email' => "contact@bini.black",
                    'Name' => "Bini"
                ]
                ],
                'Subject' => "Demande de renseigment",
                'TextPart' => "$email, $message", 
            ]
            ]
        ];
            $response = $mj->post(Resources::$Email, ['body' => $body]);
            $response->success();
            echo "Email envoyé avec succès !";
        }
        else{
            echo "Email non valide";
        }

    }
    ?>