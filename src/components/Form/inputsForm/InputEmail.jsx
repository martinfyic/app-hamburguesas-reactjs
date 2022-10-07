export const InputEmail = ({ register, errors }) => {
    return (
        <>
            <label htmlFor="email">Email</label>
            <input
                id="email"
                type="text"
                {...register("email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                })}
            />
            {errors.email?.type === "required" && <p>El campo es requerido</p>}
            {errors.email?.type === "pattern" && (
                <p>El formato del email no es valido</p>
            )}
        </>
    );
};
