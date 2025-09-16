import bcrypt from "bcrypt";

export const passwordHash = (password) => {
    try {
        const hashed = bcrypt.hash(password, 10);

        return hashed;
    } catch (error) {
        throw new Error("Error en el hash");
        console.log(Error)
    }
};

export const comparePassword = (password, hashedPassword) => {
    try {
        const compare = bcrypt.compare(password, hashedPassword);

        return compare;
        return hashed;
    } catch (error) {
        throw new Error("Error en el hash");
        console.log(Error)
    }
};