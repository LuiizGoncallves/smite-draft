import requests
import json

# URL da API dos deuses
url = "https://cms.smitegame.com/wp-json/smite-api/all-gods/1"

# Fazendo a requisição para a API
response = requests.get(url)
gods_data = response.json()

# Lista para armazenar as informações dos deuses
gods_list = []

# Iterando sobre os dados dos deuses e extraindo as informações desejadas
for god in gods_data:
    god_info = {
        "godName": god["name"],
        "photo": god["card"],
        "role": god["role"],
        "type": god["type"],
        "pros": god["pros"]
    }
    gods_list.append(god_info)

# Imprimindo as informações dos deuses na tela
for god in gods_list:
    print(f"God Name: {god['godName']}, Photo URL: {god['photo']}, Role: {god['role']}, Type: {god['type']}, Pros: {god['pros']}")

# Salvando as informações dos deuses no arquivo gods.js
with open("gods.js", "w") as file:
    file.write("const gods = ")
    json.dump(gods_list, file, indent=4)
    file.write(";")

print("As informações dos deuses foram salvas no arquivo gods.js")
