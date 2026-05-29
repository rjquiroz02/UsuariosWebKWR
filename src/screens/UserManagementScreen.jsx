import {
  useContext,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

import colors
  from "../constants/colors";

import UserCard
  from "../components/users/UserCard";

import {
  UserContext,
} from "../context/UserContext";

const currentUser = {
  id: "1",
  role: "Gerente General",
};

export default function
UserManagementScreen() {

  const navigate = useNavigate();

  const {
    users,
    deleteUser,
  } = useContext(UserContext);

  const handleEdit = (user) => {

    navigate(
      `/edit-user/${user.id}`
    );
  };

  const handleDelete = (user) => {

    if (
      user.id === currentUser.id
    ) {

      alert(
        "No puedes eliminar tu propia cuenta."
      );

      return;
    }

    const confirmDelete =
      window.confirm(
        `¿Eliminar a ${user.fullName}?`
      );

    if (confirmDelete) {
      deleteUser(user.id);
    }
  };

  return (

    <div style={styles.container}>

      <div style={styles.header}>

        <h1 style={styles.title}>
          Gestión de Usuarios
        </h1>

        {
          currentUser.role ===
            "Gerente General" && (

            <button
              style={styles.addButton}

              onClick={() =>
                navigate("/create-user")
              }
            >
              + Crear Usuario
            </button>
          )
        }

      </div>

      <div>

        {
          users.map((user) => (

            <UserCard
              key={user.id}

              user={user}

              onEdit={handleEdit}

              onDelete={handleDelete}

              canDelete={
                currentUser.role ===
                "Gerente General"
              }
            />
          ))
        }

      </div>

    </div>
  );
}

const styles = {

  container: {
    minHeight: "100vh",

    backgroundColor: colors.beige,

    padding: "40px",
  },

  header: {
    display: "flex",

    justifyContent:
      "space-between",

    alignItems: "center",

    marginBottom: "30px",
  },

  title: {
    color: colors.navy,
  },

  addButton: {
    backgroundColor: colors.teal,

    color: colors.white,

    border: "none",

    padding: "14px 18px",

    borderRadius: "10px",

    cursor: "pointer",

    fontWeight: "bold",
  },
};