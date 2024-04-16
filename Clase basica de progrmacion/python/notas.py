#el alumno aprueba con una nota>=3

# pedir al usuario que ingrese el numero
nota1 = float(input("ingresar la primera nota (entre 0 y5 ):"))
nota2 = float(input("ingresar la primera nota (entre 0 y5 ):"))
nota3 =  float(input("ingresar la primera nota (entre 0 y5 ):"))
nota4 = float (input("ingresar la primera nota (entre 0 y5 ):"))

if nota1>=0 and nota1<=5 and nota2>=0 and nota2<=5 and  nota3>=0 and nota3>=5 and nota4>=0 and nota4>=5:
#calcula la nota

 nota =(nota1 + nota2 + nota3 + nota4)/4
 
if nota >=3:
    print("el alumno aprobo con:", nota)


else:print("el alumno reprobo con: ", nota)


