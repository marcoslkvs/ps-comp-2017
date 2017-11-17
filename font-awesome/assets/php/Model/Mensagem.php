<?php
	
	class Mensagem 
	{

		var $nome;
		var $email;
		var $curriculo;

		function Mensagem($nome, $email, $curriculo)
		{
			$this->nome = $nome;
			$this->email = $email;
			$this->curriculo = $curriculo;
			$this->montaCorpoMensagem();
		}

		function montaCorpoMensagem()
		{
			$this->corpo_mensagem = "<center> <h3> $this->nome <h3>"; 
			$this->corpo_mensagem .= "<h4> $this->email </h4> </center>"; 
		}

		function getCorpoMensagem()
		{
			return $this->corpo_mensagem;
		}

		function getNome()
		{
			return $this->nome;
		}

		function getEmail()
		{
			return $this->email;
		}
	}

?>