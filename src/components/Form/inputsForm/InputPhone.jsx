export const InputPhone = ({ register, errors }) => {
    return (
        <>
            <label htmlFor="phone">Teléfono</label>
            <input
                id="phone"
                type="number"
                {...register("phone", {
                    required: true,
                    minLength: 8,
                    maxLength: 9,
                })}
            />
            {errors.phone?.type === "required" && <p>El campo es requerido</p>}
            {errors.phone?.type === "minLength" && (
                <p>Número no válido, debe ser mayor o igual a 8 caracteres</p>
            )}
            {errors.phone?.type === "maxLength" && (
                <p>Número no válido, debe ser menor o igual a 9 caracteres</p>
            )}
        </>
    );
};
