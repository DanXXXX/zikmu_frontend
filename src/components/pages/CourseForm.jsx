import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function CourseForm() {
  const {
    formState: { errors },
  } = useForm();

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [file, setFile] = useState("");
  const [price, setPrice] = useState("");

  return (
    <div>
      <h1 className="title">Proposer un cours</h1>
    </div>
  );
}
