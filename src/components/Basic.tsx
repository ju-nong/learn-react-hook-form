import { useState } from "react";
import { useForm } from "react-hook-form";

type Inputs = {
    id: string;
    password: string;
    checkbox: string[];
    radio: string;
    select: string;
};

const inputsDefaultValues: Inputs = {
    id: "",
    password: "",
    checkbox: ["중식"],
    radio: "M",
    select: "혈액형",
};

function Basic() {
    const { register, handleSubmit } = useForm<Inputs>({
        defaultValues: inputsDefaultValues,
    });

    const [state, setState] = useState<Inputs>(inputsDefaultValues);

    function onSubmit(data: Inputs) {
        setState((state) => ({ ...state, ...data }));
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>
                <span>input[type="text"]</span>
                <input type="text" placeholder="id" {...register("id")} />
            </label>

            <label>
                <span>input[type="password"]</span>
                <input
                    type="password"
                    placeholder="password"
                    {...register("password")}
                />
            </label>

            <div>
                <span>input[type="checkbox"]</span>
                <label>
                    <input
                        type="checkbox"
                        defaultValue="한식"
                        {...register("checkbox")}
                    />
                    한식
                </label>

                <label>
                    <input
                        type="checkbox"
                        defaultValue="중식"
                        {...register("checkbox")}
                    />
                    중식
                </label>
                <label>
                    <input
                        type="checkbox"
                        defaultValue="양식"
                        {...register("checkbox")}
                    />
                    양식
                </label>
            </div>

            <div>
                <span>input[type="radio"]</span>
                <label>
                    <input
                        type="radio"
                        defaultValue="M"
                        {...register("radio")}
                    />
                    남성
                </label>
                <label>
                    <input
                        type="radio"
                        defaultValue="W"
                        {...register("radio")}
                    />
                    여성
                </label>
            </div>

            <label>
                <span>select</span>
                <select defaultValue="혈액형" {...register("select")}>
                    <option disabled>혈액형</option>
                    <option>A</option>
                    <option>B</option>
                    <option>O</option>
                    <option>AB</option>
                </select>
            </label>

            <button>제출</button>

            {JSON.stringify(state)}
        </form>
    );
}

export { Basic as default };
