<h1>
    <img align="center" width="40px" src="https://i.ibb.co/6cFgDxqm/cript.png">
    <span> Descriptografando um Arquivo</span>
</h1>

## Objetivo  
O objetivo é reverter a criptografia de um arquivo.

## Ferramentas  
- [Kali Linux](https://www.kali.org/)
- [Python](https://www.python.org/)

## Estrutura do projeto
- encrypter.py - O arquivo vai criptografar os arquivos. 
- decrypter.py - O arquivo vai descriptografar o arquivo criptografado.

## Etapas do projetos

<table>
  <thead>
    <tr align="center">
      <th>Nº</th>
      <th>Etapas</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>01</td>
      <td>Abra o Terminal (CMD). </td>
    </tr>
    <tr>
      <td>02</td>
      <td>Inicie o editor NANO com o comando: `nano`.  </td>
    </tr>
    <tr>
      <td>03</td>
      <td>Escreva o código para abrir o arquivo criptografado. </td>
    </tr>
    <tr>
      <td>04</td>
      <td>Defina o código para a chave de descriptografia.  </td>
    </tr>
    <tr>
      <td>05</td>
      <td>Adicione o código para excluir o arquivo criptografado.</td>
    </tr>
    <tr>
      <td>06</td>
      <td>Crie o código para gerar o arquivo sem criptografia.  </td>
    </tr>
  </tbody>
</table>

## Passo a passo 

1. **Abra o Terminal:**  
<table>
  <tr>
    <td>
      <img src="https://i.ibb.co/qLCVMtZj/terminal.png" alt="3" border="0"></a>
    </td>
</table>

2. Criando o arquivo de encrypter.  
<table>
  <tr>
    <td>
      <img src="https://i.ibb.co/pjFZbJDv/arquivo-encrypter.png" alt="3" border="0"></a>
    </td>
</table>

3. Criando o arquivo de decrypter
<table>
  <tr>
    <td>
      <img src="https://i.ibb.co/35JFwrD5/arquivo-decrypter.png" alt="3" border="0"></a>
    </td>
</table>

4. Criação do projeto onde a documentação será criptografada. 
<table>
  <tr>
    <td>
      <img src="https://i.ibb.co/4RVFVnCF/3.png" alt="3" border="0"></a>
    </td>
</table>

Antes de começar a digitar o código, você precisa importar duas bibliotecas:  
   - **os**: Permite interagir com o sistema operacional.  
   - **pyaes**: Algoritmo que será utilizado para criptografar e descriptografar o arquivo.  
   - Crie o arquivo com a extensão `.py` antes de começar a escrever o código.

4. **Escreva o código para abrir o arquivo criptografado.**  
5. **Escreva o código para a chave de descriptografia.**  
6. **Escreva o código para excluir o arquivo criptografado.**  
7. **Escreva o código para gerar o arquivo sem criptografia.**  

8. **Salvar e sair:**  
   - Para salvar, pressione `Ctrl + o`.  
   - Para sair do editor NANO, pressione `Ctrl + x`.  
   - Para rodar o código, digite no terminal: `python nome_do_arquivo.py` (por exemplo: `codigo_encrypto.py`).

## Resolvendo o erro "ModuleNotFoundError: No module named 'pyaes'"  
Será preciso instalar a biblioteca **pyaes**:

1. Atualize o sistema com:  
```sh
sudo apt-get update && sudo apt-get upgrade
```
2. Instale a biblioteca **pyaes** com:
```sh
sudo apt install python3-pyaes
```
##
<div align="center">Feito por <a href="https://github.com/smarksb">smarksb</a>.</div>
<div align="center">Repositório desenvolvido para fins educativos.</a></div>