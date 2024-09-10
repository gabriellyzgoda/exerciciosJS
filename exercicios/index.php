<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="estilocadastro.css" media="screen"/>
    <title>Sistema</title>
</head>
<body>
    <center>
        <div class="conteudo">
                    <h1>Cadastro</h1>
                    <form class="form" method="POST" action="cadastro.php" id="formcadastro" name="formcadastro" >
                        <label><h2>Nome: </h2></label>
                            <input  class="inputs" type="text" name="nome" id="nome" size="20" required>
                        <label><h2>Idade: </h2></label>
                            <input  class="inputs" type="number" name="idade" id="idade" size="20" required>
                            <br>
                            <br>
                            <input class="botao" type="submit" value="Cadastrar" />
                        <?php if (isset($_GET['sucesso'])){ ?>
                            <div class="linha">
                            <div class="mensagem">
                            <p>
                                        <?php
                                        // Exibe mensagem de erro com base no parâmetro 'erro'
                                        if ($_GET['sucesso'] == 1) {
                                            echo "Seu cadastro foi feito com sucesso!";
                                        } else {
                                            echo "Seu cadastro não deu certo :(";
                                        }
                                    }
                                        ?>
                                    </p>
                                    </div>
                                    </div>
                    </form>
                </div>
            </center>
</body>
</html>