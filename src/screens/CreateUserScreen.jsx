import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import colors from "../constants/colors";
import { PERMISSIONS } from "../constants/permissions";
import { UserContext } from "../context/UserContext";

const availablePermissions = Object.values(PERMISSIONS);

export default function CreateUserScreen() {
  const navigate = useNavigate();

  const { addUser, users } = useContext(UserContext);

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [fullName, setFullName] = useState("");

  const [phone, setPhone] = useState("");

  const [role, setRole] = useState("");

  const [selectedPermissions, setSelectedPermissions] = useState([]);

  const togglePermission = (permission) => {
    if (selectedPermissions.includes(permission)) {
      setSelectedPermissions(
        selectedPermissions.filter(
          (item) => item !== permission
        )
      );
    } else {
      setSelectedPermissions([
        ...selectedPermissions,
        permission,
      ]);
    }
  };

  const validateForm = () => {
    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      alert(
        "Debe ingresar un correo electrónico válido."
      );
      return false;
    }

    const existingUser = users.find(
      (user) =>
        user.email.toLowerCase() ===
        email.toLowerCase()
    );

    if (existingUser) {
      alert(
        "Ya existe un usuario con ese correo."
      );
      return false;
    }

    if (!password.trim()) {
      alert(
        "Debe ingresar una contraseña."
      );
      return false;
    }

    if (password.length < 6) {
      alert(
        "La contraseña debe tener al menos 6 caracteres."
      );
      return false;
    }

    if (!fullName.trim()) {
      alert(
        "Debe ingresar el nombre completo."
      );
      return false;
    }

    if (fullName.length < 3) {
      alert(
        "El nombre completo es demasiado corto."
      );
      return false;
    }

    const phoneRegex = /^\d{8}$/;

    if (!phoneRegex.test(phone)) {
      alert(
        "El celular debe contener exactamente 8 dígitos."
      );
      return false;
    }

    if (!role) {
      alert(
        "Debe seleccionar un rol."
      );
      return false;
    }

    return true;
  };

  const handleCreateUser = () => {
    if (!validateForm()) {
      return;
    }

    addUser({
      email,
      password,
      fullName,
      phone,
      role,
      permissions: selectedPermissions,
    });

    alert(
      "Usuario creado correctamente"
    );

    navigate("/");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        Crear Usuario
      </h1>

      <input
        style={styles.input}
        type="email"
        placeholder="Correo Electrónico"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      <input
        style={styles.input}
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) =>
          setPassword(e.target.value)
        }
      />

      <input
        style={styles.input}
        placeholder="Nombre Completo"
        value={fullName}
        onChange={(e) =>
          setFullName(e.target.value)
        }
      />

      <input
        style={styles.input}
        placeholder="Celular"
        value={phone}
        onChange={(e) =>
          setPhone(e.target.value)
        }
      />

      <h3 style={styles.sectionTitle}>
        Rol
      </h3>

      <div style={styles.rolesContainer}>
        {[
          "Gerente General",
          "Asistente Administrativo",
          "Vendedor",
        ].map((item) => (
          <button
            key={item}
            type="button"
            style={{
              ...styles.roleButton,
              backgroundColor:
                role === item
                  ? colors.teal
                  : colors.white,
              color:
                role === item
                  ? colors.white
                  : colors.navy,
            }}
            onClick={() =>
              setRole(item)
            }
          >
            {item}
          </button>
        ))}
      </div>

      <h3 style={styles.sectionTitle}>
        Permisos
      </h3>

      {availablePermissions.map(
        (permission) => (
          <div
            key={permission}
            style={styles.permissionItem}
          >
            <input
              type="checkbox"
              checked={selectedPermissions.includes(
                permission
              )}
              onChange={() =>
                togglePermission(
                  permission
                )
              }
            />

            <span>{permission}</span>
          </div>
        )
      )}

      <button
        style={styles.saveButton}
        onClick={handleCreateUser}
      >
        Crear Usuario
      </button>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: colors.beige,
    padding: "40px",
  },

  title: {
    color: colors.navy,
    marginBottom: "30px",
  },

  input: {
    width: "100%",
    padding: "14px",
    marginBottom: "15px",
    borderRadius: "10px",
    border: "1px solid #ccc",
  },

  sectionTitle: {
    color: colors.navy,
    marginTop: "20px",
    marginBottom: "10px",
  },

  rolesContainer: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
    marginBottom: "20px",
  },

  roleButton: {
    padding: "12px 16px",
    borderRadius: "10px",
    border: "none",
    cursor: "pointer",
  },

  permissionItem: {
    display: "flex",
    gap: "10px",
    marginBottom: "10px",
  },

  saveButton: {
    marginTop: "25px",
    backgroundColor: colors.navy,
    color: colors.white,
    border: "none",
    padding: "16px",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};