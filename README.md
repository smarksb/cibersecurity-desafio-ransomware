<h1>
    <img align="center" width="40px" src="https://i.ibb.co/6cFgDxqm/cript.png">
    <span> Descriptografando um Arquivo - ransomware</span>
</h1>

## Objetivo  
O objetivo é demonstrar uma criptografia de um arquivo e como recuperar ele.

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
      <td>Configurar ambiente. </td>
    </tr>
    <tr>
      <td>02</td>
      <td>Criar arquivo para criptografar arquivo.  </td>
    </tr>
    <tr>
      <td>03</td>
      <td>Criar arquivo para descriptografar arquivo. </td>
    </tr>
    <tr>
      <td>04</td>
      <td>Atualizar o sistama e instalar a biblioteca (pyaes).  </td>
    </tr>
    <tr>
      <td>05</td>
      <td>Criptografar e descriptografar o arquivo criptografado.</td>
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
      <img src="https://i.ibb.co/XkJyxsW3/encrypter.png" alt="3" border="0"></a>
    </td>
</table>

3. Criando o arquivo de decrypter
<table>
  <tr>
    <td>
      <img src="https://i.ibb.co/RTs2dsZd/decrypter.png" alt="3" border="0"></a>
    </td>
</table>

4. Criação do projeto onde a documentação será criptografada. 
<table>
  <tr>
    <td>
      <img src="https://i.ibb.co/WWtNKcp3/projeto.png" alt="3" border="0"></a>
    </td>
</table>

## Resultado 
1. Criptografando a documentação do projeto.
<table>
  <tr>
    <td>
      <img src="https://i.ibb.co/pjFZbJDv/arquivo-encrypter.png" alt="3" border="0"></a>
    </td>
</table>

2. Descriptografando o arquivo da documentação.  
<table>
  <tr>
    <td>
      <img src="https://i.ibb.co/35JFwrD5/arquivo-decrypter.png" alt="3" border="0"></a>
    </td>
</table>

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