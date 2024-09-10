<?php
			$hostname = "127.0.0.1";
			$user = "root";
			$password = "";
			$database = "sistema";
		
			$conexao = new mysqli($hostname,$user,$password,$database);

			if ($conexao -> connect_errno) {
				echo "Failed to connect to MySQL: " . $conexao -> connect_error;
				exit();
			} else {
				$nome = $conexao -> real_escape_string($_POST['nome']);
				$idade = $conexao -> real_escape_string($_POST['idade']);

				$sql = "INSERT INTO cadastro
							(`nome`, `idade`)
						VALUES
							('".$nome."', '".$idade."');";
echo $sql;
				$resultado = $conexao->query($sql);
				
				$conexao -> close();
				header('Location: index.php?sucesso=1', true, 301);
			}
?>		