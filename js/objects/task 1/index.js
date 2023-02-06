// Тебе необходимо создать новый массив onlineUsers, который будет содержать объекты только тех пользователей,
// у которых status равен "online".

// После выведи через alert() сообщение: “Сейчас в онлайн следующие пользователи: usersOnlineNames”,
// где usersOnlineNames - строка, в которой имена пользователей отображаются через запятую.

// Для кода выше результат должен быть следующим: “Сейчас в онлайн следующие пользователи: David, Bob”.
const users = [
  {
    username: "David",
    status: "online",
    lastActivity: 10,
  },
  {
    username: "Lucy",
    status: "offline",
    lastActivity: 22,
  },
  {
    username: "Bob",
    status: "online",
    lastActivity: 104,
  },
];

const onlineUsers = users.filter((user) => user.status === "online");
let onlineUsersText = "";
onlineUsers.forEach((user) => {
  onlineUsersText += user.username + ", ";
});

console.log(`Сейчас в онлайн следующие пользователи: ${onlineUsersText}`);
