export const InputDirection = ({ register, errors }) => {
    return (
        <>
            <label htmlFor="direction">Dirección</label>
            <input
                id="direction"
                type="text"
                {...register("direction", {
                    required: true,
                    maxLength: 50,
                    minLength: 8,
                })}
            />
            {errors.direction?.type === "required" && (
                <p>El campo es requerido</p>
            )}
            {errors.direction?.type === "maxLength" && (
                <p>Maximo 45 caracteres</p>
            )}
            {errors.direction?.type === "minLength" && (
                <p>Mínimo 8 caracteres</p>
            )}
        </>
    );
};
