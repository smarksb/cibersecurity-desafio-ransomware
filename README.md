# Documentação: Encrypter e Decrypter para Projeto de To-Do List

Neste projeto, temos dois códigos principais: um para criptografar arquivos (Encrypter) e outro para descriptografá-los (Decrypter). 
Esses scripts podem ser utilizados para garantir a segurança de informações em um aplicativo de lista de tarefas (To-Do List), 
permitindo que os dados armazenados sejam protegidos.

## 1. Encrypter (Criptografia)

O código de encriptação é responsável por pegar um arquivo de texto, criptografá-lo e salvar uma versão criptografada. Aqui está uma explicação detalhada do funcionamento:

### Passos do Código:

1. **Abrir o arquivo a ser criptografado:**
   ```python
   file_name = "teste.txt"
   file = open(file_name, "rb")
   file_data = file.read()
   file.close()
