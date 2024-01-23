import ComponentSize from "../../../consts/componentSize";
import ITag from "../../../interfaces/ITag";
import {Dispatch, SetStateAction} from "react";

interface ChipInterface extends ITag{
    size: ComponentSize,
    isEditMode?: boolean,
    setSelectedTag?: Dispatch<SetStateAction<string>>
}

export default ChipInterface