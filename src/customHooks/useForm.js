import { useState } from "react"

const useForm = (data) => {

    const [formData, setFormData] = useState(data);

    const handleFormChange = (e) => {
        let { id, value } = e.target;
        // console.log('IN HANDLE CHANGE for FORM', { id, value });
        if (id == "date") {
            const dateToday = new Date();
            const selectedDate = new Date(value);
            console.log(selectedDate);
            if (selectedDate < dateToday) {
                return;
            }
            value = value.split('T')[0];
        }

        setFormData({
            ...formData,
            [id]: value
        })
    }
    const clearInputs = () => {
        setFormData({
            ...data
        })
    }


    return { formData, handleFormChange, clearInputs };
}

export default useForm;