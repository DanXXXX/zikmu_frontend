import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function EventForm() {
    const {
        formState: {errors}, 
    } = useForm();

    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [category, setCategory] = useState("");
    const [file, setFile] = useState(""); 
    const [location, setLocation] = useState(""), 

    const handleTitle = (e) => {
        setTitle(e.target.value);
    };

    const handleText = (e) => {
        setText(e.target.value);
    };

    const handleCategory = (e) => {
        setCategory(e.target.value)
    };

    const handleFile = (e) => {
        setFile(e.target.value)
    };

    const handleLocation = (e) => {
        setLocation(e.target.value)
    };

    return (
        <div>
            <h1 className="title">Ajouter un évènement</h1>
        </div>

    );
    
};
