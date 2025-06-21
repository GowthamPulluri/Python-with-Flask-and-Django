# f=open('text.txt','r')
# # print(f.readline(1))
# f1=open('text1.txt','w')
# for char in f:
#     print(f1.write(char))
# f2=open('text.txt','a')
# f2.write("This is appended")

f1=open('R.png','rb')
# print(f1.read())
f2=open('R2.png','wb')
for data in f1:
    f2.write(data)