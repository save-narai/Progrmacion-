# Desarrollar un programa   que pida la altura de una persona, si la altura es menor o igual a 150 cm envíe el mensaje: Persona de altura baja; si la altura está entre 151 y 170 cm escriba el mensaje: Persona de altura media 
# y si la altura es mayor a 171 escriba el mensaje: Persona alta.


#programa para definir la altura de una persona
#solicitar al usuario que ingrese la altura en centimtros
altura = float(input("ingresar la altura en centimtros:  "))


if altura <=150:
 print("persona baja")

elif altura >=170:
print("persona de altura media")

else: 
print("persona alta")

