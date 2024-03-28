import { useContext } from "react";
import { NameContext } from "../contexts/NameContext";

export function Button() {
    const {name, setName} = useContext(NameContext)

    const changeName = () => {
        setName(`Changed inside of the button2 component`)
    }


    return <button onClick={changeName}>
        Go, {name}
    </button>;
}
