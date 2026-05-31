import { PERMISSIONS } from "../constants/permissions";

export const users = [
  {
    id: "1",

    password: "123456",

    fullName: "Carlos Martínez",

    phone: "99991111",

    email: "carlos@kwr.com",

    role: "Gerente General",

    permissions: Object.values(PERMISSIONS),
  },

  {
    id: "2",

    password: "123456",

    fullName: "Ana López",

    phone: "99992222",

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

    password: "123456",

    fullName: "Luis Hernández",

    phone: "99993333",

    email: "luis@kwr.com",

    role: "Vendedor",

    permissions: [],
  },
];