export const InputLastName = ({ register, errors }) => {
    return (
        <>
            <label htmlFor="lastName">Apellido</label>
            <input
                type="text"
                id="lastName"
                {...register("lastName", {
                    required: true,
                    pattern: /^[A-Za-z]+$/i,
                    maxLength: 10,
                    minLength: 3,
                })}
            />
            {errors.lastName?.type === "required" && (
                <p>El campo es requerido</p>
            )}
            {errors.lastName?.type === "pattern" && (
                <p>El nombre no debe incluir números</p>
            )}
            {errors.lastName?.type === "maxLength" && (
                <p>Máximo 10 caracteres</p>
            )}
            {errors.lastName?.type === "minLength" && (
                <p>Mínimo 3 caracteres</p>
            )}
        </>
    );
};
