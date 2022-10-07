export const InputLastName = ({ register, errors }) => {
    return (
        <>
            <label htmlFor="lastName">Apellido</label>
            <input
                type="text"
                id="lastName"
                {...register("lastName", { required: true })}
            />
            {errors.lastName?.type === "required" && (
                <p>El campo es requerido</p>
            )}
        </>
    );
};
