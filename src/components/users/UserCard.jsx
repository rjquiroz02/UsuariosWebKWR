import colors from "../../constants/colors";

export default function UserCard({
  user,
  onEdit,
  onDelete,
  canDelete,
}) {
  return (
    <div style={styles.card}>
      <div>
        <h3 style={styles.name}>
          {user.fullName}
        </h3>

        <div style={styles.infoContainer}>
          <p style={styles.info}>
            <strong>Usuario:</strong>{" "}
            {user.username}
          </p>

          <p style={styles.info}>
            <strong>Correo:</strong>{" "}
            {user.email}
          </p>

          <p style={styles.info}>
            <strong>Celular:</strong>{" "}
            {user.phone}
          </p>

          <p style={styles.role}>
            <strong>Rol:</strong>{" "}
            {user.role}
          </p>
        </div>
      </div>

      <div style={styles.actions}>
        <button
          style={styles.editButton}
          onClick={() => onEdit(user)}
        >
          Editar
        </button>

        {canDelete && (
          <button
            style={styles.deleteButton}
            onClick={() => onDelete(user)}
          >
            Eliminar
          </button>
        )}
      </div>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: colors.white,

    padding: "20px",

    borderRadius: "12px",

    marginBottom: "15px",

    boxShadow:
      "0 2px 8px rgba(0,0,0,0.08)",
  },

  name: {
    color: colors.navy,

    marginBottom: "12px",
  },

  infoContainer: {
    marginBottom: "15px",
  },

  info: {
    marginBottom: "6px",

    color: colors.navy,
  },

  role: {
    marginTop: "10px",

    color: colors.teal,

    fontWeight: "bold",
  },

  actions: {
    display: "flex",

    gap: "10px",
  },

  editButton: {
    backgroundColor:
      colors.skyBlue,

    border: "none",

    padding: "10px 15px",

    borderRadius: "8px",

    cursor: "pointer",
  },

  deleteButton: {
    backgroundColor: "#D9534F",

    color: "white",

    border: "none",

    padding: "10px 15px",

    borderRadius: "8px",

    cursor: "pointer",
  },
};