from Socket import Socket
import threading

class Server(Socket):
    def __init__(self):
       super(Server, self).__init__()
        

server.bind(
    ('127.0.0.1', 1234)  # localhost # передэться кортеж(хост, порт)
)
server.listen(10)
print('Server is listening')

users = []


def send_all(data):
    for user in users:
        user.send(data)


def listen_user(user):
    print('Listening user')
    while True:
        data = user.recv(2048)
        print(f'User sent {data}')
        send_all(data)


def start_server():
    while True:
        user_socket, address = server.accept()  # blocking
        print(f'User <{address[0]}> connected!')
        # user_socket.send('You are connected'.encode('utf-8'))
        # data = user_socket.recv(2048)
        # print(data.decode('utf-8'))

        users.append(user_socket)
        listen_accepted_user = threading.Thread(
            target=listen_user,
            args=(user_socket,)
        )

        listen_accepted_user.start()
        # messages


if __name__ == '__main__':
    start_server()

# main - присоединение
# client_1_listen - ответственный за действия первого клиента
# client_2_listen - ответственный за действия второго клиента
