export const InputDirection = ({ register, errors }) => {
    return (
        <>
            <label htmlFor="direction">Dirección</label>
            <input
                id="direction"
                type="text"
                {...register("direction", {
                    required: true,
                    maxLength: 45,
                })}
            />
            {errors.direction?.type === "required" && (
                <p>El campo es requerido</p>
            )}
        </>
    );
};
