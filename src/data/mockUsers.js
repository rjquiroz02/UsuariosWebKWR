import { PERMISSIONS } from "../constants/permissions";

export const users = [
  {
    id: "1",

    username: "carlosm",

    password: "123456",

    fullName: "Carlos Martínez",

    phone: "9999-1111",

    email: "carlos@kwr.com",

    role: "Gerente General",

    permissions: Object.values(PERMISSIONS),
  },

  {
    id: "2",

    username: "analopez",

    password: "123456",

    fullName: "Ana López",

    phone: "9999-2222",

    email: "ana@kwr.com",

    role: "Asistente Administrativo",

    permissions: [
      PERMISSIONS.BILLING,
      PERMISSIONS.PURCHASES,
      PERMISSIONS.ACCOUNTS_RECEIVABLE,
    ],
  },

  {
    id: "3",

    username: "lhernandez",

    password: "123456",

    fullName: "Luis Hernández",

    phone: "9999-3333",

    email: "luis@kwr.com",

    role: "Vendedor",

    permissions: [],
  },
];